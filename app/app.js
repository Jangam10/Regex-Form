console.log("We are making Form Validator");

let user = document.getElementById("user");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

userVal= false;
emailVal= false;
phoneVal= false;

user.addEventListener("blur", ()=>{
    let regex=/^[a-zA-Z\_]([a-zA-z0-9]){1,14}$/;

    let str = user.value;
    let instructText = document.getElementById("namevalid");
    console.log(instructText);
    if(regex.test(str))
    {
        console.log(`The username ${str} matches the given regex value ${regex.source}`);
        user.classList.add("is-valid");
        user.classList.remove("is-invalid");
        instructText.style.display = "none";
        userVal = true;
        
    }
    else{
        console.log(`The username ${str} doesnot matches the given regex value ${regex.source}`);
        user.classList.add("is-invalid");
        user.classList.remove("is-valid");
        instructText.style.display = "none";
        userVal= false;
    }
});


email.addEventListener("blur", ()=>{
    let regex=/^[a-zA-Z]([a-zA-z0-9\_]){4,14}\@([a-z]){3,9}\.com$/;

    let str = email.value;
    let instructText = document.getElementById("emailvalid");
    
    if(regex.test(str))
    {
        console.log(`The email ${str} matches the given regex value ${regex.source}`);
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        instructText.style.display = "none";
        emailVal= true;
    }
    else{
        console.log(`The email ${str} doesnot matches the given regex value ${regex.source}`);
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        instructText.style.display = "none";
        emailVal=false;
    }
});


phone.addEventListener("blur", ()=>{
    let regex=/^98([0-9]){8}$/;

    let str = phone.value;
    let instructText = document.getElementById("phonevalid");
    
    if(regex.test(str))
    {
        console.log(`The phone number ${str} matches the given regex value ${regex.source}`);
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
        instructText.style.display = "none";
        phoneVal=true;
    }
    else{
        console.log(`The phone number ${str} doesnot matches the given regex value ${regex.source}`);
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
        instructText.style.display = "none";
        phoneVal=false;
    }
});


let submit=document.getElementById("submit");

let alerts = document.getElementById("alertbox");
console.log(alerts);



submit.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log(userVal,emailVal,phoneVal);
    let html="";
    if(userVal&&emailVal&&phoneVal)
    {
    console.log("the form has been submitted");
    html += `<div class="alert alert-success alert-dismissible fade show" role="alert" id="pageAlert">
               <strong>Success!</strong> Your form has been submitted sucessfully.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                </button>`;
                alerts.innerHTML= html;

    }
    else{
    console.log("The form hasnot been submitted");
    html += `<div class="alert alert-danger alert-dismissible fade show" role="alert" id="pageAlert">
    <strong>Error!</strong> Your form has not been submitted. Please fill the form correctly.
     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
     </button>`;
     alerts.innerHTML= html;
    }
})


