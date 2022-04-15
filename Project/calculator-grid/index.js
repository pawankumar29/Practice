var displayarea =document.getElementById('display');

function clickon(buttontext){
    if(displayarea.innertext==='0'){
        displayarea.innertext=buttontext;
    }
    else{
        displayarea.innertext=displayarea.innerText+buttontext;
    }
}