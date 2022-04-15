

/*function select( x){
    let panel1=document.getElementsByClassName("panel");
    panel1.classList.remove("active");

    switch(x){
        
        case 1:
            let y=document.getElementsByClassName("panel-1")
            y.classList.add("active");
            break;
         case 2:
            let y=document.getElementsByClassName("panel-2")
        y.classList.add("active");
         break;

         case 3:
            let y=document.getElementsByClassName("panel-3")
            y.classList.add("active");
            break;

            case 4:
                let y=document.getElementsByClassName("panel-4")
                y.classList.add("active");
            break;

            case 5:
                let y=document.getElementsByClassName("panel-5")
                y.classList.add("active");
            break;

            default:
             console.log("nothing is there");

    }
}*/


let panel1=document.getElementsByClassName("panel-1")
let panel2=document.getElementsByClassName("panel-2")
let panel3=document.getElementsByClassName("panel-3")
let panel4=document.getElementsByClassName("panel-4")
let panel5=document.getElementsByClassName("panel-5")

function resetActivePanel(){
    panel1.classList.remove('active');
    panel2.classList.remove('active');
    panel3.classList.remove('active');
    panel4.classList.remove('active');
    panel5.classList.remove('active');
}
function select(panelId){
   resetActivePanel()
   document.getElementsByClassName(panelId).classList.add('active')

   
}