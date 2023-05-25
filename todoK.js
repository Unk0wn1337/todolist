import Todo from "./todo.js";
class TodoK{
    constructor(lista) {
        const szuloELEM = $("article table");
        for (let index = 0; index < lista.length; index++) {
            const Tudos = new Todo(lista[index], szuloELEM);
            
        }
    }
    kattintasTrigger(){
        const xElem = $("article table td:nth-child(3)");
        xElem.on("click",function(){
            $(this).parent().remove();

            let katt = new CustomEvent("katt", {detail: this});
            window.dispatchEvent(katt);
        });
    }
}
export default TodoK;