let button = document.querySelector("button"); 
let modalParent = document.querySelector(".modal-parent"); 
let X =document.querySelector(".X");
let section =document.querySelector("section");
console.log(section);

button.addEventListener("click",clickHandler)
X.addEventListener("click",closeHandler)

function clickHandler () {
modalParent.style.display= "block"
section.style.filter= "blur(6px)"
button.blur()


}
function closeHandler (){
    modalParent.style.display= "none"
    section.style.filter= "blur(0px)"
}
document.body.addEventListener("keyup",function (event){
if(event.keyCode == 27 ){
    modalParent.style.display= "none"
    section.style.filter= "blur(0px)"
}
})