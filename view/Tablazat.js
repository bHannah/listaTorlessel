import Sor from "./Sor.js";

export default class Tablazat{
    //adattagok
    #lista
    #szuloElem
    //konstruktor
    constructor(lista, szuloElem) {
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.tablazatMegjelenites()
    }
    //tagfüggvények
    tablazatMegjelenites(){
        this.#lista.forEach(element => {
            new Sor(element, this.#szuloElem)
        });
    }
}