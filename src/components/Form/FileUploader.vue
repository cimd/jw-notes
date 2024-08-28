<template>
  <div>
    <div class='row label'>{{ label }}</div>
    <div class='outline-border' :cy-label="cypressLabel + '-container'">
      <q-file
        v-model='file'
        append
        class='q-pa-xs'
        :cy-label='cypressLabel'
        :disable='isDisabled'
        :error='error'
        :error-message='errorMessage'
        :label='hint'
        max-file-size='25000000'
        :readonly='readonly'
        square
        standout='bg-secondary text-white'
        use-chips
        @rejected='onRejected'
        @update:model-value='onFileUploaded'
      >
        <template v-slot:prepend>
          <q-icon name='sym_o_attach_file' />
        </template>
        <template v-slot:append>
          <q-spinner
            v-show='uploading'
            color='white'
            :thickness='10'
          />
        </template>
      </q-file>
      <q-list class='file-list' cy-label='file-list'>
        <q-item v-for='file in filesList' :key='file.url' class='bg-grey-1 q-ma-xs'>
          <q-item-section avatar>
            <q-icon class='cursor-pointer' color='primary' :name='iconName(file.type)' @click='onViewFile(file)'>
              <q-tooltip>Open File</q-tooltip>
            </q-icon>
          </q-item-section>
          <q-item-section>
            <div class='row'>
              <div class='file-name-container'>{{ file.name }} </div>
              <q-space />
              <span class='text-weight-thin'>{{ date.toDisplay(file.created_at, true) }}</span>
            </div>
            <div class='row'>
              <span class='text-weight-thin'>{{ getFileSize(file.size) }}</span>
            </div>
          </q-item-section>
          <q-item-section avatar>
            <q-icon class='cursor-pointer' color='primary' name='sym_o_search' @click='onViewFile(file)'>
              <q-tooltip>Open File</q-tooltip>
            </q-icon>
          </q-item-section>
          <q-item-section v-show='!readonly' avatar>
            <q-icon class='cursor-pointer' color='primary' cy-label='file-delete-btn' name='sym_o_delete' @click='onDelete(file)'>
              <q-tooltip>Delete File</q-tooltip>
            </q-icon>
          </q-item-section>
        </q-item>
      </q-list>

      <my-delete-dialog ref='DeleteDialog' cy-label='delete-uploaded-file-modal' @delete-confirmed='onDeleteConfirmed' />

    </div>
  </div>
</template>

<script lang="ts">
import { format, openURL } from 'quasar'
import { defineComponent, PropType } from 'vue'
import { Action, IApiResponse } from '@konnec/vue-eloquent'
import { IFile } from 'modules/Application/models/FileInterface'
import date from 'src/app/helpers/Dates'

