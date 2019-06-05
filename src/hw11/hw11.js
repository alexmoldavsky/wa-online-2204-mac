import './hw11.scss';

const lightsList = document.querySelectorAll('.lights');

for (let i = 0; i < lightsList.length; i++) {
    lightsLampSetClick(lightsList[i]);
}

function lightsLampSetClick(lights) {
    const lampsList = lights.querySelectorAll('.lights__lamp');
    for (let i = 0; i < lampsList.length; i++) {
        lampsList[i].addEventListener('click', () => {
            for (let j = 0; j < lampsList.length; j++) {
                lampsList[j].classList.remove('active');
            }
            lampsList[i].classList.add('active');

        });
    }
}