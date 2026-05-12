/*
//trois manière de selectionné des éléments dans ma page html
//le body
document.querySelector("body")

//le premier element ayant la classe "maclasse"
document.querySelector(".maclasse")

//l'élément ayant l'id boite
document.getElementById ("boite")

//tout les element ayant une classe specifique
document.querySelectorAll("boite")




//séléctionner le body et ajouter une div
document.querySelector("body").innerHTML += `<div> 

<p>lorem etr toit cz</p>

</div>`

document.querySelector("p").classList.add("blue")

let paragrapheAmettreEnBleu = document.querySelector("p").classList.add("blue")

paragrapheAmettreEnBleu.classList.add("")
//pour enlever
paragrapheAmettreEnBleu.classList.remove("bg-blue")
//enelever si il y est mettre si il y est pas
paragrapheAmettreEnBleu.classList.toggle("bg-blue")
*/


document.querySelector("bouton")

let bouton = document.querySelector("bouton")

bouton.addEventListener("clic", creerunP)


function creerunP(){
   document.querySelector("#grosseboite").innerHTML += `<p>eokoprkgvotrkvoprkbg</p>`
}

