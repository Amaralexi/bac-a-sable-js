/*
let fruits = ["orange", "tomate", "pomme", "BANANA", "poire", "pêche"]

console.log(`le premier fruit est ${fruits [0]} le dernier fruit est ${fruits[fruits.length-1]}`)

//met l'élément a la fin de la liste

fruits.push("fraise")
console.log(fruits)

//met l'élément au debut de la liste

fruits.pop();
console.log(fruits)

//supprime le premier element d'une liste

fruits.shift();
console.log();

//supprime un truc j'en sais rien on lutilisera jamais 

delete fruits[]
console.log(fruits)

//pour connaitre toute la liste 1 par 1

array.forEach(element => {
    console.log()
});

//nouvel boucle pour tableau

//array= au nom de la liste
fruits.forEach(fruit => {
    console.log(fruit)
});

//role:calculer la moyenne
//besoin:rien
//rendre:le calcul la moynenne

//crée une fonction
let tableauNote = [12, 9, 13, 15, 17]

function calculMoyenne(tableauNote) {
    let somme = 0;


    //récupéré les notes une par une dans le tableau
    tableauNote.forEach(note => {
        //quand il en a une il 'ladditionne dans une variable ou boite(la varibale vaux rien a l'origine)
        somme = somme + note;
    });
    //on divise la somme obtenu par le nombre de valeurs dans le tableau c'est a dire la longueur du tableau
    let moyenne = somme / tableauNote.length;
    //retourner le résultat
    return moyenne;
}


function afficheMoyenne(moyenne) {

    console.log(`la moyenne de l'élève est : ${moyenne}`)
}
//toujours mettre le debut dans une variable let puis mettre le nom de la variable dans l'afficher
let moyenneEleve = calculMoyenne(tableauNote)
afficheMoyenne(moyenneEleve)




//exercice 1 panier fruit

//role: compter les nbr de chaques fruits
//besoin : le tableau de fruits
//rendre: nombre total de chaque fruits

// mon tableau représentant mon panier de fruits 
let fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes",
    "pommes", "poires", "cerises"];


function rangeFruits(fruits) {

let cerises=0;
let pommes=0;
let poires=0;
let bananes=0;
let inconnu=0

    fruits.forEach(fruit => {
        if (fruit === "pommes") {
            pommes++
        } else if (fruit === "cerises") {
            cerises++
        } else if (fruit === "poires") {
            poires++
        } else if (fruit === "bananes") {
            bananes++
        }else{
            inconnu++
        }


        
    });
    return`
        il y a ${pommes}pommes,
        il y a ${cerises}cerises,
        il y a ${poires}poires,
        il y a ${bananes}bananes
        `
}

function afficherDansPages(afficher){
document.querySelector("body").innerHTML +=`<p>${afficher}<p>`

}

let phraseAAfficher=compteFruits(fruits)
afficherPages(phraseAAfficher)







//exercice 2 code cesar

//role:encoder un message
//besoin:un mot
//rendre:mot chiffré

function codeCesar(motAChiffrer) {
    //un alphabet
const alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let motEncode = ""
    //récupérer les lettres du mot une par une
    for(let i=0; i< motAChiffrer.length; i++){
//on stocke le caractère a la position i du mot
        let lettreActuelle = motAencoder.charAt(i)

        console.log(lettreActuelle)
    //quand il aura récupérer une lettre il va chercher la position de la lettre dans l'alphabet stock une variable posLettreActuelle
let posLettreActuelle = alphabet.indexOf()
    
    //va chercher la lettre à la position suivante
let lettreEncode = alphabet[posLettreActuelle + 1]
    
    //stock dans une variable pour recomposer le mot encoder
motEncode += lettreEncode
    }
    //return le mot encodé
    return motEncode
}

//role: afficher le mot encoder
//besoin:mot encoder
//rendre:rien

function AfficheDansBody(trucAAfficher){

document.querySelector("body").innerHTML += `<p>${trucAAfficher}</p>`

}

function scenario(motAChiffrer){
let motAencoder = codeCesar(motAChiffrer)
AfficheDansBody(motAencoder)
}




//exercice 3 casino

//role: choisir 3 emojis
//besoin: tableau avec 3 emojis
//rendre: 1 émoji aléatoire

function emojiAleatoire() {

    //mettre les emojis dans une liste
    let emoji = ["😶‍🌫️", "🤯", "💀"]
    //mettre 3 fois 
    let nombre = Math.floor(Math.random() * 3);


    return emoji[nombre]

}

//role :choisir aléatoirement parmis 3 emoji
//besoin :rien
//rendre : commentaire

function casino() {
    //mettre emojiAleatoire dans 3 variable pour avoir 3 résultat
    let tirage1 = emojiAleatoire()
    let tirage2 = emojiAleatoire()
    let tirage3 = emojiAleatoire()
    //si un emoji est similaire au premier et le troisième aussi alors une alert ecrit dedans jackpot
    if (tirage1 === tirage2 && tirage3) {
        alert("JACKPOT!!!!!!!🤯🤯🤯")

        //sinon
    } else {
        alert("remet 10 $ et plus vite que ça.💀😶‍🌫️🤯")
    }

}

emojiAleatoire()
casino()
*/