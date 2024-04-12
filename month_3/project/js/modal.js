//modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'

}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()

modalCloseButton.onclick = () => closeModal()

modal.onclick = (event) => {
    if(event.target === modal){
        closeModal()
    }
}
//2_part_modal_dz
const modalOpenedKey = 'modalOpened';
let isModalOpened = false;

const openModal2 = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    isModalOpened = true;
    localStorage.setItem(modalOpenedKey, true);
}
const closeModal2 = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';

}
const  handleScrollToEnd = () => {
    if((window.innerHeight + window.scrollY)>=document.body.offsetHeight && !isModalOpened){
        openModal();
        window.removeEventListener('scroll', handleScrollToEnd);
    }
}
window.addEventListener('scroll', handleScrollToEnd);

if(localStorage.getItem(modalOpenedKey) === 'true'){
    isModalOpened = true;
    window.removeEventListener('scroll', handleScrollToEnd);
}

setTimeout(openModal, 10000);