var progress = document.querySelector('.progress-bar');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const balls = [...document.querySelectorAll('.ball')]; //ES6 like forEach

const MAX_STEPS = 5;
let currentStep = 2;

nextButton.addEventListener('click', () => {
    const currentBall = balls[currentStep-1];
    currentBall.classList.add('active');
    currentStep++;
    prevButton.disabled = false;
    //progress bar
    var width1 = progress.offsetWidth;
    progress.style.width = (width1 + 133) + 'px';
    if(currentStep === MAX_STEPS){
        nextButton.disabled = true;
    }
});

prevButton.addEventListener('click', ()=> {
    const previousBall = balls[currentStep-2];
    previousBall.classList.remove('active');
    currentStep--;
    nextButton.disabled = false;
    //progress bar
    var width2 = progress.offsetWidth;
    progress.style.width = (width2 - 133) + 'px';
    if(currentStep === 2){
        prevButton.disabled = true;
    }
});

