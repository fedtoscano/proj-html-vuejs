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
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"


/* add icons to the library */
library.add(faArrowRight, faCaretLeft, faCaretRight, faFacebookF, faInstagram, faTwitter, faMap, faMessage, faNoteSticky, faCalendar,faLocationDot, faChevronUp)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

