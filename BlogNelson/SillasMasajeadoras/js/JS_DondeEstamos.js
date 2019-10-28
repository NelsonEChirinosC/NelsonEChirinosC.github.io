
 var elementh_1 = document.getElementById('first_h2_especial'),
 	elementh_2 = document.getElementById('second_h2_especial');


 var elementp_1 = document.getElementById('first_p_especial');
 	elementp_1.style.visibility = 'hidden';

 var appear_p1 = function(){

 		if(elementp_1.style.visibility == 'hidden'){

 			elementp_1.style.visibility = 'visible';
 			elementp_1.style.opacity = '1';
			
 		} else {

 			elementp_1.style.visibility = 'hidden';
 			elementp_1.style.opacity = '0';
 		}
		

 };

 var elementp_2 = document.getElementById('second_p_especial');
 	elementp_2.style.visibility = 'hidden';

 var appear_p2 = function(){


 		if(elementp_2.style.visibility == 'hidden'){

 			elementp_2.style.visibility = 'visible';
 			elementp_2.style.opacity = '1';
			
 		} else {

 			elementp_2.style.visibility = 'hidden';
 			elementp_2.style.opacity = '0';
 		}
 };

 elementh_1.addEventListener('click',appear_p1);
 elementh_2.addEventListener('click',appear_p2);






