import CardVideoNew from "./custom-element/card-video.js";
import data_dummy from "./dummydata.js";
import data_dummy_new from "./dummydata-new.js";

document.addEventListener("DOMContentLoaded", () => {
    const dataall = data_dummy.concat(data_dummy_new);
    dataall.forEach(data => {
        const cardElement = document.createElement('card-video');
        cardElement.result = data;
        cardElement.classList.add('mb-5');
        document.getElementsByTagName('main')[0].appendChild(cardElement);
    })
})