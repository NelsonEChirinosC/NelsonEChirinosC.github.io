const notes = document.querySelectorAll('.sliderWrapper .note1'),
      imgHappy1 = document.querySelector('.sliderWrapper .sliderWrapperOne .imgHappy'),
      imgHappy2 = document.querySelector('.sliderWrapper .sliderWrapperTwo .imgHappy'),
      slideWrapper = document.querySelector('.sliderWrapper');

let slideBtns = document.querySelectorAll('.sliderWrapper .btn');

console.log(slideBtns);
      

setTimeout(()=>{
    notes.forEach((note)=> note.classList.add('noteFinal'));
},2000);

setTimeout(()=>{
    imgHappy1.classList.add('imgHappyFinal');
    imgHappy2.classList.add('imgHappyFinal2');
},2500)

setTimeout(()=>{
    slideBtns.forEach((btn)=> {
        btn.classList.add('show')
        btn.addEventListener('click', openPresent);
    });
},3500);

function openPresent(e){
    notes.forEach((note) => note.classList.remove('noteFinal'));
    imgHappy1.classList.remove('imgHappyFinal');
    imgHappy2.classList.remove('imgHappyFinal2');
    setTimeout(() => {slideWrapper.classList.add('open')},500);
    setTimeout(()=> {slideWrapper.style.display = 'none'},1500);
}