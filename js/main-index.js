import data_dummy from "./dummydata.js";
import data_dummy_new from "./dummydata-new.js";

const renderCollaborator = (collaborators) => {
    return collaborators.map(collaborator => `<h3>${collaborator}</h3>`).join('');
}

const renderLinkAsset = (assets) => {
    return assets.map(asset => `<h3>${collaborator}</h3>`).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    const articleHighlight = document.getElementsByTagName("article")[0]
    const articleOtherVideos = document.getElementsByTagName("article")[1]
    const containerHighlight = articleHighlight.getElementsByClassName("isi")[0]
    const containerOtherVideos = articleOtherVideos.getElementsByClassName("isi")[0]
    const seelAllButton = document.getElementById('see-all-button')
    for(let i = 0; i <3 ; i++){
        const data = data_dummy_new[i];
        const newElement = document.createElement("div")
        newElement.classList.add("card-highlight")
        newElement.innerHTML =
        `<a href="${data.link_video}" target="_blank" rel="noopener noreferrer"><img src="${data.link_gambar}" alt=""></a>
        <h1>${data.name}</h1>
        <h3>${data.owner}</h3>
        <h4>Collaborator:</h4>
        <div class="collab">
            ${renderCollaborator(data.collaborator)}
        </div>`
        containerHighlight.appendChild(newElement);
    }
    for(let i = 0; i < 7 ; i++){
        const data = data_dummy[i]
        const newElement = document.createElement("a")
        newElement.href = data.link_video
        newElement.target = "_blank"
        newElement.innerHTML = `<img src="${data.link_gambar}" alt="">`
        containerOtherVideos.insertBefore(newElement, seelAllButton)
    }
})