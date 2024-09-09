import CardVideoNew from "./custom-element/card-video.js";
import data_dummy_new from "./dummydata-new.js";

document.addEventListener('DOMContentLoaded', () => {
    data_dummy_new.forEach(data => {
        const cardElement = document.createElement('card-video');
        cardElement.result = data;
        cardElement.classList.add('mb-5');
        document.getElementById('main-new').appendChild(cardElement);
    });
})

const searchFunc = () => {
    console.log("coba")
}