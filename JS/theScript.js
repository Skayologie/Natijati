

var theanswer = document.getElementById("theanswer")
var button = document.getElementById("theBUtton") 
var buttonCustom = document.getElementById("theBUttonCustom") 
var buttonNoChoose = document.getElementById("theBUttonNoChoose")  
var CUSTOM = document.getElementById("CUSTOM") 
var theQuestion = document.querySelector(".TheForm .theQuestion")
var TheForm = document.querySelectorAll(".TheForm")
const theMEssage = ("شي حاجة غالطة فالنقاط ديالك , دخلتي شي نقطة فوق 20\n عاود راجع النقاط لي دخلتي")

button.onclick = ()=>{
    if (theanswer.value==="four") {
        window.open("QuatRe/index.html")
    }else if(theanswer.value==="five"){
        window.open("CinQue/index.html")
    }else if(theanswer.value==="six"){
        window.open("Siz/index.html")
    }else if(theanswer.value==="seven"){
        window.open("Bac/index.html")

    }
}
buttonCustom.onclick = () =>{
    window.open("custom/index.html")
}
buttonNoChoose.onclick = () =>{
    CUSTOM.style.visibility ="visible";
}
window.onbeforeunload = () =>{
    return "Dude, are you sure you want to leave? Think of the kittens!";
   
}