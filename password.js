let userInput = document.getElementById("noOfCh") ;
let submit = document.getElementById("btn") ;
let result = document.getElementById("Result") ;
let reset = document.querySelector(".reset") ;
reset.hidden = true ;
function generate(){
    userInput.disabled = true;
    submit.disabled = true ;
    reset.hidden = false ;
    let value = Number(userInput.value) ;
    let password = "" ;
    for(let i = 1 ; i <= Number(value) ; i++){
        let temp = Math.floor(Math.random()*94+33) ;
        password = `${password}${String.fromCharCode(temp)}` ;
    }
    result.textContent = `Password is ${password}` ;
}
function ReInput(){
    userInput.disabled = false ;
    userInput.value = "" ;
    submit.disabled = false ;
    result.textContent = `Click Submit To Generate` ;
    reset.hidden = true ;
}
submit.addEventListener("click", generate) ;
reset.addEventListener("click" , ReInput) ;