import {scroll} from './modules/scroll'
import { tabs } from './modules/tabs'
import { accorodion } from './modules/accordion';
import { getData } from './modules/getData';

const pageOverlayModal=document.querySelector('.page__overlay_modal');
const modalClose=document.querySelector('.modal__close');
const presentOrderBtn=document.querySelector('.header__burger')


scroll()
tabs()
accorodion();
getData();
//popup()


//# sourceMappingURL=main.js.map
