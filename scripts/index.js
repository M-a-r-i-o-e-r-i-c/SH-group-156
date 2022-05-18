//Hamburger menu toggle

const hamburger=document.getElementById("hamburger");
const navLinks=document.getElementById("navLinks");
hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle('show');
});

//Eye icon toggle for password

let x=document.getElementById("cpassword");
let s=document.getElementById("show");
let h=document.getElementById("hide");
function myFunction(){
if (x.type==="password"){
    x.type="text";
    s.style.display='none';
    h.style.display='inline';
}   else{
    x.type="password";
    s.style.display='inline';
    h.style.display='none';
}
}

//Form Validation

function Validate() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("cpassword").value;
     if (password != confirmPassword) {
         alert("You first Passwords is not similar with 2nd password. Please enter same password in both");
         return false;
     }
     return true;
 }


