document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');
    const myHeading = document.getElementById('myHeading');

    myButton.addEventListener('click', () => {
        if (myHeading.textContent === 'Click the button below!') {
            myHeading.textContent = 'Button clicked! Well done!';
        } else {
            myHeading.textContent = 'Click the button below!';
        }
    });
});