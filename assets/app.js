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


const imgForm = document.querySelector('.img-form');
const imgSearch = document.querySelector('.search');


imgSearch.addEventListener('click', function(){

    imgForm.src = "/build/images/form.jpg";
}
)