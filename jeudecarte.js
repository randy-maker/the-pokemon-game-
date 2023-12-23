const prompt = require("prompt-sync")();

/**
 * @function randomCarte
 * Cette function s'occupe des cartes aleatoires du bot
 * @returns 
 */
function randomCarte() {
    let cardTypes = ["Eau", "Feu", "Plante"];
    return cardTypes[Math.floor(Math.random() * cardTypes.length)];
}

/**
 * @function theRound
 * Cette fonction accumule les conditions de victoires , defaites et nuls pendant un round
 * @param {string} yourCard 
 * @param {string} robotCard 
 * @returns string
 */
function theRound(yourCard, robotCard) {
    console.log("You played: " + yourCard);
    console.log("Robot played: " + robotCard);

    if (
        (yourCard == "Eau" && robotCard == "Feu") ||
        (yourCard == "Feu" && robotCard == "Plante") ||
        (yourCard == "Plante" && robotCard == "Eau")
    ) {
        console.log("You win this round!");
        return "win";
    } else if (yourCard === robotCard) {
        console.log("It's a draw!");
        return "tie";
    } else {
        console.log("The opponent wins this round!");
        return "lose";
    }
}

/**
 * @function play
 * Cette fonction demarre le jeu en entier 
 */
function play() {


    // Demander le pseudo du joueur
    let playerName = prompt("Enter your username: ");
    console.log("                                                               ._____________________________________________________________.         ");
    console.log("                                                                                                                                       ");
    console.log("                                                                        Welcome " + playerName + " , be ready for the adventure    !             ");
    console.log("                                                                _____________________________________________________________          ");
    console.log("");
    console.log("");

    const yourCards = ["Eau", "Feu", "Plante"];
    let monScore = 0;
    let adversaire = 0;

    for (let index = 1; index <= 3; index++) {
        console.log("                                                                               .____________________________.                    ");
        console.log("                                                                               |                            |                    ");
        console.log("                                                                               | --------- Round " + index + " -------- |        ");
        console.log("                                                                               |____________________________|                    ");


        // Le joueur choisit une carte
        console.log("");
        console.log("                                                         .__________________________________________________________________________.           ");
        console.log("                                                         |                   ******Your available cards******                       |           ");
        console.log("                                                         |                                                                          |           ");
        console.log("                                                         |    [ W A T E R  ]      -     [ F I R E  ]     -     [ V E G E T A L ]    |           ");
        console.log("                                                         |__________________________________________________________________________|           ");
        console.log("");
        console.log("writte :\n *'Feu' to choose fire\n *'Eau' to choose water\n *'Plante' to choose vegetal\n")
        let playerChoice = prompt("Choose a card: "); 

        // Vérifier si le choix du joueur est valide
        if (!yourCards.includes(playerChoice)) {
            console.log("Invalid choice. Please choose from your available cards.");
            index--; // retourne la boucle a l'index de la valeur avant l'erreur
            continue;
        }

        // choix random
        let robotChoice = randomCarte();

        // Jouer le tour
        let result = theRound(playerChoice, robotChoice);

        // Mettre à jour les scores
        if (result == "win") {
            monScore++;
        } else if (result == "lose") {
            adversaire++;
        }
    }

    // Afficher le résultat final
    console.log('                                                                                 .----- Final Result -----.');
    console.log("                                                                                 |                        |");
    console.log("                                                                                   " + "   " + playerName + "'s score: " + monScore + "     ");
    console.log("                                                                                      Robot's score: " + adversaire);
    console.log("                                                                                 |________________________|");
    console.log("");

    if (monScore > adversaire) { 
        console.log("                                                                              Congratulations " + playerName + "!  Y O U  W I N !\n\n\n\n\n");
        menu()
    } else if (monScore < adversaire) {
        console.log("                                                                      The opponent wins the game. Better luck next time!\n\n\n\n\n");
        menu();
    } else {
        console.log("                                                                                    It's a draw.\n\n\n\n");
        menu();

        // Demander au joueur s'il veut retenter sa chance
        let retry = prompt("Do you want to retry? (yes/no): ");
        if (retry == "yes") {
            play(); // Relancer le jeu
        } else {
            console.log("Thanks for playing. Game over!");
            menu();
        }
    }
}

