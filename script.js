import { addModalButton } from "./modal.js";
import { addModalImg } from "./modal.js";
import { addFetchBestMovie } from "./addfetch.js";
import { slidersNext } from "./slider.js";
import { slidersPrevious } from "./slider.js";

// recuperation des donnees eventuellement stockées dans le localstorage
let theBestFilm = window.localStorage.getItem(`theBestFilm`);
let topAllFilm = window.localStorage.getItem(`topAllFilm`);
let topCatOne = window.localStorage.getItem(`topCatOne`);
let topCatTwo = window.localStorage.getItem(`topCatTwo`);
let topCatThree = window.localStorage.getItem(`topCatThree`);


if(theBestFilm === null){
    // appel de l'api
    var preTheBestFilm = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score")
    .then(function (reponse){
        if (reponse.ok){
            return reponse.json();
        }else{
            return Promise.reject(reponse);
        }
    }).catch(function (err) {
        console.warn(`Une erreur est survenue : ${err}`);
        return null;
    });

    
    if(preTheBestFilm !== null){

        theBestFilm = preTheBestFilm.results[0];

        // transformation des pieces en JSON
        const valeurTheBestFilm = JSON.stringify(theBestFilm);
        // stockage dans le localStorage
        window.localStorage.setItem("theBestFilm", valeurTheBestFilm);
    }else{
        theBestFilm = null;
    } 
}else{
    // s il y a des données on les reconverti de json a lecture
    theBestFilm = JSON.parse(theBestFilm);
}


if(topAllFilm === null){
    // appel de l'api
    var preTopAllFilm1 = await fetch("http://localhost:8000/api/v1/titles/?page=1&sort_by=-imdb_score")
    .then(function (reponse){
        if (reponse.ok){
            return reponse.json();
        }else{
            return Promise.reject(reponse);
        }
    }).catch(function (err) {
        console.warn(`Une erreur est survenue : ${err}`);
        return null;
    });

        
    var preTopAllFilm2 = await fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score")
    .then(function (reponse){
        if (reponse.ok){
            return reponse.json();
        }else{
            return Promise.reject(reponse);
        }
    }).catch(function (err) {
        console.warn(`Une erreur est survenue : ${err}`);
        return null;
    });
    
    if(preTopAllFilm1 !== null & preTopAllFilm2 !== null){

        var topAllFilm1 = preTopAllFilm1.results;
        var topAllFilm2 = preTopAllFilm2.results;
        topAllFilm = topAllFilm1.concat(topAllFilm2);

        while(topAllFilm.length > 8){
            topAllFilm.pop();
        }

        topAllFilm.shift();

        // transformation des pieces en JSON
        const valeurTopAllFilm = JSON.stringify(topAllFilm);
        // stockage dans le localStorage
        window.localStorage.setItem("topAllFilm", valeurTopAllFilm);
    }else{
        topAllFilm = null;
    } 
}else{
    // s il y a des données on les reconverti de json a lecture
    topAllFilm = JSON.parse(topAllFilm);
}


if(topCatOne === null){
    // appel de l'api
    var preTopCatOne1 = await fetch("http://localhost:8000/api/v1/titles/?genre=Romance&page=1&sort_by=-imdb_score")
    .then(function (reponse){
        if (reponse.ok){
            return reponse.json();
        }else{
            return Promise.reject(reponse);
        }
    }).catch(function (err) {
        console.warn(`Une erreur est survenue : ${err}`);
        return null;
    });

    var preTopCatOne2 = await fetch("http://localhost:8000/api/v1/titles/?genre=Romance&page=2&sort_by=-imdb_score")
    .then(function (reponse){
        if (reponse.ok){
            return reponse.json();
        }else{
            return Promise.reject(reponse);
        }
    }).catch(function (err) {
        console.warn(`Une erreur est survenue : ${err}`);
        return null;
    });

    if(preTopCatOne1 !== null & preTopCatOne2 !== null){

        var topCatOneA = preTopCatOne1.results;
        var topCatOneB = preTopCatOne2.results;

        topCatOne = topCatOneA.concat(topCatOneB);
        while(topCatOne.length > 7){
            topCatOne.pop();
        }
        // transformation des pieces en JSON
        const valeurTopCatOne = JSON.stringify(topCatOne);
        // stockage dans le localStorage
        window.localStorage.setItem("topCatOne", valeurTopCatOne);
    }else{
        topCatOne = null;
    } 
}else{
    // s il y a des données on les reconverti de json a lecture
    topCatOne = JSON.parse(topCatOne);
}

