function Valide(button) {
    return button.innerHTML.length == 0;
  }
  
  function symbol(btn, symbole) {
    btn.innerHTML = symbole;
  }
  function gagnant(pions, joueurs, tour) {
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[1].innerHTML == joueurs[tour] &&
      pions[2].innerHTML == joueurs[tour]
    ) {
      pions[0].style.backgroundColor = "#2fca85";
      pions[1].style.backgroundColor = "#2fca85";
      pions[2].style.backgroundColor = "#2fca85";
      return true;
    }
  
    if (
      pions[3].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour]
    ) {
      pions[3].style.backgroundColor = "#2fca85";
      pions[4].style.backgroundColor = "#2fca85";
      pions[5].style.backgroundColor = "#2fca85";
      return true;
    }
  
    if (
      pions[6].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) {
      pions[6].style.backgroundColor = "#2fca85";
      pions[7].style.backgroundColor = "#2fca85";
      pions[8].style.backgroundColor = "#2fca85";
      return true;
    }
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[3].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) {
      pions[0].style.backgroundColor = "#2fca85";
      pions[3].style.backgroundColor = "#2fca85";
      pions[6].style.backgroundColor = "#2fca85";
      return true;
    }
  
    if (
      pions[1].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour]
    ) {
      pions[1].style.backgroundColor = "#2fca85";
      pions[4].style.backgroundColor = "#2fca85";
      pions[7].style.backgroundColor = "#2fca85";
      return true;
    }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) {
      pions[2].style.backgroundColor = "#2fca85";
      pions[5].style.backgroundColor = "#2fca85";
      pions[8].style.backgroundColor = "#2fca85";
      return true;
    }
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) {
      pions[0].style.backgroundColor = "#2fca85";
      pions[4].style.backgroundColor = "#2fca85";
      pions[8].style.backgroundColor = "#2fca85";
      return true;
    }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) {
      pions[2].style.backgroundColor = "#2fca85";
      pions[4].style.backgroundColor = "#2fca85";
      pions[6].style.backgroundColor = "#2fca85";
      return true;
    }
  }
  function matchNul(pions) {
    for (var i = 0, len = pions.length; i < len; i++) {
      if (pions[i].innerHTML.length == 0) return false;
    }
  
    return true;
  }


  
  if (matchNul(pions)) {
    afficheur.sendMessage(
      'Match Nul ! <br/> <a href="morpion.html">Rejouer</a>'
    );
    return ;
  }

  