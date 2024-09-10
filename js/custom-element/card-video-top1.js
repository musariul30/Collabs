class CardVideoTop1 extends HTMLElement {
    constructor(){
        super();
    }

    set result(result) {
        this._result = result;
        this.render();
    }

    renderCollaborator(collaborators) {
        return collaborators.map(collaborator => `<h3 class="collab">${collaborator}</h3>`).join('');
    }

    render() {
        this.innerHTML = `   
                <a href="${this._result.link_video}" id="thumbnail" target="_blank"><img src="${this._result.link_gambar_top1}" alt="" id="top1-image"></a>
                <div>
                    <h1>${this._result.name}</h1>
                    <div id="owner-collab">
                        <h3>${this._result.owner}</h3>
                        <h3 class="strip">-</h3>
                        ${this.renderCollaborator(this._result.collaborator)}
                    </div>
                    <p>${this._result.description}</p>
                </div>`;
    }
}

customElements.define('card-video-top1', CardVideoTop1);
export default CardVideoTop1;
