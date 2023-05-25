import { lista } from "./lista.js";
import TodoK from "./todoK.js";
$(function () {
    const Elem = new TodoK(lista);
    Elem.kattintasTrigger();
})