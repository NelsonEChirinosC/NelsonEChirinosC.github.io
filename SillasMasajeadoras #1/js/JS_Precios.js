// Precios

let elementMinutes = document.querySelectorAll('.h2_especial2'),
	elementPrice = document.querySelectorAll('.h2_hidden');

    // 5 minutos
const appearM1 = function(){

    elementPrice[0].classList = 'h2_hidden appear';
}

const desappearM1 = function(){

    elementPrice[0].classList = 'h2_hidden hide';
}

elementMinutes[0].addEventListener('mouseover', appearM1);
elementMinutes[0].addEventListener('mouseout', desappearM1);

// 10 minutos

const appearM2 = function(){

    elementPrice[1].classList = 'h2_hidden appear';
}

const desappearM2 = function(){

    elementPrice[1].classList = 'h2_hidden hide';
}

elementMinutes[1].addEventListener('mouseover', appearM2);
elementMinutes[1].addEventListener('mouseout', desappearM2);

// 15 minutos

const appearM3 = function(){

    elementPrice[2].classList = 'h2_hidden appear';
}

const desappearM3 = function(){

    elementPrice[2].classList = 'h2_hidden hide';
}

elementMinutes[2].addEventListener('mouseover', appearM3);
elementMinutes[2].addEventListener('mouseout', desappearM3);

// 20 minutos

const appearM4 = function(){

    elementPrice[3].classList = 'h2_hidden appear';
}

const desappearM4 = function(){

    elementPrice[3].classList = 'h2_hidden hide';
}

elementMinutes[3].addEventListener('mouseover', appearM4);
elementMinutes[3].addEventListener('mouseout', desappearM4);

// 25 minutos

const appearM5 = function(){

    elementPrice[4].classList = 'h2_hidden appear';
}

const desappearM5 = function(){

    elementPrice[4].classList = 'h2_hidden hide';
}

elementMinutes[4].addEventListener('mouseover', appearM5);
elementMinutes[4].addEventListener('mouseout', desappearM5);

