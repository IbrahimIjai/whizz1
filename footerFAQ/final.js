let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('fa fa-arrow-right icon');
let icons2 = document.getElementsByClassName('fa fa-arrow-down icon');
window.onload = function () {
    for(let k=0; k<icons2.length; k++){
        icons2[k].style.display = "none";
    }
}
console.log(icons, icons2);


for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0084e9";
            icons2[i].style.display = "initial";
            icons[i].style.display = "none";   
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons2[i].style.display = "none";
            icons[i].style.display = "initial";
               
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons2[i].style.display = "initial";
                icons[i].style.display = "none";   

            }
        }
    });
}
    
        