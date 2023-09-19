//code for timer from 1 to 18 
let x=61;
 function stop(){  
clearInterval(interval);  //function for stoping timer

}
let interval= setInterval(timcount, 1000);
function tim(){
    setInterval(interval);  
}
function timcount (){
                          //function for decreasing time
        if(x>0){
        x=x-1;
        document.getElementById('tim').innerText= x;
        } 
     } 
    // document.getElementById('tim').innerText= 67;
function corect(){
    document.getElementById('corect').style.backgroundColor="green";
    
    let s =document.getElementById('scorea').innerText;
    alert(s);
    s++;
    document.getElementById('scorea').innerText=(s);
}
function val(ele){
    ele.style.backgroundColor="red";
    document.getElementById('corect').style.backgroundColor="green";
    // document.getElementById('btnglow').style.boxShadow=("0px 5px 0px 4px green");
}


//function for 50-50 liffe line
function fifty(){
    clearInterval(interval); 
    document.getElementById('hide').innerText="";
    document.getElementById('incorect').innerText=""; 
}
function score(){
    document.getElementById('scorea').innerText=5;
}
