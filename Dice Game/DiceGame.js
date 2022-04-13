



var imageEl1=document.querySelector(".image-1");
var imageEl2=document.querySelector(".image-2");
var headerEl=document.querySelector(".header-text");
var buttonEl=document.querySelector(".btn");

buttonEl.addEventListener("click",function(){

    var n=Math.random();
    var randomNumber=Math.floor((n*6)+1);

    switch(randomNumber){
        case 1:
            imageEl1.setAttribute("src","dice3.png");
            imageEl2.setAttribute("src","dice2.png");
            headerEl.innerHTML=`Player 1 Wins <i class="fa-solid fa-flag-checkered"></i>`;
            break;
        case 2:
            imageEl1.setAttribute("src","dice5.png");
            imageEl2.setAttribute("src","dice3.png");
            headerEl.innerHTML=`Player 2 Wins <i class="fa-solid fa-flag-checkered"></i>`;
            break;
        case 3:
            imageEl1.setAttribute("src","dice2.png");
            imageEl2.setAttribute("src","dice2.png");
            headerEl.innerHTML=`Draw <i class="fa-solid fa-hand-holding-magic"></i>`;
            break;
        case 4:
            imageEl1.setAttribute("src","dice4.png");
            imageEl2.setAttribute("src","dice6.png");
            headerEl.innerHTML=`Player 2 Wins <i class="fa-solid fa-flag-checkered"></i>`;
            break;
        case 5:
            imageEl1.setAttribute("src","dice6.png");
            imageEl2.setAttribute("src","dice1.png");
            headerEl.innerHTML=`Player 1 Wins <i class="fa-solid fa-flag-checkered"></i>`;
            break;
        case 6:
            imageEl1.setAttribute("src","dice5.png");
            imageEl2.setAttribute("src","dice5.png");
            headerEl.innerHTML=`Draw <i class="fa-solid fa-hand-holding-magic"></i>`;
            break;
        default:
            headerEl.innerText="GOT NOTHING";
    }
})