let barre = document.querySelector("#icon-barre");
let liste = document.getElementById('liste');
let sport = document.querySelector('.sport');
let histoire = document.querySelector('.histoire');
let société = document.querySelector('.société');
let autre = document.querySelector(".autre");
let accueil = document.querySelector(".accueil");

barre.addEventListener("click",function () {
	liste.style.height="250px";
    sport.style.display = "block";
    histoire.style.display = "block";
    autre.style.display = "block";
    société.style.display = "block";
    accueil.style.display = "block";
    liste.classList.toggle("one");

    if (liste.classList != "one") {
    liste.style.height="0px";	
    sport.style.display= "none";	
    histoire.style.display = "none";
    autre.style.display = "none";
    société.style.display = "none";
    accueil.style.display = "none";
   }   
})