if(topCatTwo === null){
    // appel de l'api
    var preTopCatTwo1 = await fetch("http://localhost:8000/api/v1/titles/?genre=Biography&page=1&sort_by=-imdb_score")
    .then(function (reponse){
        if (reponse.ok){
            return reponse.json();
        }else{
            return Promise.reject(reponse);
        }
    }).catch(function (err) {
        console.warn(`Une erreur est survenue : ${err}`);
        return null;
    });

    var preTopCatTwo2 = await fetch("http://localhost:8000/api/v1/titles/?genre=Biography&page=2&sort_by=-imdb_score")
    .then(function (reponse){
        if (reponse.ok){
            return reponse.json();
        }else{
            return Promise.reject(reponse);
        }
    }).catch(function (err) {
        console.warn(`Une erreur est survenue : ${err}`);
        return null;
    });

    if(preTopCatTwo1 !== null & preTopCatTwo2 !== null){

        var topCatTwoA = preTopCatTwo1.results;
        var topCatTwoB = preTopCatTwo2.results;

        topCatTwo = topCatTwoA.concat(topCatTwoB);
        while(topCatTwo.length > 7){
            topCatTwo.pop();
        }
        // transformation des pieces en JSON
        const valeurTopCatTwo = JSON.stringify(topCatTwo);
        // stockage dans le localStorage
        window.localStorage.setItem("topCatTwo", valeurTopCatTwo);
    }else{
        topCatTwo = null;
    }
}else{
    // s il y a des données on les reconverti de json a lecture
    topCatTwo = JSON.parse(topCatTwo);
}

if(topCatThree === null){
    // appel de l'api
    var preTopCatThree1 = await fetch("http://localhost:8000/api/v1/titles/?genre=History&page=1&sort_by=-imdb_score")
    .then(function (reponse){
        if (reponse.ok){
            return reponse.json();
        }else{
            return Promise.reject(reponse);
        }
    }).catch(function (err) {
        console.warn(`Une erreur est survenue : ${err}`);
        return null;
    });

    var preTopCatThree2 = await fetch("http://localhost:8000/api/v1/titles/?genre=History&page=2&sort_by=-imdb_score")
    .then(function (reponse){
        if (reponse.ok){
            return reponse.json();
        }else{
            return Promise.reject(reponse);
        }
    }).catch(function (err) {
        console.warn(`Une erreur est survenue : ${err}`);
        return null;
    });

    if(preTopCatThree1 !== null & preTopCatThree2 !== null){

        var topCatThreeA = preTopCatThree1.results;
        var topCatThreeB = preTopCatThree2.results;

        topCatThree = topCatThreeA.concat(topCatThreeB);
        while(topCatThree.length > 7){
            topCatThree.pop();
        }
        // transformation des pieces en JSON
        const valeurTopCatThree = JSON.stringify(topCatThree);
        // stockage dans le localStorage
        window.localStorage.setItem("topCatThree", valeurTopCatThree);
    }else{
        topCatThree = null;
    }  
}else{
    // s il y a des données on les reconverti de json a lecture
    topCatThree = JSON.parse(topCatThree);
}

//creation elements
// Afficher plusieurs elements grace a la boucle for

