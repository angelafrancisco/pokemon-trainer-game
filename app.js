/////// CHOOSE YOUR OWN ADVENTURE GAME: POKEMON TRAINER! ///////////
const prompt = require('prompt-sync')();

/////// VARIABLES
let pokemonHealth = 10;
let pokemonFriendship = 0;
let pokemonSkills = [];

/////// STARTER POKEMON ARRAY
const pokemonOptions = [
    // index 0:  0   -  1
        ["Pikachu", "electric"],
    // index 1:  0   -  1
        ["Charmander", "fire"],
    // index 2:  0   -  1
        ["Squirtle", "water"]
];

/////// POKEMON MOVES ARRAY
const movesPikachu = ["Quick Attack", "Thunder Shock"];
const movesCharmander = ["Scratch", "Ember"];
const movesSquirtle =["Tail Whip", "Water Gun"];


// 1. GAME STARTS. PLAYER ENTERS NAME
console.log(`\nWelcome new Pokemon Trainer!!`)
    const userName = prompt(`>> What name would you like to use? Type name here and press ENTER ... `);
    console.log(`Nice to meet you, Trainer ${userName}!`);

// 2. PLAYER CHOOSES A POKEMON - 3 CHOICES
console.log(`\nTime to pick your starter Pokemon!`)
    starterPokemon()

    //////// FUNCTION TO CHOOSE 1 STARTER POKEMON
    function starterPokemon(){
        const starterPokemonChoice = prompt(`>> Choose one: [1] ${pokemonOptions[0][0]}, [2] ${pokemonOptions[1][0]}, or [3] ${pokemonOptions[2][0]} ... `);
        // OPTION FOR PIKACHU, ELECTRIC
        if(starterPokemonChoice === "1"){
            currentPokemon = pokemonOptions[0][0];
            console.log(`\nYou chose ${currentPokemon}!`);
            console.log(`Pokedex data says... ${pokemonOptions[0][0]} is an ${pokemonOptions[0][1]} type Pokemon! Cute!`);
        // OPTION FOR CHARMANDER, FIRE
        }else if(starterPokemonChoice === "2"){
            currentPokemon = pokemonOptions[1][0]
            console.log(`\nYou chose ${currentPokemon}!`);
            console.log(`Pokedex data says... ${pokemonOptions[1][0]} is a ${pokemonOptions[1][1]} type Pokemon! So cool!`);
        // OPTION FOR SQUIRTLE, WATER
        }else if(starterPokemonChoice === "3"){
            currentPokemon = pokemonOptions[2][0]
            console.log(`\nYou chose ${currentPokemon}!`);
            console.log(`Pokedex data says... ${pokemonOptions[2][0]} is a ${pokemonOptions[2][1]} type Pokemon! Tubular!`);
        }
    }


// 3. PLAYER TEACHES POKEMON NEW SKILL - 2 CHOICES - ADDS ITEMS TO pokemonSkills ARRAY
console.log(`\nLet's teach ${currentPokemon} a new skill!`)
    pokemonLearnMoves()

    //////// FUNCTION FOR TEACHING POKEMON SKILLS
    function pokemonLearnMoves(){
        if(currentPokemon === pokemonOptions[0][0]){
            const pokemonMoves = prompt(`>> Which skill would you like to learn? [1] ${movesPikachu[0]} or [2] ${movesPikachu[1]} ... `);
            if(pokemonMoves === "1"){
                pokemonSkills.push(movesPikachu[0]);
                pokemonHealth -= 10;
                pokemonFriendship += 5;
                console.log(`\n${currentPokemon} learned ${movesPikachu[0]}! Nice!`);
                console.log(`${currentPokemon} used up 10 health points but increased friendship by +5!`);
            }else if(pokemonMoves === "2"){
                pokemonSkills.push(movesPikachu[1]);
                pokemonHealth -= 10;
                pokemonFriendship += 5;
                console.log(`\n${currentPokemon} learned ${movesPikachu[1]}! Awesome!`);
                console.log(`${currentPokemon} used up 10 health points but increased friendship by +5!`);
            }
        }else if(currentPokemon === pokemonOptions[1][0]){
            const pokemonMoves = prompt(`>> Which skill would you like to learn? [1] ${movesCharmander[0]} or [2] ${movesCharmander[1]} ... `);
            if(pokemonMoves === "1"){
                pokemonSkills.push(movesCharmander[0]);
                pokemonHealth -= 10;
                pokemonFriendship += 5;
                console.log(`\n${currentPokemon} learned ${movesCharmander[0]}! Nice!`);
                console.log(`${currentPokemon} used up 10 health points but increased friendship by +5!`);
            }else if(pokemonMoves === "2"){
                pokemonSkills.push(movesCharmander[1]);
                pokemonHealth -= 10;
                pokemonFriendship += 5;
                console.log(`\n${currentPokemon} learned ${movesCharmander[1]}! Awesome!`);
                console.log(`${currentPokemon} used up 10 health points but increased friendship by +5!`);
            }
        }else if(currentPokemon === pokemonOptions[2][0]){
            const pokemonMoves = prompt(`>> Which skill would you like to learn? [1] ${movesSquirtle[0]} or [2] ${movesSquirtle[1]} ... `);
            if(pokemonMoves === "1"){
                pokemonSkills.push(movesSquirtle[0]);
                pokemonHealth -= 10;
                pokemonFriendship += 5;
                console.log(`\n${currentPokemon} learned ${movesSquirtle[0]}! Nice!`);
                console.log(`${currentPokemon} used up 10 health points but increased friendship by +5!`);
            }else if(pokemonMoves === "2"){
                pokemonSkills.push(movesSquirtle[1]);
                pokemonHealth -= 10;
                pokemonFriendship += 5;
                console.log(`\n${currentPokemon} learned ${movesSquirtle[1]}! Awesome!`);
                console.log(`${currentPokemon} used up 10 health points but increased friendship by +5!`);
            }
        }
    }


