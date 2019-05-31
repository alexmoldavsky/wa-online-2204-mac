import './hw11.scss';

const lightsList = document.querySelectorAll('.lights');

for (let i = 0; i < lightsList.length; i++) {
    lightsLampSetClick(lightsList[i]);
}

function lightsLampSetClick(lights) {
    const red = lights.querySelector('.lights__lamp_red');
    const yellow = lights.querySelector('.lights__lamp_yellow');
    const green = lights.querySelector('.lights__lamp_green');

    red.addEventListener('click', () => {
        red.classList.add('lights__lamp_red_active'); 
        yellow.classList.remove('lights__lamp_yellow_active');
        green.classList.remove('lights__lamp_green_active');
    });

    yellow.addEventListener('click', () => {
        red.classList.remove('lights__lamp_red_active'); 
        yellow.classList.add('lights__lamp_yellow_active');
        green.classList.remove('lights__lamp_green_active');
    });

    green.addEventListener('click', () => {
        red.classList.remove('lights__lamp_red_active'); 
        yellow.classList.remove('lights__lamp_yellow_active');
        green.classList.add('lights__lamp_green_active');
    });


}