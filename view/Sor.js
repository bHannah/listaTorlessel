export default class Sor{
    //adattagok
    #obj
    #szuloElem
    //konstruktor
    constructor(objektum, szuloElem) {
        this.#obj = objektum
        this.#szuloElem = szuloElem
        this.sorMegejelnit()
        this.torolElem = $(".torles:last")
        this.esemenykezelo()
    }
    //tagfüggvények
    sorMegejelnit(){
        this.#szuloElem.append(`
            <tr class="${this.id}">
            <td><button class="torles">🗑️</button></td>
            <td>${this.#obj.nev}</td>
            <td>${this.#obj.ar}</td>
            <td>${this.#obj.kategoria}</td>
            <td>${this.#obj.db}</td>
            </tr> 
        `)
    }

    esemenykezelo(){
        this.torolElem.on("click", ()=>{
            const e = new CustomEvent("torles", {detail:this.#obj});
            window.dispatchEvent(e);
        })
    }
}