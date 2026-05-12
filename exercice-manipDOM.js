

//exercice 1
document.querySelector("h1").classList.add("bg-blue")
document.querySelector("h1").style.fontSize= "64px"

//exercice 2
//role cacher et afficher
//besoin de l'id
//rend rien car elle affiche

function interrupteur(id){
document.querySelector(id).classList.toggle("display-none")
}


//exercice 3 partie 1
//role remplir une case
//la case cliqué
//

function remplirCase(caseClic){

caseClic.classList.add("bg-blue")
}


document.querySelectorAll(".casecocher").addEventListener("click", function(){
    console.log(boite)
})



//exercice 4
//role : compter le nombre de clics sur un bouton
//paramètre 
//rendre rien car elle affiche

let AuClique=0

function clique(){
document.querySelector(".bouton").addEventListener("click", function(){


})
   
}