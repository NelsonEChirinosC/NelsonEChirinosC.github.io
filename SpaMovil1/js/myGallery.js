new Swiper(".swiper-container",{
    speed: 300,
    spaceBetween: 300,
    loop: true,
    effect: 'coverflow',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});