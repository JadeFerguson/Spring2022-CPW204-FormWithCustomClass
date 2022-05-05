class VideoGame {
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// test code
/*let myGame = new VideoGame();
myGame.title = "Final Fantasy VII";
myGame.rating = "E";
myGame.isOnlineOnly = true; 
*/

window.onload = function() {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame() {
    console.log("Add video game was called");

    if(isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

function getById(id:string) {
    return document.getElementById(id);
}

/**
 * 
 * Gets all game data from the form and returns it in a VideoGame object 
 */
function getVideoGame():VideoGame {
    let game = new VideoGame();

    // Populate with data from form
    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLInputElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    
    return game;
}

function displayGame(myGame:VideoGame):void {
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "";
    if(myGame.isDigitalOnly) {
        gameMediumDisplay = "This is a digital only game.";
    }

    else {
        gameMediumDisplay = "You can come buy a physical copy!";
    }
    /*gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". It costs " +
                myGame.price + ". It is " + notDigitalDisplay + " digital only."; */

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs ${myGame.price.toFixed(2)}. ${gameMediumDisplay}`;

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(gameHeading);

    displayDiv.appendChild(gameInfo);
}

// ADD VALIDATION CODE
function isAllDataValid() {
    return true;
}