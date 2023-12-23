const toggle = document.querySelector('.toggle');
let price = document.querySelectorAll('.price');
const closeClass =document.querySelector('.fa.fa-close')
const page =document.querySelector('.page')
const signInLink = document.querySelector('.sign');
const sign= document.querySelector('.d')




// Close the sign Up class //
closeClass.addEventListener('click', function (){
  console.log("close")
  
  page.style.display = 'none';
})


signInLink.addEventListener('click', function(){
  console.log("Yes")
  sign.style.display = 'none';
  page.style.display = "block";



})


document.querySelector('.signIn').addEventListener('click', function() {
  console.log("Yes")
  document.querySelector('.all').style.display='none'
  document.querySelector('.d').style.display = 'block';
});


toggle.addEventListener('click', function() {
  toggle.classList.toggle('on')
  for (let element of price) {
    updatePrice(element);
  }
});


//Increase price by 2.2 when the toggle button is on 
function updatePrice(element) {
  let currentPrice = element.textContent.match(/\d+/)[0];
  console.log(currentPrice);

  if (toggle.classList.contains('on')) {
    let currentNo = parseInt(currentPrice);
    let newPrice = Math.trunc(currentNo * 2.2); // Multiply by 2.2 instead of multiplying
    console.log(currentNo);
    let updatedPrice = element.textContent.replace(/\d+/, newPrice);
    console.log(updatedPrice);
    element.textContent = updatedPrice;
  } else {
    let defaultPrice = element.getAttribute('data-default-price');
    element.textContent = "$" + defaultPrice + " night";
  }
}



