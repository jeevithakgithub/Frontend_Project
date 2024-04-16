let mail = document.getElementById("umail");
let nog = document.getElementById("nog");
let timee = document.getElementById("utime");
let datee = document.getElementById("udate")
mail.addEventListener("focusout",()=>{
    if(mail.value==false){
        mail.style.borderColor="red";
        err.style.display="inline";
        err.style.color="red"
    }
    else{
        mail.style.borderColor="white";
        err.style.display="none";
    }
})
nog.addEventListener("focusout",()=>{
    if(nog.value==false){
        nog.style.borderColor="red";
        err.style.display="inline";
        err.style.color="red"
    }
    else{
        nog.style.borderColor="white";
        err.style.display="none";
    }
})
timee.addEventListener("focusout",()=>{
    if(timee.value==false){
        timee.style.borderColor="red";
        err.style.display="inline";
        err.style.color="red"
    }
    else{
        timee.style.borderColor="white";
        err.style.display="none";
    }
})
datee.addEventListener("focusout",()=>{
    if(datee.value==false){
        datee.style.borderColor="red";
        err.style.display="inline";
        err.style.color="red"
    }
    else{
        datee.style.borderColor="white";
        err.style.display="none";
    }
})
btn.addEventListener("click",()=>{
    if((mail.value==false) || (nog.value==false) || (timee.value==false) || (datee.value==false)){
        alert('Please Enter the details')
    }
    else{
        resultContainer.style.display = 'flex';
        if (window.innerWidth > 960) {
            resultContainer.style.marginTop='250px';
            resultContainer.style.marginLeft='480px';
        }
        else{
            resultContainer.style.marginTop='350px';
            resultContainer.style.marginLeft='250px';

        }
        document.getElementById('result').innerHTML = `Table Booked!
        Number of Tables booked:${nog.value}
        Date:${datee.value}
        Time:${timee.value}`;
    }
})
function resetForm() {
    document.getElementById('umail').value = '';
    document.getElementById('nog').value = '';
    document.getElementById('utime').value = '';
    document.getElementById('udate').value = '';
    document.getElementById('resultContainer').style.display = 'none';
}
  var today = new Date();
  var formattedDate = today.toISOString().substr(0, 10);
  document.getElementById("udate").setAttribute("min", formattedDate);
