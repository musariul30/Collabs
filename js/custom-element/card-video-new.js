class CardVideoNew extends HTMLElement {
    constructor(){
        super();
    }

    set result(result) {
        this._result = result;
        this._result.id_accordian = this.getRandomNameWithNumbers(this._result.name, 4);
        this.render();
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
      
    getRandomNameWithNumbers(name, numLength) {
        let randomNumber = this.getRandomNumber(10 ** (numLength - 1), (10 ** numLength) - 1);
        return this.sanitizeName(name) + randomNumber;
    }

    renderCollaborator(collaborators) {
        return collaborators.map(collaborator => `<span class="bg-b rounded-3">${collaborator}</span>`).join('');
    }

    sanitizeName(name) {
        return name.replace(/\s+/g, '-'); 
    }

    render() {
        this.innerHTML = `   
        <a href="${this._result.link_video}" target="_blank" id="thumbnail">
          <img src="${this._result.link_gambar}" alt="" class="new-image">
        </a>
        <section class="data-video-new">
          <h1>${this._result.name}</h1>
          <h3 class="owner bg-p rounded-3 mb-4">${this._result.owner}</h3>
          <h4 class="collaborator mb-4">Collaborator: ${this.renderCollaborator(this._result.collaborator)}</h4>
          <div class="accordion" id="${this._result.name}">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${this._result.id_accordian}" aria-expanded="false" aria-controls="${this._result.name}">
                  Description
                </button>
              </h2>
              <div id="${this._result.id_accordian}" class="accordion-collapse collapse" data-bs-parent="#${this._result.name}">
                <div class="accordion-body">
                    ${this._result.description}
                </div>
              </div>
            </div>
          </div>
        </section>`;
    }
}

customElements.define('card-video-new', CardVideoNew);
export default CardVideoNew;
