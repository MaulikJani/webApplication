
function init () {
    submit = document.getElementById("submit");
    name = document.getElementById("name");
    email = document.getElementById("email");
    subject = document.getElementById("subject");
    message = document.getElementById("message");
    
    

    submit.addEventListener("click", (event)=>{
        let confirmValue;
        if(name.value!="" && email.value!=""){
       confirmValue = window.confirm("Are you sure you want to submit");
        }
       if(confirmValue){
           
           name.value="";
           email.value="";
           subject.value="";
           message.value="";
           name.value="";
           event.preventDefault();
       }
        
       
    });
  
    
    
}

window.onload = init;