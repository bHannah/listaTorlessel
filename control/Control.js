import Tablazat from "../view/Tablazat.js";
import Model from "../model/Model.js";
import { LISTA } from "../model/adat.js";

export default class Control{
    constructor(){
        let szuloElem = $('.termekekTablazat')
        this.model = new Model();
        this.tablazat = new Tablazat(this.model.getLista(), szuloElem)
        this.esemenykezelo()
    }

    esemenykezelo(){
        $(window).on("torles", (event)=>{
            let szuloElem = $('.termekekTablazat')
            LISTA.splice(event.detail, 1);
            new Tablazat(LISTA, szuloElem)
        });
    }
}