const sliderEl = document.querySelector("#inp-range");
const priceEl = document.querySelector(".price");
const viewsEl = document.querySelector(".pageviews");
const toggleEl = document.querySelector(".toggle");

let perMonth = [8,12,16,24,36];
let pageviews = ["10K", "50K", "100K", "500K", "1M"]; 
let isYearly = false;

document.addEventListener("DOMContentLoaded", () =>{  
  sliderEl.addEventListener("input", (e) => { 
    currentPrice();
    currentViews();
  })
  
  toggleBtn();
  currentPrice();
  currentViews();
});


function toggleBtn(){
  toggleEl.addEventListener('click', () => {
    toggleEl.classList.toggle('active');
    if(toggleEl.classList.contains('active')){
      isYearly = true;
    }
    else if(!toggleEl.classList.contains('active')){
      isYearly = false;
    }
    currentPrice();
  })
}


function currentPrice () {
  if(isYearly){
    priceEl.innerHTML = `$${(perMonth[sliderEl.value] * .75).toFixed(2)}`;
  }
  else{
    priceEl.innerHTML = `$${perMonth[sliderEl.value].toFixed(2)}`;
  }
}

function currentViews(){
  viewsEl.innerHTML = `${pageviews[sliderEl.value]} pageviews`;
}


/*
PRICING
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
*/

// https://www.frontendmentor.io/solutions/interactive-pricing-component-zqPQg0sRL