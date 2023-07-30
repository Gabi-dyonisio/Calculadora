function soma(){
    let val1= document.getElementById(`val1`).value
    let val2=document.getElementById(`val2`).value
    let res= document.getElementById(`res`)
    val1=Number(val1)
    val2=Number(val2)
    res.innerHTML= val1+val2
}

function subtracao(){
    let val1=document.getElementById(`val1`).value
    let val2=document.getElementById(`val2`).value
    let res=document.getElementById(`res`);
    val1=Number(val1);
    val2=Number(val2)
    res.innerHTML=val1-val2;
}

function divisao(){
    let val1=document.getElementById(`val1`).value
    let val2=document.getElementById(`val2`).value
    let res=document.getElementById(`res`);
    val1=Number(val1);
    val2=Number(val2);
    res.innerHTML= val1/val2;;
}


function multiplicacao(){
    let val1=document.getElementById(`val1`).value
    let val2=document.getElementById(`val2`).value
    let res=document.getElementById(`res`);
    val1=Number(val1);
    val2=Number(val2);
    res.innerHTML= val1*val2
}

function elevado(){
    let val1=document.getElementById(`val1`).value
    let val2=document.getElementById(`val2`).value
    let res=document.getElementById(`res`);
    val1=Number(val1);
    val2=Number(val2);
    res.innerHTML= val1**val2
}