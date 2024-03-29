// dialog modal 
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".modal-btn-open");
const closeModal = document.querySelector(".close-btn");
const cancelSubmit = document.querySelector("#cancel-submit");
openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
cancelSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});

const form = document.querySelector("[data-form]"); // idk that I need the [] 
const infoRequest = [...form.querySelectorAll("[data-info-request]")] ; //needed [...]  to make this an array, using data attributes 
let currentRequest = infoRequest.findIndex(request => {
return request.classList.contains('active')
});

if(currentRequest < 0 ) { // first selection starts at 0 
   currentRequest = 0;
   infoRequest[currentRequest].classList.add('active');
   showCurrentRequest()
    // if (currentRequest === 'active'){  request.removeAttrubte ('hidden');
    //else request.setAttribute ('hidden', '');
}

form.addEventListener('click', e => { //allow for next button to work 
    let incrementor 
    if (e.target.matches('[data-next]')){
       incrementor = 1
     
    }
    else if (e.target.matches('[data-previous]')) {
        incrementor = -1//allows both previous/next to work 
    } 
    if(incrementor == null) return
    
    const inputs = [...infoRequest[currentRequest].querySelectorAll('input')]; //needs to be an array to work
const allValid = inputs.every(input => input.reportValidity());

if (allValid){ 
currentRequest += incrementor

   showCurrentRequest()
}
});


function showCurrentRequest(){
    infoRequest.forEach((request, index) => {
    request.classList.toggle('active', index === currentRequest)
    // if (currentRequest === 'active'){  request.removeAttrubte ('hidden');
    //else request.setAttribute ('hidden', '');
    
});
}


//removed required from email field, maybe able to remove pattern tag 

// need to remove display none and display block from .cards for fade feature to work 





form.addEventListener('submit', submit);

async function submit (e){
e.preventDefault();
const form = document.querySelector('form');
const formData = new FormData(form);

const submitInput = {};
formData.forEach((value, key) => {
  submitInput[key] = value;
});
//data-name to html name input then let value =basket name 
const inputs = JSON.stringify(submitInput);
  


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");



const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: inputs ,
  redirect: 'follow'
};
let basketName = document.getElementById('email').value;
try{
  const response = await fetch(`https://getpantry.cloud/apiv1/pantry/92475a56-66e0-43d9-8f3a-5d99e1da5112/basket/${basketName}`, requestOptions)
  
  await response.text();
  
   } catch(err) {
  console.log ('error', err);
} 
finally{
  modal.close();
}
 };
  
  