const { humanStorageSize } = format
export default defineComponent({
  props: {
    action: {
      type: String as PropType<Action>,
      required: false,
      default: Action.CREATE
    },
    label: {
      required: false,
      default: 'Attachments',
      type: String
    },
    hint: {
      required: false,
      default: 'Upload File (Max size: 24MB)'
    },
    readonly: {
      required: false,
      default: false
    },
    files: {
      required: true,
      default: Array as PropType<IFile[]>
    },
    tempFiles: {
      required: false,
      default: []
    },
    tag: {
      required: false,
      default: null
    },
    url: {
      required: false,
      default: null
    },
    singleFile: {
      required: false,
      default: false,
      type: Boolean
    },
    error: {
      type: Boolean,
      default: false,
      required: false
    },
    errorMessage: {
      default: 'Required',
      required: false,
      type: String
    },
    cypressLabel: {
      default: 'file-input',
      required: false,
      type: String
    }
  },
  data() {
    return {
      file: null,
      uploading: false,
      filesList: [] as IFile[],
      isDisabled: false
    }
  },
  computed: {
    date() {
      return date
    }
  },
  watch: {
    files(val) {
      if (!this.tag) {
        this.filesList = [...val]
      }
      else {
        this.filesList = val.filter((element: any) => element.model_tag === this.tag)
      }
    },
    filesList(val) {
      if (this.singleFile) {
        if (val.length) {
          this.isDisabled = true
        }
        else {
          this.isDisabled = false
        }
      }
    },
    uploading(val) {
      this.$emit('update:isUploading', val)
    }
  },
  methods: {
    onFileUploaded(args: any) {
      if (this.action === 'create') {
        this.uploadTempFile(args)
      }
      else {
        this.uploadFile(args)
      }
    },
    uploadFile(args: any) {
      this.uploading = true
      const formData = new FormData()
      formData.append('file', args)
      this.$http.post(this.url ?? '', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response: any) => {
          this.file = null
          this.filesList.push(response.data.data)
          this.$emit('update:files', this.filesList)
          this.uploading = false
        })
        .catch((err: any) => {
          console.error(err)
          this.uploading = false
          this.$q.notify({
            message: 'Error while uploading. Please try again.',
            color: 'warning'
          })
        })
    },
    uploadTempFile(args: any) {
      this.uploading = true
      const formData = new FormData()
      formData.append('file', args)
      if (this.tag) formData.append('model_tag', this.tag)
      this.$http.post('/api/v1/files/temp', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response: IApiResponse<any>) => {
          this.file = null
          this.filesList.push(response.data.data)
          const tFiles = [...this.tempFiles]
          tFiles.push(response.data.data)
          this.$emit('update:tempFiles', tFiles)
          this.uploading = false
        })
        .catch((err: any) => {
          console.error(err)
          this.uploading = false
          this.$q.notify({
            message: 'Error while uploading. Please try again.',
            color: 'warning'
          })
        })
    },
    iconName(val: string) {
      let icon = null
      switch (val) {
      case 'pdf':
        icon = 'fa-solid fa-file-pdf'
        break
      case 'doc':
      case 'docx':
        icon = 'fa-solid fa-file-word'
        break
      case 'xls':
      case 'xlsx':
        icon = 'fa-solid fa-file-excel'
        break
      case 'ppt':
      case 'pptx':
        icon = 'fa-solid fa-file-powerpoint'
        break
      case 'jpg':
      case 'png':
      case 'gif':
        icon = 'fa-solid fa-file-image'
        break
      default:
        icon = 'fa-solid fa-file'
        break
      }
      return icon
    },
    onViewFile(args: any) {
      openURL(args.url)
    },
    onDelete(args: any) {
      this.$refs.DeleteDialog.show(args)
    },
    onDeleteConfirmed(args: IFile) {
      let deleteUrl
      if (this.action === Action.CREATE) {
        deleteUrl = '/api/v1/files/temp/' + args.id
      } else {
        deleteUrl = this.url + '/' + args.id
      }

      this.$http.delete(deleteUrl)
        .then((response: { data: IApiResponse<IFile> }) => {
          this.filesList = this.filesList.filter(element => element.id !== response.data.data.id)
          this.$emit('update:files', this.filesList)
          this.$emit('update:temp-files', this.filesList)
        })
        .catch((err: any) => {
          console.error(err)
          this.$q.notify({
            message: 'Error deleting file. Please try again.',
            color: 'warning'
          })
        })
    },
    onRejected() {
      this.$q.notify({
        message: 'Max file size exceeded',
        color: 'warning'
      })
    },
    getFileSize(args: any) {
      return ` (${humanStorageSize(args)})`
    }
  }
})
</script>

<style scoped>
  .label {
    margin-left: 14px;
    margin-bottom: 2px;
    color: rgba(0, 0, 0, 0.7);
  }
  .outline-border {
    border-style: solid;
    border-width: 1px;
    border-color: #e0e0e0;
  }

  .file-list {
    max-height: 250px;
    overflow: hidden;
    overflow-y: scroll;
  }

  .file-name-container {
    inline-size: 280px;
    overflow-wrap: break-word;
  }
</style>
