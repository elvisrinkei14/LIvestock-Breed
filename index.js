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


