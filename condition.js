/*
//exo 1
console.log(11 === 10)

//exo 2
console.log("hello" !== "hello")

//exo 3
console.log(8 > 12)


//si b = b -> bien joué
//sinon dommage
let b = 5;

let c = 6;

if (b === b) {
    console.log("bien joué !");
}
else {
    console.log("dommage");
}

if (b === c) {
    console.log("c'est pareil");
} else if (b > c) {
    console.log("b est superieur a c");
} else {
    console.log("b est inferieur a c");
}

let connect = true;

if (connect === true) {
    console.log("l'utilisateur est connecté");
} else {
    console.log("l'utilisateur est pas connecté")
}

//exo 4
let nbr = 17
if (nbr % 2 === 0) {
    console.log("nombre pair !")
} else {
    console.log("nombre impairs !")
}

//exo 5
let météo
let soleil
let pluie
let neige

if (météo === soleil) {
    console.log("prend une casquette")
} else if (météo === pluie) {
    console.log("prend un parapluie")
} else if (météo === neige) {
    console.log("met des bottes")
}
météo = soleil

//exo 6
let âge = 14


if (âge < 12) {
    console.log("enfant")

} else if (âge <= 18) {

    console.log("adolescent")

} else {
    console.log("adulte")
}

//exo 7
let a = 30
let d = 30
let e = 30

if (a == d & d == a & a == e) {
    console.log("triangle équilatérale")
} else if (a != e & a != d & d != e) {
    console.log("triangle quelconque")
} else {
    console.log("triangle isocèle")
}

/*exo 8
Créez une fonction qui détermine si une personne est éligible à une réduction spéciale dans un magasin en fonction des critères suivants :

- Elle doit avoir **plus de 18 ans**.
- Elle doit être membre du programme de fidélité **OU** avoir effectué un achat supérieur à **100 euros**.
- Si toutes les conditions sont réunies, retournez : `"Réduction accordée"`. Sinon, retournez `"Réduction refusée"`

dire qu'elle doit avoir plus de 18 ans ou egale et elle doit être membre ou ai fait un achat a 100 euro puis faire une
return si tout est correcte sinon donc juste else refuser .*/

// role : determine si une personne est élligible a une réduction
//besoin : age number membre boolean achat number
//rendre : réduction accorder ou reduction refuser

function reduction(age, membre, achat) {
    //si la personne a plus de 18 ans:

    if (age > 18) {
        //si la personne est membre ou a fait plus de 100 euro d'achat
        if (membre === true || achat > 100) {
            //reduction accordé
            return "réduction accordé"
        } else {
            //sinon
            //  reduction refusé
            return "réduction refusé"
        }
    }
    else {
        //sinon
        //reduction refusé
        return "réduction refusé"
    }
}

let ticket = reduction(19, true, 80)

console.log(ticket)

//exo 1 deuxième partie
//role : affiché la couleur du feu tricolore
//besoin: non
//rendre: la reponse de l'utilisateur (rouge,vert,orange ou quelque chose d'autres)


function tricolore() {
    let feuTri = prompt("qu'elle est la couleur du feu tricolore ?")
    return feuTri;

    if (feuTri == "vert") {

        console.log("passe")

    } else if (feuTri == "orange") {

        console.log("fonce !")

    } else if (feuTri == "rouge") {

        console.log("écrase le")

    } else {

        console.log("tu te moque de moi ?")
    }

}
tricolore()
*/

//exo 2 deuxième partie
//role : faire une moyenne générale et écrire un commentaire en fonction de celle-ci
//besoin : des notes et des commentaires
//rendre : la moyenne generale

//fonction de calcul

function calculMoyenne(a, b, c, d) {

    return (a + b + c + d) / 4;
}
console.log(`la moyenne de l'élève est: ${calculMoyenne(10,10,5,15)}`)


//fonction de note

function comment(note) {
    if (note <= 10) {
        console.log("au moins tu étaits présent")

    } else if (note >= 10 && note <= 13) {
        console.log("poursuis tes rêves")

    } else if (note >= 13 && note <= 15) {
        console.log("Bon travail")

    } else if (note >= 15 && note <= 17) {
        console.log("bravo bravo")

    } else if (note >= 18 && note <= 20) {
        console.log("wow félicitation !")
    }

}
let moyenneGeneral=calculMoyenne(10,10,5,15)
comment(moyenneGeneral)
