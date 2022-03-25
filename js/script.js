const cardOne = document.querySelector(".card-container:nth-child(1)");
const cardTwo = document.querySelector(".card-container:nth-child(2)");
const buttons = document.querySelectorAll(".btn");
const selection = document.querySelector(".selection p");

let ratingLevel;
    
buttons.forEach(button => {
     button.addEventListener('click' , (e) => {
         e.preventDefault();
         ratingLevel = e.target.getAttribute('data-rate');
            console.log("You rated: ", ratingLevel)
     });
 });

cardOne.addEventListener('submit' , (e) => {
    e.preventDefault();
        if(!ratingLevel) return;  
       showThankYouContainer();
  
});

function showThankYouContainer() {
    cardOne.classList.add('hidden');
    cardTwo.classList.remove('hidden');
    selection.textContent = ` You selected ${ratingLevel} out of 5 `;
}
    
        
    
 




