
 const form=document.getElementById("userForm");
 form.onsubmit= function(event){
  event.preventDefault();

  const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;

   document.getElementById('nameDisplay').innerText = nameValue;
  document.getElementById('emailDisplay').innerText = emailValue;
 };
  