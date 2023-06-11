function dropDownFunc() {
    document.getElementById('myDropdown').classList.toggle('show');
    document.querySelector('#arrowdown').classList.toggle('rotate');
}

// Clear GPS input
const gpsBtn = document.querySelector('.gps__btn');
const gpsInput = document.querySelector('.gps');
gpsBtn.addEventListener('click', function() {
    gpsInput.value = '';
});