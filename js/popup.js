const popup = document.querySelector('.feedback-popup');
const popupOpen = document.querySelector('.map-info .button');
const popupClose = document.querySelector('.popup-button-cross');
const form = popup.querySelector('form');
const formName = popup.querySelector('[id=popup-input-name]');
const formEmail = popup.querySelector('[id=popup-input-email]');

    popupOpen.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add('popup-show');
        formName.focus();
    });

    popupClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.remove('popup-show');
    });

    form.addEventListener('submit', function (evt) {
        if (!formName.value || !formEmail.value) {
            evt.preventDefault();
            alert('Пожалуйста, введите ваше имя и почту, чтобы мы связались с вами.');
        };
    });