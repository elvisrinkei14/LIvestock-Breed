const menu =document.querySelector('menu')
const menulinks = document.querySelector('.navbar__menu')

  
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});

const countapi = require('countapi-js');
countapi.visits().then((result) => {
    console.log(result.value);
  });

  countapi.visits('global').then((result) => {
    console.log(result.value);
  });
  import countapi from 'countapi-js';

  countapi.visits().then((result) => {
    console.log(result.value);
});

function login()
{
  var uname = document.getElementById("email").value;
  var pwd = document.getElementById("pwd1").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(uname =='')
  {
    alert("please enter user name.");
  }
  else if(pwd=='')
  {
        alert("enter the password");
  }
  else if(!filter.test(uname))
  {
    alert("Enter valid email id.");
  }
  else if(pwd.length < 6 || pwd.length > 6)
  {
    alert("Password min and max length is 6.");
  }
  else
  {
alert('Thank You for Login & You are Redirecting to Animal Arcade');
//Redirecting to other page or webste code or you can set your own html page.
     window.location = "https://www.campuslife.co.in";
    }
}
//Reset Inputfield code.
function clearFunc()
{
  document.getElementById("email").value="";
  document.getElementById("pwd1").value="";
}	