const changeTextButton = document.querySelector('#changeButton'); 
const h1Element = document.querySelector('h1'); 
let isChanged = false;

changeTextButton.addEventListener('click', function() {

  if (isChanged) {
    h1Element.textContent = 'Hello Kishore';
    isChanged = false;
  } else{
    h1Element.textContent = 'You clicked the button'
    isChanged = true;
  }

 
})