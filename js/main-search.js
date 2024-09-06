import CardVideoNew from "./custom-element/card-video-new.js";
import data_dummy from "./dummydata.js";
import data_dummy_new from "./dummydata-new.js";

document.addEventListener('DOMContentLoaded', () => {
    console.log("terhubung");
    const formsearch = document.getElementById("search")
    document.getElementById("search").addEventListener("submit", (event) => {
        event.preventDefault();
        document.getElementById('main-search-layout').innerHTML = ""
        const keyword = document.getElementById("searchText").value;      
        const datadummy1 = data_dummy.filter(item => item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
        const datadummy2 = data_dummy_new.filter(item => item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
        const dataall = datadummy1.concat(datadummy2);
        console.log(keyword)
        console.log(dataall)
        dataall.forEach(data => {
            const cardElement = document.createElement('card-video-new');
            cardElement.result = data;
            cardElement.classList.add('mb-5');
            document.getElementById('main-search-layout').appendChild(cardElement);
        });
    });
    
})