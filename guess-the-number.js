//EXERCICE GUESS THE NUMBER

//role : generer un nombre aléatoire
//besoin : rien
//rendre : un nombre aléatoire


function chiffreAleatoire() {

    //arrondir et choisir un nombre aléatoire

    //dans math random le dernier nombre est toujours en -1
    return Math.floor(Math.random() * 21);

}




//role : posé une question
//besoin : rien
//rendre : le nombre que le joueur a mis


function reponseJ() {

    let reponsePrompt = parseInt(prompt("écrivez un nombre entre 1 et 20 s'il vous plaît"))

    //rendre le nombre choisi

    return reponsePrompt;

}




//role :il compare le nombre aléatoire avec la réponse
//besoin : du chiffre aléatoire et de la reponse de l'utilisateur
//rendre : commentaire



//compare nombre aléatoire avec la réponse de l'utilisateur

function compareNombre(nombreOrdi, reponsePrompt) {

    //si la réponse de l'utilisateur est supérieur a 20 le message erreur s'affiche

if(reponsePrompt>20){  //si le nombre aléatoire est plus grand que la reponse alors cela écrit "plus grand"

    alert("erreur")

      //si le nombre aléatoire est plus grand que la reponse alors cela écrit "plus grand"

}if (nombreOrdi > reponsePrompt) {

        alert("plus grand")

        //si le nombre aléatoire est plus petit que la reponse alors cela écrit "plus petit"

    } else if (nombreOrdi < reponsePrompt) {

        alert("plus petit")

        //si le nombre aléatoire est égal que la reponse alors cela écrit "bravo"

    } else{

        alert("Bravo")

    }
}

//role :exécuter le scenario
//besoin :rien
//rendre :rien

function scenario() {

    //variable du chiffre aléatoire

    let nombreOrdi = chiffreAleatoire();

    //variable de la reponse

    let reponsePrompt = reponseJ()

    //variable de la comparaison(toujours mettre quoi comparé)

    let compareReponse = compareNombre(nombreOrdi, reponsePrompt)

}

//appeler la fonction scenario

scenario()