// add description et titre
function genererTheBestFilm(films){

    const sectionFiches = document.querySelector("#bestmovie");
    const titreCat = document.createElement("h2");
    titreCat.innerText = "Le meilleur Film";
    sectionFiches.appendChild(titreCat);

    if(films !== null){

        const article = films;

        const pieceElement = document.createElement("div");
        pieceElement.classList.add("slide", "s1");
        sectionFiches.appendChild(pieceElement);

        const idElement = document.createElement("div");
        idElement.dataset.id = article.id;
        idElement.classList.add("main-container");

        const boutonModal = document.createElement("button");
        boutonModal.classList.add("modal-btn");
        boutonModal.classList.add("modal-trigger");
        boutonModal.textContent = "Description";

        pieceElement.appendChild(idElement);
        idElement.appendChild(boutonModal);

        addFetchBestMovie();

        const modalElement = document.createElement("div");
        modalElement.dataset.modalid = `mod${article.id}`;
        modalElement.classList.add("modal-container");

        const overlayElement = document.createElement("div");
        overlayElement.classList.add("overlay");
        overlayElement.classList.add("modal-trigger");

        const modalOpenElement = document.createElement("div");
        modalOpenElement.classList.add("modal");

        const boutonCloseModal = document.createElement("button");
        boutonCloseModal.classList.add("close-modal");
        boutonCloseModal.classList.add("modal-trigger");
        boutonCloseModal.innerText = "X";

        pieceElement.appendChild(modalElement);
        modalElement.appendChild(overlayElement);
        modalElement.appendChild(modalOpenElement);
        modalOpenElement.appendChild(boutonCloseModal);

        addModalButton();
    }else{

        const pieceElement = document.createElement("div");
        sectionFiches.appendChild(pieceElement);

        const errorElement = document.createElement("p");
        errorElement.innerText = "Une erreur est survenue. Veuillez recharger la page ultérieurement, si le problème persiste, merci de contacter le support technique.";
        pieceElement.appendChild(errorElement);

    }
};

function genererTopAllFilms(films){
    const sectionFiches = document.querySelector("#otherbestmovies");

    const titreCat = document.createElement("h2");
    titreCat.innerText = "Les meilleurs Films";
    sectionFiches.appendChild(titreCat);

    const divArticles = document.createElement("div");
    divArticles.classList.add("articles");
    sectionFiches.appendChild(divArticles)

    if(films !== null){

        const btnPrevious = document.createElement("img");
        btnPrevious.classList.add("btn-nav", "left");
        btnPrevious.src = "./fleche_droite.jpg";
        btnPrevious.alt = "Illustration de flèche de navigation gauche"
        divArticles.appendChild(btnPrevious);

        const btnNext = document.createElement("img");
        btnNext.classList.add("btn-nav", "right");
        btnNext.src = "./fleche_droite.jpg";
        btnNext.alt = "Illustration de flèche de navigation droite"
        divArticles.appendChild(btnNext);

        for(let i = 0; i < films.length; i++){
            const article = films[i];

            const pieceElement = document.createElement("div");
            pieceElement.classList.add("slide", `s${i+1}`);

            divArticles.appendChild(pieceElement);

            const idElement = document.createElement("div");
            idElement.dataset.id = article.id;
            idElement.classList.add("main-container");

            const triggerElement = document.createElement("div");
            triggerElement.classList.add("modal-btn");
            triggerElement.classList.add("modal-trigger");

            const imageElement = document.createElement("img");
            imageElement.alt = `Affiche du film : ${article.title}`;
            imageElement.dataset.id = article.id;
            imageElement.onload = function(){
                return;
            };
            imageElement.onerror = function(){
                imageElement.src = "./page_not_found.jpg";
            };
            imageElement.src = article.image_url;

            pieceElement.appendChild(idElement);
            idElement.appendChild(triggerElement);
            triggerElement.appendChild(imageElement);

            const modalElement = document.createElement("div");
            modalElement.dataset.modalid = `mod${article.id}`;
            modalElement.classList.add("modal-container");
        
            const overlayElement = document.createElement("div");
            overlayElement.classList.add("overlay");
            overlayElement.classList.add("modal-trigger");
        
            const modalOpenElement = document.createElement("div");
            modalOpenElement.classList.add("modal");
        
            const boutonCloseModal = document.createElement("button");
            boutonCloseModal.classList.add("close-modal");
            boutonCloseModal.classList.add("modal-trigger");
            boutonCloseModal.innerText = "X";
        
            pieceElement.appendChild(modalElement);
            modalElement.appendChild(overlayElement);
            modalElement.appendChild(modalOpenElement);
            modalOpenElement.appendChild(boutonCloseModal);

            addModalImg("otherbestmovies", article.id);

        }

        slidersNext("otherbestmovies");
        slidersPrevious("otherbestmovies");

    }else{

        const pieceElement = document.createElement("div");
        divArticles.appendChild(pieceElement);

        const errorElement = document.createElement("p");
        errorElement.innerText = "Une erreur est survenue. Veuillez recharger la page ultérieurement, si le problème persiste, merci de contacter le support technique.";
        pieceElement.appendChild(errorElement);

    }
};

