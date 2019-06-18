/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/
//var afbeelding = document.querySelectorAll('.afbeelding');

//var button1 = document.querySelector('button');

//afbeelding.addEventListener('hover', function () {
//   button1.classList.toggle(".hoverbutton");
//});
var button = document.querySelector('.download');

function downloadComplete() {
    button.classList.toggle('complete');
}

button.addEventListener('click', function () {
    button.classList.toggle('downloaden');

    setTimeout(function () {
        downloadComplete();
    }, 2000);
});
