
export async function addFetchBestMovie(){

    let bestMovieFront = window.localStorage.getItem(`bestMovieFront`);
    const idElement = document.querySelector("#bestmovie div div");

    if(bestMovieFront === null){

        const id = idElement.dataset.id
        bestMovieFront = await fetch(`http://localhost:8000/api/v1/titles/${id}`)
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

        if(bestMovieFront !== null){
        const valeurBestMovieFront = JSON.stringify(bestMovieFront);
        window.localStorage.setItem("bestMovieFront", valeurBestMovieFront);
        }else{
            bestMovieFront = null;
        }
    }else{
        bestMovieFront = JSON.parse(bestMovieFront);
    }

    const article = bestMovieFront;
    if(article !== null){

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

        const titleElement = document.createElement("h3");
        titleElement.innerText = article.title;

        const shortDescrElement = document.createElement("p");
        shortDescrElement.innerText = `Synopsis : ${article.description}`;

        idElement.appendChild(imageElement);
        idElement.appendChild(titleElement);
        idElement.appendChild(shortDescrElement);

    }else{

        const errorElement = document.createElement("p");
        errorElement.innerText = "Une erreur est survenue. Veuillez recharger la page ultérieurement, si le problème persiste, merci de contacter le support technique.";
        idElement.appendChild(errorElement);
    }
};