function genererTopCatFilms(films, catName, sectionName){
    const sectionFiches = document.querySelector(`#${sectionName}`);

    const titreCat = document.createElement("h2");
    titreCat.innerText = `Les meilleurs de la catégorie : ${catName}`;
    sectionFiches.appendChild(titreCat);

    var navLine = document.querySelector(`#nav-line-${sectionName}`);
    navLine.innerText = `${catName}`;

    const divArticles = document.createElement("div");
    divArticles.classList.add("articles");
    sectionFiches.appendChild(divArticles)

    if(films !== null){

        const btnPrevious = document.createElement("img");
        btnPrevious.classList.add("btn-nav", "left");
        btnPrevious.src = "./fleche_droite.jpg";
        btnPrevious.alt = "Illustration de flèche de navigation gauche"
        divArticles.appendChild(btnPrevious);

        const btnNext = document.createElement("img");
        btnNext.classList.add("btn-nav", "right");
        btnNext.src = "./fleche_droite.jpg";
        btnNext.alt = "Illustration de flèche de navigation droite"
        divArticles.appendChild(btnNext);

        for(let i = 0; i < films.length; i++){
            const article = films[i];

            const pieceElement = document.createElement("div");
            pieceElement.classList.add("slide", `s${i+1}`);

            divArticles.appendChild(pieceElement);

            const idElement = document.createElement("div");
            idElement.dataset.id = article.id;
            idElement.classList.add("main-container");

            const triggerElement = document.createElement("div");
            triggerElement.classList.add("modal-btn");
            triggerElement.classList.add("modal-trigger");

            const imageElement = document.createElement("img");
            imageElement.alt = `Affiche du film : ${article.title}`;
            imageElement.dataset.id = article.id;
            imageElement.onload = function(){
                return;
            };
            imageElement.onerror = function(){
                imageElement.src = "./page_not_found.jpg";
            };
            imageElement.src = article.image_url;

            pieceElement.appendChild(idElement);
            idElement.appendChild(triggerElement);
            triggerElement.appendChild(imageElement);

            const modalElement = document.createElement("div");
            modalElement.dataset.modalid = `mod${article.id}`;
            modalElement.classList.add("modal-container");
        
            const overlayElement = document.createElement("div");
            overlayElement.classList.add("overlay");
            overlayElement.classList.add("modal-trigger");
        
            const modalOpenElement = document.createElement("div");
            modalOpenElement.classList.add("modal");
        
            const boutonCloseModal = document.createElement("button");
            boutonCloseModal.classList.add("close-modal");
            boutonCloseModal.classList.add("modal-trigger");
            boutonCloseModal.innerText = "X";
        
            pieceElement.appendChild(modalElement);
            modalElement.appendChild(overlayElement);
            modalElement.appendChild(modalOpenElement);
            modalOpenElement.appendChild(boutonCloseModal);

            addModalImg(sectionName, article.id);

        }

        slidersNext(sectionName);
        slidersPrevious(sectionName);

    }else{

        const pieceElement = document.createElement("div");
        divArticles.appendChild(pieceElement);

        const errorElement = document.createElement("p");
        errorElement.innerText = "Une erreur est survenue. Veuillez recharger la page ultérieurement, si le problème persiste, merci de contacter le support technique.";
        pieceElement.appendChild(errorElement);

    }
};

function genererPage(theBestFilm,topAllFilm, topCatOne, topCatTwo, topCatThree){
    genererTheBestFilm(theBestFilm);
    genererTopAllFilms(topAllFilm);
    genererTopCatFilms(topCatOne, "Romance", "topmoviescatone");
    genererTopCatFilms(topCatTwo, "Biographie", "topmoviescattwo");
    genererTopCatFilms(topCatThree, "Historique", "topmoviescatthree");
};

genererPage(theBestFilm,topAllFilm,topCatOne,topCatTwo,topCatThree);


/* Vérification de l'outils window.localStorage 
console.log(window.localStorage);
window.localStorage.clear();
console.log(window.localStorage);
*/

