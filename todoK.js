import Todo from "./todo.js";
class todoK{
   constructor(lista){
        const szuloELEM = $("article table");
        for (let index = 0; index < lista.length; index++) {
            const todo = new Todo(lista[index],szuloELEM);

            
            
        }

   }
   #kattintasTrigger(){
    const kattintas = new CustomEvent("katt", {detail: this});
    window.dispatchEvent(kattintas)

    }

   } 
   



export default todoK;