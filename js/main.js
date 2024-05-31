document.querySelector('.get-cocktail').addEventListener('click', getDrink);
document.querySelector('.surprise-me').addEventListener('click', getRandomDrink);

function getDrink() {
    let drink = document.querySelector('input').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
        if (data.drinks) {
            displayDrink(data.drinks[0]);
        } else {
            displayError();
        }
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
}

function getRandomDrink() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        displayDrink(data.drinks[0]);
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
}

function displayDrink(drink) {
    document.querySelector('h2').innerText = drink.strDrink;
    document.querySelector('img').src = drink.strDrinkThumb;
    document.querySelector('h3').innerText = drink.strInstructions;
}

function displayError() {
    document.querySelector('h2').innerText = "No drink found";
    document.querySelector('img').src = "";
    document.querySelector('h3').innerText = "";
}


