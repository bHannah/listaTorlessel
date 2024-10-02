import { LISTA } from "./adat.js";

export default class Model{
    //adattagok
    #lista
    //konstruktor
    constructor(){
        this.#lista = LISTA
    }
    //tagfüggvények
    getLista(){
        return this.#lista
    }
}