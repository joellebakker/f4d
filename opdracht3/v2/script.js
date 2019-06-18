/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var section = document.querySelector('section'); //section in html selecteren

//json geladen
var request = new XMLHttpRequest(); //een verzoek aanmaken
console.log("request", request);
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
request.open('GET', requestURL); //het verzoek openen
request.responseType = 'json';
request.send();

//event handler wordt aangeroepen als de data geladen is
request.onload = function () {
    console.log("onload");
    //var data = request.response;
    laatDataZien(request.response);
    showData(request.response);
}


function laatDataZien(mijndata) {
    console.log("laat mijn data zien", mijndata[0].title);
    console.log("wat?", mijndata[2].plot);
}

function showData(jsonObj) { //dat het json is
    var data = jsonObj;

    console.log(data);


    for (var i = 0; i < data.length; i++) {

        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var paragraf = document.createElement('p');
        var naam = document.createElement('ul');
        naam.setAttribute("class", "actors");
        var afbeelding = document.createElement('img');


        var button = document.createElement("button");
        button.textContent = "meer info";

        //pak de genres uit de json per film
        //maak eenlijst met de genres: for loop
        var genre = document.createElement('ul');
        var soort = data[i].genres;
        for (var k = 0; k < soort.length; k++) {
            var lijst = document.createElement('li');
            //console.log("LIJST", lijst)
            lijst.textContent = soort[k];
            //console.log("GENRE", soort[k], lijst)
            genre.appendChild(lijst);
        }
        //console.log("UL", genre)



        //genre.textContent = data[i].genres;
        afbeelding.setAttribute("src", data[i].cover);
        paragraf.textContent = data[i].plot;
        myH2.textContent = data[i].title;

        var acteurs = data[i].actors;
        for (var j = 0; j < acteurs.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = acteurs[j].actor_name;
            naam.appendChild(listItem);
        }


        //koppel alle elementen  aan myarticle
        myArticle.appendChild(afbeelding);
        myArticle.appendChild(myH2);
        myArticle.appendChild(button);

        //maak een div met de 'meer info' 
        var meerinfo = document.createElement('div');
        meerinfo.appendChild(genre);
        meerinfo.appendChild(paragraf);
        meerinfo.appendChild(naam);
        myArticle.appendChild(meerinfo);

        //koppel het article aan de section in de html
        section.appendChild(myArticle);
    }

}
