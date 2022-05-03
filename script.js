const numbers = document.querySelectorAll('.number')
const submitButton = document.getElementById('submit')
let selectedNUmber = null
const thanksPage = document.getElementById('thanksPage')
const ratingPage = document.getElementById('ratingCard')
const rateValue = document.querySelector('.ratevalue')

let value;
let selectedButton;

numbers.forEach(number => {
    number.addEventListener('click', (e)=> {
        numbers.forEach(number => {
            number.classList.remove('color')
            selectedButton = e.target
            selectedButton.classList.add('color')
            value = selectedButton.textContent
        });

    })
});

submitButton.addEventListener('click', submit)


function submit (){
    if(!selectedButton){
        alert('please choose a number')
    }
    else{
        rateValue.textContent = value
    ratingPage.classList.add('hide')
    thanksPage.classList.remove('hide')
    }
    
}