/**
 * @function menu
 * Cette fonction affiche le menu et s'occupe des differents demande du joueur jusqu'a executer le jeu
 */
function menu() {
    console.log("");
    console.log("");
    console.log("                                                ._______.   ._________.   .__    .__.  ._______.   ,___       ___.   ._________.  .___.     ___.      ");
    console.log("                                                |  ___  |   |   ___   |   |  |  /  /   |  _____|   |   |     |   |   |   ___   |  |   |    |   |      ");
    console.log("                                                | |___|  |  |  |   |  |   |  |_/  /    |  |____.   |    |   |    |   |  |   |  |  |    |   |   |      ");
    console.log("                                                |  _____|   |  |   |  |   |   _   |    |  _____|   |     |_|     |   |  |   |  |  |     |  |   |      ");
    console.log("                                                |  |        |  |___|  |   |  | |  |_,  |  |_____.  |   |  _  |   |   |  |___|  |  |   |  |_|   |      ");
    console.log("                                                |__|        |_________|   |__| |____|  |________|  |___|     |___|   |_________|  |___|    ____|      ");
    console.log("");
    console.log("");

    console.log("                                                            |   W E L C O M E   T O  T H E   W O R L D   O F   P O K E M O N   | ");
    console.log("");
    console.log("");
    console.log();
    console.log("                                                                                    .__________________.             ");
    console.log("                                                                                    |                  |             ");
    console.log("                                                                                    | <---->HOME<----> |             ");
    console.log("                                                                                    |__________________|             ");
    console.log("                                                                                    .__________________.             ");
    console.log("                                                                                    |                  |             ");
    console.log("                                                                                    |    1. Play       |             ");
    console.log("                                                                                    |                  |             ");
    console.log("                                                                                    |    2. Tutorial   |             ");
    console.log("                                                                                    |                  |             ");
    console.log("                                                                                    |    3. Credit     |             ");
    console.log("                                                                                    |                  |             ");
    console.log("                                                                                    |    4. Exit       |             ");
    console.log("                                                                                    |__________________|             ");

    let demande = prompt("Select  mode : ")
    console.log();
    if (demande == 1) {
        play();
    }
    else if (demande == 2) {
        console.log("");
        console.log("");
        console.log("");
        console.log("                                                   Pendant 3 manches, le joueur devra affronter un robot dans une bataille de cartes             ")
        console.log("                                                   Le joueur choisira une des cartes qu'il a en sa possession et la montrera au robot            ")
        console.log("                                                   qui en retour montrera une des ses cartes au hasard.");
        console.log("                                                   Le joueur et le robot auront chacun 3 cartes de différents types durant une manche            ");
        console.log("                                                   Le joueur et le robot ne pourront utiliser qu'une seule carte durant une manche               ");
        console.log("                                                   mais pourront réutiliser la même carte pour la prochaine manche.                              ");
        console.log("                                                   A la fin de la troisième manche, le résultat final sera affiché pour annoncer qui à gagner        ");
        console.log("");
        console.log("                                                                                  ----type de cartes----");
        console.log("");
        console.log("                                                                                   [eau , feu , plante]" );
        console.log();
        console.log("                                                                                   # eau bat feu");
        console.log("                                                                                   # feu bat plante");
        console.log("                                                                                   # plante bat eau");
        console.log("");
        console.log("");
        console.log("");
        menu()
    }
    else if (demande == 3) {
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log("                                                                               ---- C R E D I T S ----");
        console.log("");
        console.log("                                                           Design (MENU , HOME ,...) : STD23021 : HERY NY AINA Mandimbisao Randy");
        console.log("");
        console.log("                                                           corpse of the game : SDT23021 :HERY NY AINA Mandimbisao Randy");
        console.log("                                                                              & STD23077 :LALAINARISON Elodys Georges ");
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        menu();
    } else if (demande == 4) {
        console.log("");
        console.log("");
        console.log("");
        console.log("                                                                        |   T h a n k s  f o r  p l a y i n g    ! |  ");
        console.log("");
        console.log("");
        console.log("");
    }
    else{
        menu()}
}
menu();