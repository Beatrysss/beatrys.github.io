
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// ... your existing code ...

const scrollToBottomButton = document.getElementById('scrollToBottom'); // Replace with the ID of your button

scrollToBottomButton.addEventListener('click', () => {
  const targetElement = document.querySelector('.mySwiper'); // Replace with the element you want to scroll to
  targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
});
