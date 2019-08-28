const buttons = document.querySelectorAll('button');
let scoreJoueur = 0;
let scoreRobot= 0;
let tour= 0;

for (let i=0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    const joueur = buttons[i].innerHTML;
    // console.log(joueur); correspond au clique du joueur; dans la console apparait le bouton cliqué
    const robot = buttons[Math.floor(Math.random()* buttons.length)].innerHTML;
    console.log(`Joueur: ${joueur} VS Robot : ${robot}`);
    // Affiche dans la console "Joueur: Ciseaux VS Robot : Feuille"
    let resultat ="";


    if(joueur === robot){
      resultat = "Egalité!";
        }
    else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre")
    || (joueur === "Ciseaux" && robot === "Feuille")) {
      resultat = "Gagné!"
      scoreJoueur= scoreJoueur + 1;
    }
    else if ((joueur === "Puit" && robot === "Ciseaux") || (joueur === "Puit" && robot === "Pierre")){
      resultat = "Gagné avec la technique secrète!"
    scoreJoueur = scoreJoueur + 1;
    }
    else {
      resultat = "Perdu!"
      scoreRobot = scoreRobot + 1;
    }

    document.querySelector(".resultat").innerHTML = `
    <span style="color: red">You</span> : ${joueur} -
    <span style="color: red">The Machine</span> : ${robot} </br> </br>
    ${resultat} </br> </br>
    `;

    document.querySelector(".score").innerHTML = `
    <span>Score :</span> You : <span id="result">${scoreJoueur}</span>  /  The Machine : <span id="ordi">${scoreRobot}</span> `;

color();
function color(){
    if(scoreJoueur === scoreRobot){
      document.getElementById('result').style.color = 'blue';
      document.getElementById('ordi').style.color = 'blue';
    }
    else if (scoreJoueur > scoreRobot) {
        document.getElementById('result').style.color = 'green';
        document.getElementById('ordi').style.color = 'red';
    }
    else {
        document.getElementById('result').style.color = 'red';
        document.getElementById('ordi').style.color = 'green';
    }
  }

  });
}
