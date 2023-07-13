const rating = document.querySelectorAll(".rating span")
const rate_num = document.querySelector(".rate");
 const cancel = document.querySelector(".cancel-btn")

let rate = null;

rating.forEach((rates=>{
    rates.addEventListener("click", (e)=>{
const clicked = document.querySelector(".clicked")
   if (clicked){
    clicked.classList.remove("clicked")
   }
   const number = e.target;
   number.classList.add("clicked")
   rate = e.target.innerText;


})
}))

document.querySelector("button").addEventListener("click", ()=>{
    if(rate){
        rate_num.innerText = rate;
        document.querySelector(".container").classList.add("hidden")
        document.querySelector(".card").classList.remove("hidden")
    }
})
cancel.addEventListener("click", (e)=>{
    e.preventDefault()
    document.querySelector(".container").classList.remove("hidden")
    document.querySelector(".card").classList.add("hidden")

})