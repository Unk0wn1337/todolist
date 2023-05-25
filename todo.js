class Todo{
    #szuloELEM;
    constructor(adat, szuloELEM){
        this.szuloELEM = szuloELEM;
        szuloELEM.append(`<tr>
                                    <td>${adat}</td>
                                    <td>Y</td>
                                    <td>X</td>
                                <tr>`)
    }

}
export default Todo;