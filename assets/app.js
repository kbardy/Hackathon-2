/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

const forum = document.querySelector('.search');

    forum.addEventListener('click', function(){   
}
)

const imgForm = document.querySelector('.maximeCom');
const imgForm2 = document.querySelector('.manonCom');
const imgSearch = document.querySelector('.search');


imgSearch.addEventListener('click', function(){

    imgForm.src = "/build/images/maximeCom.jpg";
    imgForm2.src = "/build/images/manonCom.png";
}
)

const imgSpeak = document.querySelector('.maxime1');

imgForm.addEventListener('click', function (){

    imgSpeak.src = "/build/images/maxime1.png";
}
)

const mario1 = document.querySelector('.mario1');

imgSpeak.addEventListener('click', function (){
   
    mario1.src = "/build/images/mario1.png";
}
)

const maxime2 = document.querySelector('.maxime2')

mario1.addEventListener('click', function (){
    
    maxime2.src = "/build/images/maxime2.png";
}
)