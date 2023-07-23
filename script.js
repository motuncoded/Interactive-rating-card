const form = document.querySelector("form");
const rate =document.querySelector(".rate");
const ratingContainer = document.querySelector(".rating-container");
const thankYouCard = document.querySelector(".thank-you-card");


document.getElementsByName("rating").forEach(rates =>{
    ratingContainer.classList.remove("hidden");
    thankYouCard.classList.add("hidden")
    
})



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    rate.innerText = e.target.rating.value;
    ratingContainer.classList.add("hidden");
    thankYouCard.classList.remove("hidden")
;
})


