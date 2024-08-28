<template>
  <my-toolbar-button-dropdown
    icon='fa-solid fa-calendar-days'
    label='Timeline'
    tooltip="Change Gantt's timeline"
  >
    <q-list bordered padding>
      <q-item>
        <q-item-section>
          <q-item-label>
            <q-input v-model='timeline.start_date' clearable cy-label='start-date-input' hint='Start Date' type='date' />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label>
            <q-input v-model='timeline.finish_date' clearable cy-label='finish-date-input' hint='Finish Date' type='date' />
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-close-popup v-ripple clickable @click='onSetTimeline'>
        <q-item-section>
          <q-item-label data-cy='MenuAddBatch'>Update</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </my-toolbar-button-dropdown>
</template>

<script lang="ts">
import { date } from 'quasar'
import { mapActions } from 'pinia'
import { useScheduleStore } from 'modules/Tsp/stores/Schedule'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    gridId: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      timeline: {
        start_date: null,
        finish_date: null
      },
      projectStartDate: new Date(),
      projectEndDate: new Date(2023, 11, 31),
    }
  },
  created() {
    this.timeline.start_date = date.formatDate(new Date(), 'YYYY-MM-DD')
    this.timeline.finish_date = date.formatDate(date.addToDate(this.projectStartDate, { days: 60 }), 'YYYY-MM-DD')
  },
  methods: {
    ...mapActions(useScheduleStore, ['setSummaryTimeline']),
    onSetTimeline: function () {
      const ganttObj = document.getElementById(this.gridId).ej2_instances[ 0 ]
      let start = this.projectStartDate
      let finish = this.projectEndDate
      if (this.timeline.start_date) {
        start = new Date(this.timeline.start_date)
      }
      if (this.timeline.finish_date) {
        finish = new Date(this.timeline.finish_date)
      }
      if (this.gridId === 'TspSummaryGrid') {
        const params = {
          start,
          finish
        }
        this.setSummaryTimeline(params)
      }
      else {
        ganttObj.updateProjectDates(start, finish, false)
      }
    }
  },
})
</script>
