const moleHoles = document.querySelector('.main-wrapper .moleHole'),
      beginButton = document.querySelector('.btn'),
      selectDificult = document.querySelector('#dificult');

    
let points = 0,
    feed = false,
    moleArray = document.querySelectorAll('.mole'),
    dificult = 'easy',
    timeHungry,
    buttonReset = document.querySelector('.winOption .btn');


moleHoles.addEventListener('click', clickMole);
beginButton.addEventListener('click',beginGame);
selectDificult.addEventListener('change',changeDificult);
buttonReset.addEventListener('click',playAgain);

function changeDificult(e){
    dificult = e.target.value;
}


// Aqui empieza el juego donde empiezan a aparecer los topos
function beginGame(e){

    beginButton.disabled = true;
    selectDificult.disabled = true;

    let oldDate = new Date,
        oldMinutes = oldDate.getMinutes();

    switch(dificult){
        case 'easy':
            timeHungry = 1000;
            break;
        case 'normal':
            timeHungry = 800;
            break;
        case 'hard':
            timeHungry = 600;
            break;
        case 'imposible':
            timeHungry = 500;
            break;
        default:
            alert('Paso algo por favor revisar')
            break;
    }

    // Funcion para el intervalo de tiempo 
    intervalGame = setInterval(playGame, 1000);

    // Funcion que inicia para que aparezcas los topos
    function playGame(e){
        
        let randomNum = Math.floor(Math.random()*10);
        molePick(randomNum,e);

    }

    // Funcion para elegir el topo
    function molePick(randomNum,e){
        let molePicked = moleArray[randomNum];
        animation(molePicked,e);
    }

    function animation(molePicked,e){

        let imgMolePicked = molePicked.querySelectorAll('img');
        let numHungry, numFeed, numSad, numLeaving, newDate = new Date, newMinutes = newDate.getMinutes();
        console.log(newMinutes -oldMinutes);
        // if((newMinutes - oldMinutes) > 0){

        //     numHungry = 4, numFeed = 5, numSad = 6, numLeaving = 7;
        //     oldMinutes = newMinutes;

        // } else {
            numHungry = 0, numFeed = 1, numSad = 2, numLeaving = 3;
        // }
    
        imgMolePicked[0].style.display = "block";

        setTimeout(sadOrHappy, timeHungry);

        function sadOrHappy(){
            imgMolePicked[numHungry].style.display = 'none';
            if(feed){
                imgMolePicked[numFeed].style.display = 'block';
            } else {
                imgMolePicked[numSad].style.display = 'block';
            }

            setTimeout(leaving,200);
            function leaving(){
                imgMolePicked[numFeed].style.display = 'none';
                imgMolePicked[numSad].style.display = 'none';
                imgMolePicked[numLeaving].style.display = 'block';

                setTimeout(toBegin,200);
                function toBegin(){
                    imgMolePicked[numLeaving].style.display = 'none';
                    feed = false;
                }
            }
        }
    }

}

// Funcion que determina las acciones si le das click
// SI NO empieza el juego de aqui para abajo no se ejecuta ya que no aparece los topos que dan puntaje
function clickMole(e){
    addPoints(e);
}

// Funcion que agrega puntos si se le da click correcto
function addPoints(e){
    // console.log(e.target.classList == 'mole');
    if(e.target.classList == 'hungry' || e.target.classList =='kingHungry'){
        points++;
        feed = true;
        changeProgressBar();
    }
}

// Funcion que hace cambiar la barra de progreso
function changeProgressBar(){
    const progressBar = document.querySelector('.changeProgressBar'),
          valueprogressBar = window.getComputedStyle(progressBar).width;

    // console.log(valueprogressBar);
    
    progressBar.style.width = `${parseInt(valueprogressBar,10) + 82.215}px`;

    checkWin();

}

// Funcion que chequea y muestra si has ganado
function checkWin(){
    if(points === 10){
        document.querySelector('.win').style.display = 'flex';
    }
}

function playAgain(){
    clearInterval(intervalGame);
    document.querySelector('.win').style.display = 'none';
    document.querySelector('.changeProgressBar').style.width = '4%';
    beginButton.disabled = false;
    selectDificult.disabled = false;
    points = 0;
}
