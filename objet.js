
//exercice 2

let recettes = [
    {
        nom: "poulet rôti au thym et à l'ail",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "1h 15 min",
        nbrPortions: 6,
        ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
    },
    {
        nom: "spaghetti à la bolognaise",
        difficulte: "Moyenne",
        tempPreparation: "20 min",
        tempCuisson: "40 min",
        nbrPortions: 4,
        ingredients: ["spaghetti", "viande hachée", "oignon", "carotte", "tomate concassée", "ail", "huile d'olive", "sel", "poivre"]
    },
    {
        nom: "salade César",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "0 min",
        nbrPortions: 2,
        ingredients: ["laitue romaine", "croûtons", "parmesan râpé", "filet de poulet", "sauce César", "sel", "poivre"]
    }
];

//une boucle qui récupère les recettes 1 par 1
recettes.forEach(recette => {
    //quand il a récupéré une recette, elle écrit en console ses caractéristique
    console.log(`Recette du ${recette.nom} , Difficulté : ${recette.difficulte} , Temps de préparation : ${recette.tempPreparation} , pour ${recette.nbrPortions} personnes,liste des ingrédients ${recette.ingredients} `)
});



//afficher dans la page

/**
 * role : afficher des fiche eleve dans le dom
 * @param {*} recette
 * return : rien car elle affiche
 */
function ficheRecette(recettes) {

    //prendre les recettes un par un 
    recettes.forEach(recette => {
        let ingredientsListe = "";
        recette.ingredients.forEach(ingredient => {
            ingredientsListe += `<li>${ingredient}</li>`

        });
        //apeller ma fonction dont le rôle est d'envoyer dans le DOM
        ajouterAuBody(`
        <div class="bg-blue text-white mb-50 w-30 txt-center">
        <h2>${recette.nom}</h2>
        <p>${recette.difficulte}</p>
        <p>${recette.tempPreparation}</p>
        <p>${recette.tempCuisson}</p>
        <p>${recette.nbrPortions}</p>
        <p>${recette.ingredients}</p>
        </div>
        <ul>
        ${ingredientsListe}
        </ul>

        `)


    });

}
function ajouterAuBody(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}