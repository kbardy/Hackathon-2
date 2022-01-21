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

const forum = document.querySelector('.btn');

    forum.addEventListener('click', function(){   
}
)

const imgForm = document.querySelector('.maximeCom');
const imgForm2 = document.querySelector('.manonCom');
const searchForm = document.querySelector('.form-search');


searchForm.addEventListener('submit', function(event){
    event.preventDefault();
    imgForm2.src = "/build/images/manonCom.png";
    imgForm.src = "/build/images/maximeCom.jpg";
    
}
)

const imgSpeak = document.querySelector('.img-speak');

imgForm.addEventListener('click', function (){

    imgSpeak.src = "/build/images/discussion.png";
}
)

const imgRemoveSpeak = document.querySelector('.img-speak')

imgSpeak.addEventListener('click', function(){

    imgRemoveSpeak.src = "";
}
)