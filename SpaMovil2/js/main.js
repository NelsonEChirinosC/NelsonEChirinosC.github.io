const benefitNode = document.querySelectorAll('.benefitNode');

let flipedCoin = false;

benefitNode.forEach(node => {
    node.addEventListener('mouseover', flipForward);
    node.addEventListener('mouseleave', flipBackward);
})

function flipForward(e){
    if(flipedCoin){ return }; // retornando si la moneda esta volteada
    flipedCoin = true;
    let element = e.target;
    element.querySelector('i').classList.remove('show');
    element.querySelector('.flipCoin').classList.add('show');
    console.log(flipedCoin);
}

function flipBackward(e){
    if(!flipedCoin){ return } // retornando si la moneda no esta volteada
    let element = e.target;
    element.querySelector('i').classList.add('show');
    element.querySelector('.flipCoin').classList.remove('show');
    flipedCoin = false;
}

// document.querySelector('footer').addEventListener('mouseover', function(){
//     document.querySelector('.one').classList.add('blur');
// })


// Funcionalidades para la galeria
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