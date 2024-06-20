/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons/faMessage'

/* add icons to the library */
library.add(faMap)
library.add(faMessage)
library.add(faNoteSticky)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')