// 4. PLAYER CHECKS POKEMON STATS - 4 CHOICES (pokemonHealth, pokemonFriendship, pokemonSkills, or ALL)
console.log(`\nWow! Now that ${currentPokemon} learned a new skill, let's check on their current stats...`)
    checkPokemonStats()

////// FUNCTION FOR CHECKING CURRENT POKEMON STATS
    function checkPokemonStats(){
        const checkStats = prompt(`>> Choose one: [S] skills, [F] friendship, [H] health, [A] all stats or [E] exit ... `).toUpperCase();
        // OPTION FOR SKILLS
        if(checkStats === "S"){
            console.log(`\n${currentPokemon} has learned ${pokemonSkills} skill(s).`);
        // OPTION FOR FRIENDSHIP
        }else if(checkStats === "F"){
            console.log(`\n${currentPokemon} has ${pokemonFriendship} friendship points.`);
            if(pokemonFriendship < 0){
                console.log(`\nYIKES... Are you sure you wanna be a Pokemon Trainer???`)
            }
        // OPTION FOR HEALTH
        }else if(checkStats === "H"){
            console.log(`\n${currentPokemon} has ${pokemonHealth} health points.`);
            if(pokemonHealth <= 10){
                console.log(`\nOh no... it looks like ${currentPokemon} is hungry.`)
            }
        // OPTION FOR ALL STATS
        }else if(checkStats === "A"){
            console.log(`\n${currentPokemon} has learned ${pokemonSkills} skill(s).`);
            console.log(`${currentPokemon} has ${pokemonFriendship} friendship points.`);
            console.log(`${currentPokemon} has ${pokemonHealth} health points.`);
            if(pokemonFriendship < 0){
                console.log(`\nYIKES... Are you sure you wanna be a Pokemon Trainer?`)
            }
            if(pokemonHealth <= 10){
                console.log(`Oh no... it looks like ${currentPokemon} is hungry.`)
            }
        // OPTION FOR EXIT
        }else if(checkStats === "E"){
            console.log(`\nWow! Look how far you've come, Trainer ${userName}!`);
    }
}


// 5. BONUS: PLAYER FEEDS POKEMON - 3 CHOICES
console.log(`\nHey what's that over there?! You found some food nearby!`)
    // FOOD WILL INCREASE/DECREASE pokemonHealth AND pokemonFriendship
    feedPokemon()

    //////// FUNCTION FOR FEEDING POKEMON
    function feedPokemon(){
        const feedPokemonChoice = prompt(`>> Choose one: [A] apple slices, [B] berries, or [C] candy wrapper ... `).toUpperCase();
        // OPTION FOR APPLE SLICES
        if(feedPokemonChoice === "A"){
            pokemonHealth += 10;
            pokemonFriendship += 5;
            console.log(`\nYum! Apple slices are a great snack.`);
            console.log(`${currentPokemon}'s health increased by +10!`);
            console.log(`Your friendship with ${currentPokemon} increased by +5!`);
        // OPTION FOR BERRIES
        }else if(feedPokemonChoice === "B"){
            pokemonHealth += 50;
            pokemonFriendship += 20;
            console.log(`\nDelicious! Berries are a main staple for Pokemon diets.`);
            console.log(`${currentPokemon}'s health increased by +50!`);
            console.log(`AWW! ${currentPokemon} wants to be your BFF! Your friendship increased by +20 <3`);
        // OPTION FOR CANDY WRAPPER
        }else if(feedPokemonChoice === "C"){
            pokemonHealth -= 75;
            pokemonFriendship -= 10;
            console.log(`\nWhat?! That's garbage! Are you trying to kill ${currentPokemon}????`);
            console.log(`${currentPokemon}'s health DECREASED by -75!`);
            console.log(`Yikes! I don't think that tasted good. Watch out, ${currentPokemon} might just eat you instead. Friendship went down by -10`);
        }
    }


// 6. PLAYER CAN CHECK STATS AGAIN OR EXIT
console.log(`\nWould you like to check another stat?`)
    checkPokemonStats()


// GAME IS COMPLETE! 
console.log(`\nTrainer ${userName}, you and ${currentPokemon} really worked hard today!\nTime to rest up until tomorrow!\nGoodbye!!!!`);
    process.exit()



// MORE OPTIONS TO INCLUDE FOR LATER:
// FEED POKEMON AGAIN
// TEACH POKEMON ANOTHER SKILL
// CONSOLIDATE CODE
