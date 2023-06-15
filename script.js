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

//Accordion
const accordionItem = document.querySelectorAll('.accordion__item');

accordionItem.forEach((item) => {
    const accordionHeaderItem = item.querySelector('.accordion__header');
    accordionHeaderItem.addEventListener('click', () => {
        const accordionBodyItem = item.querySelector('.accordion__body');
        const bodyActived = document.querySelector('.active');
        VerifyActive(item, accordionBodyItem, bodyActived)
    });
});

function VerifyActive(item, body, bodyActived) {
    const icon = item.querySelector('.icon');
    const icons = document.querySelectorAll('.icon');
    icons.forEach((item) => (item.innerHTML = '+'));

    if (bodyActived) {
        bodyActived.style.height = 0;
        bodyActived.classList.remove('active');
    }
    if (body !== bodyActived) {
        icon.innerHTML = '-';
        body.classList.add('active');
        body.style.height = body.scrollHeight + 10 + 'px';
    }
}