/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/


var gedownload = document.querySelector('.gedownload');
var button = document.querySelector('.download');
var button1 = document.querySelector('.download1');

function downloadComplete() {

    button.classList.toggle('complete');
    gedownload.classList.toggle('like');
}

button.addEventListener('click', function () {
    button.classList.toggle('downloaden');


    setTimeout(function () {
        downloadComplete();
    }, 3000);
});

function downloadComplete1() {

    button1.classList.toggle('complete');
    gedownload.classList.toggle('like');
}

button1.addEventListener('click', function () {
    button1.classList.toggle('downloaden');


    setTimeout(function () {
        downloadComplete1();
    }, 3000);
});
