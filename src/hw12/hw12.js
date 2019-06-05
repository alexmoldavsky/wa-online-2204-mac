import './hw12.scss';

const switcherList = document.querySelectorAll('.switcher');
const grandButton = document.querySelector('.grand-button');
checkButtonState(grandButton);

for (let i = 0; i < switcherList.length; i++) {
    const switcherLamp = switcherList[i].querySelector('.switcher__light');
    const switcherButton = switcherList[i].querySelector('.switcher__button');
    checkButtonState(switcherButton);
    switcherButton.addEventListener('click', () => {
        switcherLamp.classList.toggle('active', toggleButton(switcherButton));
    });
}

grandButton.addEventListener('click', () => {
    let btnActive = toggleButton(grandButton);
    for (let i = 0; i < switcherList.length; i++) {
        const switcherLamp = switcherList[i].querySelector('.switcher__light');
        const switcherButton = switcherList[i].querySelector('.switcher__button');
        switcherLamp.classList.toggle('active', btnActive);
        switcherButton.classList.toggle('active', btnActive);
        checkButtonState(switcherButton);
    }
});

function checkButtonState(button) {
    let btnActive = button.classList.contains('active');
    button.textContent = btnActive ? 'ON' : 'OFF';
    return btnActive;
}

function toggleButton(button) {
    button.classList.toggle('active');
    return checkButtonState(button);
}
