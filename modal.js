const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

export function addModalButton(){

    const idElement = document.querySelector("#bestmovie div div.main-container");
    const modalElement = document.querySelector("#bestmovie div div.modal-container");
    const modalOpenElement = document.querySelector("#bestmovie div div.modal-container div.modal");
    const modalTriggers = document.querySelectorAll("#bestmovie div .modal-trigger");

    const id = idElement.dataset.id;
    let modalInfoButton = window.localStorage.getItem(`modalId${id}`);

    modalTriggers.forEach(trigger => trigger.addEventListener("click", async function (event){

        if(modalInfoButton === null){

            modalInfoButton = await fetch(`http://localhost:8000/api/v1/titles/${id}`)
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

            if(modalInfoButton !== null){
                const valeurModalInfoButton = JSON.stringify(modalInfoButton);
                window.localStorage.setItem(`modalId${id}`, valeurModalInfoButton);
            }else{
                modalInfoButton = null;
            }

        }else{
            if(typeof modalInfoButton === "string"){
                modalInfoButton = JSON.parse(modalInfoButton);        
            }
        }

        const article = modalInfoButton;

        if(article !== null){

            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal img.mod-image`) === false){
                const imageElement = document.createElement("img");
                imageElement.alt = `Affiche du film : ${article.title}`;
                imageElement.classList.add("mod-image");
                imageElement.onload = function(){
                    return;
                };
                imageElement.onerror = function(){
                    imageElement.src = "./page_not_found.jpg";
                };
                imageElement.src = article.image_url;
                modalOpenElement.appendChild(imageElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal h3.mod-title`) === false){
                const titleElement = document.createElement("h3");
                titleElement.classList.add("mod-title");
                titleElement.innerText = article.title;
                modalOpenElement.appendChild(titleElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-genre`) === false){
                const genreElement = document.createElement("p");
                genreElement.classList.add("mod-genre");
                genreElement.innerText = `Genre : ${article.genres.toString()}`;
                modalOpenElement.appendChild(genreElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-date`) === false){
                const dateElement = document.createElement("p");
                const dateFormat = new Date(`${article.date_published} GMT`);
                dateElement.classList.add("mod-date");
                dateElement.innerText = `${`Date de sortie : le ${dateFormat.getDate()} ${monthNames[dateFormat.getMonth()]} ${dateFormat.getFullYear()}`}`;
                modalOpenElement.appendChild(dateElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-rated`) === false){
                const ratedElement = document.createElement("p");
                ratedElement.classList.add("mod-rated");
                ratedElement.innerText = `Score d'évaluation : ${article.rated}`;
                modalOpenElement.appendChild(ratedElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-imdb`) === false){
                const imdbElement = document.createElement("p");
                imdbElement.classList.add("mod-imdb");
                imdbElement.innerText = `Score imdb : ${article.imdb_score}`;
                modalOpenElement.appendChild(imdbElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-direct`) === false){
                const directElement = document.createElement("p");
                directElement.classList.add("mod-direct");
                directElement.innerText = `Réalisateur : ${article.directors.toString()}`;
                modalOpenElement.appendChild(directElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-actor`) === false){
                const actorElement = document.createElement("p");
                actorElement.classList.add("mod-actor");
                actorElement.innerText = `Acteurs : ${article.actors.toString()}`;
                modalOpenElement.appendChild(actorElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-duration`) === false){
                const durationElement = document.createElement("p");
                durationElement.classList.add("mod-duration");
                durationElement.innerText = `Durée : ${article.duration.toString()} minutes`;
                modalOpenElement.appendChild(durationElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-countries`) === false){
                const paysElement = document.createElement("p");
                paysElement.classList.add("mod-countries");
                paysElement.innerText = `Pays d'origine : ${article.countries.toString()}`;
                modalOpenElement.appendChild(paysElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-avg`) === false){
                const avgElement = document.createElement("p");
                avgElement.classList.add("mod-avg");
                avgElement.innerText = `Note moyenne de résultat au Box Office : ${article.avg_vote}`;
                modalOpenElement.appendChild(avgElement);
            }
            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-ldescr`) === false){
                const ldescrElement = document.createElement("p");
                ldescrElement.classList.add("mod-ldescr");
                ldescrElement.innerText = `Résumé : ${article.long_description}`;
                modalOpenElement.appendChild(ldescrElement);
            }

        }else{

            if(!!document.querySelector(`[data-modalid = 'mod${id}'] div.modal p.mod-error`) === false){
                const errorElement = document.createElement("p");
                errorElement.classList.add("mod-error");
                errorElement.innerText = "Une erreur est survenue. Veuillez recharger la page ultérieurement, si le problème persiste, merci de contacter le support technique.";
                modalOpenElement.appendChild(errorElement);
            }

        }
        modalElement.classList.toggle("active");
    }));
}

