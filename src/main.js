import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowRightLong, faBuildingColumns, faEnvelope, faGraduationCap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faArrowRightLong, faGraduationCap, faBuildingColumns, faPhone, faEnvelope, faFacebookF, faLinkedinIn, faInstagram)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')