    window.onload = function() {
        document.getElementById('modal_main').classList.add('modal_active');
    }

    function closeModal() {
        const modalActive = this.closest('.modal_active');
        modalActive.style.visibility = "hidden";
    }

    const modalButtons = document.querySelectorAll('.modal__close');
    for (const button of modalButtons ){
        button.addEventListener('click', closeModal);
    }
    
    function openSuccess() {
        let element = document.getElementById('modal_success');
        element.classList.add('modal_active');
    }

    const showSuccess = document.querySelectorAll('.show-success');
    for (const buttonSuccess of showSuccess ){
        buttonSuccess.addEventListener('click', openSuccess);
    }
