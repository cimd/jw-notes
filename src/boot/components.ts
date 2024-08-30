import { boot } from 'quasar/wrappers'
import { defineAsyncComponent } from 'vue'

import MyClearFiltersButton from 'components/Buttons/ClearFiltersButton.vue'
import MyExportButton from 'components/Buttons/ExportButton.vue'
import MyToolbarButton from 'components/Buttons/ToolbarButton.vue'
import MyToolbarButtonDropdown from 'components/Buttons/ToolbarButtonDropdown.vue'
import MyFileUploader from 'components/Form/FileUploader.vue'
// Toolbar
import MyToolbar from 'components/Toolbar/TheToolbar.vue'
import MyActionFooter from 'components/Toolbar/MyActionFooter.vue'
import MyFormSection from 'components/Form/FormSection.vue'

const MyGridColumnChooser = defineAsyncComponent(() =>
  import('components/Buttons/ColumnChooserButtonGrid.vue')
)
const MyCreateButton = defineAsyncComponent(() =>
  import('components/Buttons/CreateButton.vue')
)
const MyGridSearch = defineAsyncComponent(() =>
  import('components/Buttons/GridSearchField.vue')
)

// New Fields
const MyInput = defineAsyncComponent(() =>
  import('components/Form/InputField.vue')
)
const MyEditor = defineAsyncComponent(() =>
  import('components/Form/EditorField.vue')
)
const MyMultiInput = defineAsyncComponent(() =>
  import('components/Form/MultiInputField.vue')
)
const MyDate = defineAsyncComponent(() =>
  import('components/Form/DateField.vue')
)
const MyDateTime = defineAsyncComponent(() =>
  import('components/Form/DateTimeField.vue')
)
const MyTime = defineAsyncComponent(() =>
  import('components/Form/TimeField.vue')
)
const MyToggle = defineAsyncComponent(() =>
  import('components/Form/ToggleField.vue')
)
const MyTextArea = defineAsyncComponent(() =>
  import('components/Form/TextAreaField.vue')
)
const MySelect = defineAsyncComponent(() =>
  import('components/Form/SelectField.vue')
)

// Buttons
const MySaveButton = defineAsyncComponent(() =>
  import('components/Buttons/SaveButton.vue')
)
const MyEditButton = defineAsyncComponent(() =>
  import('components/Buttons/EditButton.vue')
)
const MyCancelButton = defineAsyncComponent(() =>
  import('components/Buttons/CancelButton.vue')
)


// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.component('MyToolbar', MyToolbar)
  app.component('MyActionFooter', MyActionFooter)
  app.component('MyGridColumnChooser', MyGridColumnChooser)
  app.component('MyCreateButton', MyCreateButton)
  app.component('MyClearFiltersButton', MyClearFiltersButton)
  app.component('MyExportButton', MyExportButton)
  app.component('MyGridSearch', MyGridSearch)
  app.component('MyToolbarButton', MyToolbarButton)
  app.component('MyToolbarButtonDropdown', MyToolbarButtonDropdown)
  app.component('MyFormSection', MyFormSection)

  // New Fields
  app.component('MyInput', MyInput)
  app.component('MyEditor', MyEditor)
  app.component('MyFileUploader', MyFileUploader)
  app.component('MyMultiInput', MyMultiInput)
  app.component('MyDate', MyDate)
  app.component('MyDateTime', MyDateTime)
  app.component('MyTime', MyTime)
  app.component('MyToggle', MyToggle)
  app.component('MyTextArea', MyTextArea)
  app.component('MySelect', MySelect)

  // Buttons
  app.component('MySaveButton', MySaveButton)
  app.component('MyEditButton', MyEditButton)
  app.component('MyCancelButton', MyCancelButton)
})
