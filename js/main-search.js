import CardVideoNew from "./custom-element/card-video.js";
import data_dummy from "./dummydata.js";
import data_dummy_new from "./dummydata-new.js";

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const keyword = params.get('keyword');
    if(keyword){
        document.getElementsByTagName('header')[0].innerHTML = "" ;
        document.getElementsByTagName('header')[0].style.height = '20px !important';
        document.getElementsByTagName('main')[0].innerHTML = "" ;   
        const datadummy1 = data_dummy.filter(item => item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
        const datadummy2 = data_dummy_new.filter(item => item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
        const dataall = datadummy1.concat(datadummy2);
        dataall.forEach(data => {
            const cardElement = document.createElement('card-video');
            cardElement.result = data;
            cardElement.classList.add('mb-5');
            document.getElementsByTagName('main')[0].appendChild(cardElement);
        });
        document.getElementById("searchText").value = keyword;
    }
    else {
        console.log("There are no keyword");
    }
})