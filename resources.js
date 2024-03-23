const selectionList = document.querySelector(".selection");
const selectionButtons = selectionList.querySelectorAll(".selection-btn");
const resource = document.querySelectorAll(".resource");
   //need buttons to work when clicked 
let resourceIndex = 0;

resource.forEach((resource) => {
    resource.style.viewTransitionName = `opt-${++resourceIndex}`;
});

selectionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const selection = e.target.getAttribute('data-selection');
        if (!document.startViewTransition){
            updateActiveButton( e.target);
            selectionOpt(selection);
        }
        
        document.startViewTransition(() => {
            updateActiveButton( e.target);
            selectionOpt(selection);
});
       
        //needs to sort options
        //need a sort event 
      
    })

})
// need an actual function for updateActiveButton to work
function updateActiveButton(newButton) {
//find last button used
selectionList.querySelector('.active').classList.remove('active')  //use of(.) in first active is finding the class selector, second active is after stating its a .classList so it does not need the (.)
//selectionList = all button options
//remove it as active
//make new selection = active 
newButton.classList.add('active');
}

function selectionOpt(optSelection){
    resource.forEach((opt) => {
        const sourceType = opt.getAttribute('data-type');
        if(optSelection === 'all' || optSelection === sourceType) {
            opt.removeAttribute('hidden');

        } else{
            opt.setAttribute('hidden', '' );
        }
    });
  
    // reference .resource-list query select
    //selectionoptions.getattribute(data-format)
    //get each resource category 
    //figure out which resource goes with which selectionbutton
    //show results
    //hide additional results 
    //rinse and repeat 
}