export function addModalImg(sectionName, idTrigger){

    let modalInfoImg = window.localStorage.getItem(`modalId${idTrigger}`);

    const activeModalElement = document.querySelector(`#${sectionName} [data-modalid='mod${idTrigger}`)
    const modalOpenElement = document.querySelector(`#${sectionName} [data-modalid='mod${idTrigger}'] div.modal`);
    const modalTriggers = document.querySelector(`#${sectionName} [data-modalid='mod${idTrigger}']`).parentElement.querySelectorAll(".modal-trigger");

    modalTriggers.forEach(trigger => trigger.addEventListener("click", async function (event){

        const id = idTrigger;

        if(modalInfoImg === null){

            modalInfoImg = await fetch(`http://localhost:8000/api/v1/titles/${id}`)
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

            if(modalInfoImg !== null){
                const valeurModalInfoImg = JSON.stringify(modalInfoImg);
                window.localStorage.setItem(`modalId${idTrigger}`, valeurModalInfoImg);
            }else{
                modalInfoImg = null;
            }
        
        }else{
            if(typeof modalInfoImg === "string"){
                modalInfoImg = JSON.parse(modalInfoImg);        
            }
        }

        const article = modalInfoImg;

        if(article !== null){

            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal img.mod-image`) === false){
                const imageElement = document.createElement("img");
                imageElement.alt = `Affiche du film : ${article.title}`;
                imageElement.classList.add("mod-image");
                imageElement.onload = function(){
                    return;
                };
                imageElement.onerror = function(){
                    imageElement.src = "./page_not_found.jpg";
                };
                imageElement.src = article.image_url;
                modalOpenElement.appendChild(imageElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal h3.mod-title`) === false){
                const titleElement = document.createElement("h3");
                titleElement.classList.add("mod-title");
                titleElement.innerText = article.title;
                modalOpenElement.appendChild(titleElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-genre`) === false){
                const genreElement = document.createElement("p");
                genreElement.classList.add("mod-genre");
                genreElement.innerText = `Genre : ${article.genres.toString()}`;
                modalOpenElement.appendChild(genreElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-date`) === false){
                const dateElement = document.createElement("p");
                const dateFormat = new Date(`${article.date_published} GMT`);
                dateElement.classList.add("mod-date");
                dateElement.innerText = `${`Date de sortie : le ${dateFormat.getDate()} ${monthNames[dateFormat.getMonth()]} ${dateFormat.getFullYear()}`}`;
                modalOpenElement.appendChild(dateElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-rated`) === false){
                const ratedElement = document.createElement("p");
                ratedElement.classList.add("mod-rated");
                ratedElement.innerText = `Score d'évaluation : ${article.rated}`;
                modalOpenElement.appendChild(ratedElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-imdb`) === false){
                const imdbElement = document.createElement("p");
                imdbElement.classList.add("mod-imdb");
                imdbElement.innerText = `Score imdb : ${article.imdb_score}`;
                modalOpenElement.appendChild(imdbElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-direct`) === false){
                const directElement = document.createElement("p");
                directElement.classList.add("mod-direct");
                directElement.innerText = `Réalisateur : ${article.directors.toString()}`;
                modalOpenElement.appendChild(directElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-actor`) === false){
                const actorElement = document.createElement("p");
                actorElement.classList.add("mod-actor");
                actorElement.innerText = `Acteurs : ${article.actors.toString()}`;
                modalOpenElement.appendChild(actorElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-duration`) === false){
                const durationElement = document.createElement("p");
                durationElement.classList.add("mod-duration");
                durationElement.innerText = `Durée : ${article.duration.toString()} minutes`;
                modalOpenElement.appendChild(durationElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-countries`) === false){
                const paysElement = document.createElement("p");
                paysElement.classList.add("mod-countries");
                paysElement.innerText = `Pays d'origine : ${article.countries.toString()}`;
                modalOpenElement.appendChild(paysElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-avg`) === false){
                const avgElement = document.createElement("p");
                avgElement.classList.add("mod-avg");
                avgElement.innerText = `Note moyenne de résultat au Box Office : ${article.avg_vote}`;
                modalOpenElement.appendChild(avgElement);
            }
            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-ldescr`) === false){
                const ldescrElement = document.createElement("p");
                ldescrElement.classList.add("mod-ldescr");
                ldescrElement.innerText = `Résumé : ${article.long_description}`;
                modalOpenElement.appendChild(ldescrElement);
            }

        }else{

            if(!!document.querySelector(`#${sectionName} [data-modalid = 'mod${id}'] div.modal p.mod-error`) === false){
                const errorElement = document.createElement("p");
                errorElement.classList.add("mod-error");
                errorElement.innerText = "Une erreur est survenue. Veuillez recharger la page ultérieurement, si le problème persiste, merci de contacter le support technique.";
                modalOpenElement.appendChild(errorElement);
            }

        }

        activeModalElement.classList.toggle("active");

    }));
}