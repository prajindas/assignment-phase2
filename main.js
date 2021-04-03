const in_name=document.querySelector('#name');
const in_email=document.querySelector('#email');
const in_phone=document.querySelector('#phone');
const valid_rage=document.querySelector(".valid-rage");
const pwd =document.querySelector("#password");
const pwd_2 =document.querySelector("#password-2");

const s_up=document.querySelector('.s-up');
var names = document.getElementById("name").value;


in_name.addEventListener('input' ,function(){
    var name = document.getElementById("name").value;

    if(name == ""){
    in_name.classList.add('is-invalid');
 
    }else{
        in_name.classList.add('is-valid');
    }
    
})


// in_email.addEventListener('input' ,function(){
  
//     const in_email_value=document.querySelector('#email').value.indexOf("@gmail.com");
//     submitOK = "true";
//     if(in_email_value < 1){
//     in_email.classList.add('is-invalid');
 
//     }else{
//         in_email.classList.add('is-valid');
//     }
    
// })

// When the user clicks on the password field, show the message box
pwd.onfocus = function() {
    document.getElementById("progress").style.display = "block";
    document.getElementById("msg-2").style.display = "block";
  
  }
  
  // When the user clicks outside of the password field, hide the message box
  pwd.onblur = function() {
    document.getElementById("progress").style.display = "none";
    document.getElementById("msg-2").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  pwd.onkeyup = function() {

    const pro=document.querySelector(".progress-bar");
    const msg=document.querySelector(".msg");
    if(pwd.value.length > 8){
        msg.innerHTML="Minimum 8 characters";
        pro.style.display="none";
    }else{
        pro.style.display="block";
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(pwd.value.match(lowerCaseLetters) && pwd.value.length >= 3) {  
      pro.classList.add("bg-warning");

      pro.style.width = "10%";
      msg.innerHTML="poor";
    } else {
      pro.classList.remove("bg-warning");
      pro.style.width = "5%";
      msg.innerHTML="";
    }
    
    // Validate capital letters
    
    var upperCaseLetters = /[A-Z]/g;
    if(pwd.value.match(upperCaseLetters)) {  
        pro.classList.remove("bg-warning");
        pro.classList.add("bg-success");
        pro.style.width = "50%";
        msg.innerHTML="medium";
    } else {
        pro.classList.remove("bg-success");
        pro.classList.add("bg-warning");
        pro.style.width = "20%";
    }
  
    // Validate numbers
    
    var numbers = /[0-9]/g;
    if(pwd.value.match(numbers) && pwd.value.length == 8) {  
        pro.classList.remove("bg-warning");
        pro.classList.add("bg-danger");
        pro.style.width = "100%";
        msg.innerHTML="strong";
    }
     else {
        pro.classList.add("bg-warning");
        pro.classList.remove("bg-danger");
        if(pwd.value.match(upperCaseLetters)) {  
            pro.classList.remove("bg-warning");
            pro.classList.add("bg-success");
            pro.style.width = "50%";
            msg.innerHTML="medium";
        }else{
            pro.classList.remove("bg-success");
            pro.classList.add("bg-warning");
            pro.style.width = "10%";
        }
    }
   
}

  }


function validate(){
      //name validation
      var name = document.getElementById("name").value;
      const in_name=document.querySelector('#name');
      if(name== ""){
          in_name.classList.add('is-invalid');
          document.getElementById("alert-name").style.display="block";
          return false;
      
      }else{
        in_name.classList.remove('is-invalid');
        in_name.classList.add('is-valid');
          document.getElementById("alert-name").style.display="none";
         
      }
  

      //email validation
      let regexp= /^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+).([a-z]{2,3})(.[a-z])?$/
      if(regexp.test(in_email.value)){
        in_email.classList.add('is-valid');
        document.getElementById("alert-email").style.display="none";
        in_email.classList.add("is-valid")
        in_email.classList.remove("is-invalid")
     
      }else{
        document.getElementById("alert-email").style.display="block";
        in_email.classList.remove("is-valid")
        in_email.classList.add("is-invalid")
        return false;
      }


      //phone validation
    var in_phone_value=document.querySelector('#phone').value;
    

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(in_phone_value.match(phoneno)) {
        in_phone.classList.add("is-valid")
        in_phone.classList.remove("is-invalid")
        document.getElementById("alert-phone").style.display="none";
       
    }
    else {
        in_phone.classList.remove("is-valid")
        in_phone.classList.add("is-invalid")
        document.getElementById("alert-phone").style.display="block";
        return false;
      
    }


   //password validation
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
   if(pwd.value.match(lowerCaseLetters) && pwd.value.match(upperCaseLetters) && pwd.value.match(numbers) && pwd.value.length == 8){
        pwd.classList.add("is-valid");
   }
   if(pwd.value == pwd_2.value){
 
    pwd_2.classList.add("is-valid")
    pwd_2.classList.remove("is-invalid")
    document.getElementById("alert-password").style.display="none";
    return true;
   }else{
    pwd_2.classList.add("is-invalid")
    pwd_2.classList.remove("is-valid")
    pwd.classList.add("is-invalid")
    pwd.classList.remove("is-valid")
    document.getElementById("alert-password").style.display="block";
        return false;
   }

   
    
}


