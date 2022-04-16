



const numOfElements=document.querySelectorAll(".btn").length;
for(let i=0;i<numOfElements;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        
        const buttonValue=this.innerHTML;
        playMusic(buttonValue);
    })
}


document.addEventListener("keypress",function(event){
        playMusic(event.key);
})

const playMusic=(keyValue)=>{
    switch(keyValue){
        case "s":
            var aud1=new Audio("crash.mp3");
            aud1.play();
            break;
        case "t":
            var aud2=new Audio("kick-bass.mp3");
            aud2.play();
            break;
        case "u":
            var aud3=new Audio("snare.mp3");
            aud3.play();
            break;
        case "v":
            var aud4=new Audio("tom-1.mp3");
            aud4.play();
            break;
        case "w":
            var aud5=new Audio("tom-2.mp3");
            aud5.play();
            break;
        case "x":
            var aud6=new Audio("tom-3.mp3");
            aud6.play();
            break;
        case "z":
            var aud7=new Audio("tom-4.mp3");
            aud7.play();
            break;
        default:
            var aud4=new Audio("tom-1.mp3");
            aud4.play();
            
    }
}