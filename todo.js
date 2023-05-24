
class Todo{
    #szuloELEM;
    constructor(adat, szuloELEM){
        this.#szuloELEM = szuloELEM;
        this.#szuloELEM.append(`
        <tr> 
            <td> ${adat} </td>
            <td>   X    </td>
            <td>   V    </td>
        </tr>`)
    
    }
   
}
export default Todo;