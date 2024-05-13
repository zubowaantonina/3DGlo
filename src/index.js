import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import scroll from "./modules/scroll.js";
import validateForm from "./modules/validateForm.js";
import calculator from "./modules/calculator.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import sendForm from "./modules/sendForm.js";

timer("15 may 2024");
menu();
modal();
scroll();
validateForm();
calculator(100);
tabs();
slider();
sendForm({formId: 'form1', someElem: [
    {
        type: 'block',
        id: 'total'
    }
]});
sendForm({formId: 'form2', someElem: [
    {
        type: 'block',
        id: 'total'
    }
]});
sendForm({formId: 'form3', someElem: [
    {
        type: 'block',
        id: 'total'
    }
]});
