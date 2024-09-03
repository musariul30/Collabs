class CardVideoTop10 extends HTMLElement {
    constructor(){
        super();
    }

    set result(result) {
        this._result = result;
        this.render();
    }

    renderCollaborator(collaborators) {
        return collaborators.map(collaborator => `<span>${collaborator}</span>`).join('');
    }

    render() {
        this.innerHTML = `   
            <div id="image-number" class="col-6 row">
                <h1 class="${this._result.color} karla-font col-5">${this._result.rank}<strong>.</strong></h1>
                <div class="col-5 pop-up" id="thumbnail">
                    <a href="${this._result.link_video}" class="poppins-extrabold see-video" id="see-video">see video</a>
                    <img src="${this._result.link_gambar}" alt="">
                </div>
            </div>
            <div class="poppins-font col-5">
                <div id="title-video">
                    <h1 class="poppins-extrabold">${this._result.name}</h1>
                </div>
                <h3 id="owner">${this._result.owner}</h3>
                <div id="collaborator">
                    <h4>Collaborator: </h4>
                    <div>
                        ${this.renderCollaborator(this._result.collaborator)}
                    </div>
                </div>
            </div>`;
    }
}

customElements.define('card-video-top10', CardVideoTop10);
export default CardVideoTop10;
