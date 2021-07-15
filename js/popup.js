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
        popup.classList.remove('popup-error');
    });

    form.addEventListener('submit', function (evt) {
        if (!formName.value || !formEmail.value) {
            evt.preventDefault();
            popup.classList.add('popup-error');
        };
    });

    form.addEventListener('keydown', function (evt) {
        if(evt.key === 'Escape' || evt.key === 'Esc') {
            if(popup.classList.contains('popup-show')) {
                evt.preventDefault();
                popup.classList.remove('popup-show');
                popup.classList.remove('popup-error');
            };
        };
    });