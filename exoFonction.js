
//exo 1
//role : faire la moyenne des notes
//parametre : 12.50 17 14.50 19
//return : la moyenne

function calculMoyenne(a, b, c, d){

    return (a+b+c+d)/4;
}

console.log(`la moyenne de l'élève est: $calculMoyenne(12,13,18,15`)

//exo 2
//role : baissé le nombre donné
//parametre : le nombre soustrait
//return : le nombre donné

function retirePomme (a){
    return 4-a
}
let resultat = (retirePomme-2);

console.log(resultat);


//role : decremente le stock de pomme
//parametre : aucun
//return : aucun
let stockDePom = 4

function decrement (a){
    stockDePom --
}

//exo 3
//role : montre la dernière lettre
//parametre :
// return : rien

function affiche(mot){

console.log(mot[mot.length-1])

}
affiche("chihuahua")

//exo 4
//role : remplacer un produit
//besoin : la liste (thé, café, tisane, bubble tea) le nouveau produit
//return : rien

function nouvelleOffre(nouveauProduit, listeInitiale){

console.log(listeInitiale.replace("bubble tea", nouveauProduit))
}

nouvelleOffre("chihuahua", "café, bubble tea, tisane")




//petit exercice
//role : Ajouter des balises sur ma page html
//besoin : la balise à ajouter
//return : rien

function ajouterBalise(balise){
    document.querySelector("body").innerHTML+= balise
}

ajouterBalise("<h1>Bonjour les petits n'enfants</h1>")
ajouterBalise("<p>je suis trop nul en js</p>")



//autre exercice
//role : afficher l'addition de deux chiffres
//besoin : les chiffres a additionner
//return : rien
function afficherAddition(a, b){
    ajouterBalise(`<p> ${a+b} </p>`)
}
afficherAddition(7,5)

//role : afficher prenom dans le body
//besoin : prenom
//rendre : rien
function afficherPrénom(appellation){
    ajouterBalise(`<p> ${appellation}</p>`)
}
afficherPrénom("Alexis")


//exo 5
//role :afficher si l'adresse mail contient une @ ou non
//besoin : l'adresse mail a vérifier
//rendre : rien car elle affiche

function verifMail(mailAverif){
    console.log(mailAverif.includes("@"))
}
verifMail("contact@gmail.com")

//exo 6
//role :afficher le resultat d'une addition
//besoin :des chiffre/nombre
//rendre :rien car elle s'affiche

function addition(a , b){
return a+b
}
let fin = addition(17,4)
console.log(fin)

//exo 7
//role :poser une question
//besoin :d'une question
//rendre :réponse de l'utilisateur

function question(message){
   return prompt (message)
}
let reponse = question("comment va tu?")

console.log(reponse)

//exo 8
//role :convertir des euros en dollars
//besoin :un montant en euro et le taux de change
//rendre :prix converti

function conv(prix , taux){
return prix * taux;
}
let converti = conv(3, 1.17);
console.log(converti)


//role : demander un prix et un taux de change a l'utilisateur
//besoin : rien le mec donne
//rendre : prix convertit
function convertisseur(){
    //demande le prix a convertir
let prix = parseFloat(prompt("quel prix a convertir?"))
    //demande le taux
let taux = parseFloat(prompt("quel taux?"))
    //convertit
return prix * taux
    //rendre le résultat
    
}
let prixConverti=convertisseur()
alert(`le prix converti est de ${prixConverti}dollars`)

//role : calculer une moyenne a partir des notes donné
//besoin :
//rendre :moyenne

function calculNote(){

francais = parseFloat(prompt("note de francais"))

math = parseFloat(prompt("note de math"))

histoire =parseFloat( prompt("note d'histoire"))

svt = parseFloat(prompt("note d'SVT"))

return (francais + math + histoire + svt) /4
}
let noteCalcul=calculNote()
alert(`la moyenne générale de l'élève est de ${noteCalcul}`)
