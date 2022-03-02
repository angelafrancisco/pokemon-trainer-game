/////// CHOOSE YOUR OWN ADVENTURE GAME: POKEMON TRAINER! ///////////

// console.log("LINKED");
$(() => {

    /////// STARTER POKEMON ARRAY ///////
    const pokemonOptions = [
        // index 0:  0   -  1
        ["Pikachu", "electric"],
        // index 1:  0   -  1
        ["Charmander", "fire"],
        // index 2:  0   -  1
        ["Squirtle", "water"]
    ];
    /////// POKEMON MOVES ARRAY ///////
    const movesPikachu = ["Quick Attack", "Thunder Shock"];
    const movesCharmander = ["Scratch", "Ember"];
    const movesSquirtle = ["Tail Whip", "Water Gun"];
    /////// PLAYER OBJECT /////// 
    const playerInfo = {
        name: '',
        pokemon: [],
        pokemonSkills: [],
        pokemonFriendship: 0,
        pokemonHealth: 10
    }

    // Gameplay round
    function gameRound() {
        displayPokemonSection()
        chooseStarterPokemon()
        pokemonLearnMoves()
        feedPokemon()
    };

    // Initialize game
    displayPokemonSection()

    // Game display shows pokemon section stats empty
    function displayPokemonSection() {
        $('.no-pokemon-img').css('display', 'block');
        $('.skill.first').append(`<span>${playerInfo.pokemonSkills[0] || ''}`);
        $('.skill.second').append(`<span>${playerInfo.pokemonSkills[1] || ''}`);
        $('#health').text(`${playerInfo.pokemonHealth}`);
        $('#friend').text(`${playerInfo.pokemonFriendship}`);
    };

    // 1. Player clicks start game button, to begin
    $('#button-start-game').on('click', () => {
        // console.log('click');
        $('#player-name-prompt').css('display', 'block');
        $('#player-terminal-form').css('display', 'flex');
    });

    // 2. Event Listener: Player enters name
    $('#player-terminal-form').on('submit', respondToPlayerNameCreation);

    // 3. Respond to player name form submit
    function respondToPlayerNameCreation(event) {
        event.preventDefault()
        playerInfo.name = $('#player-input').val()
        // console.log(playerInfo.name);
        $('#player-input').val('');
        alert(`Nice to meet you, Trainer ${playerInfo.name}!`);
        $('#player-terminal-form').css('display', 'none');
        $('#player-name-prompt').css('display', 'none');
        chooseStarterPokemon()
    };

    // 4. Player chooses starter pokemon
    function chooseStarterPokemon() {
        $('#starter-pokemon-prompt').css('display', 'flex');
        $('#starter-pokemon-options').css('display', 'flex');
    };

    // 5. Event Listeners: Player clicks starter pokemon
    // Pikachu
    $('#chose-pikachu').on('click', () => {
        // remove mystery img
        $('.no-pokemon-img').css('display', 'none');
        // add img
        $('#pikachu-img').css('display', 'block');
        // add pokemon to player array
        const newPokemon = {
            name: pokemonOptions[0][0],
            type: pokemonOptions[0][1]
        };
        playerInfo.pokemon.push(newPokemon);
        console.log(newPokemon);
        // hide prompt text and buttons
        $('#starter-pokemon-options').css('display', 'none');
        $('#starter-pokemon-prompt').css('display', 'none');
        showPokedex()
    });
    // Charmander
    $('#chose-char').on('click', () => {
        $('.no-pokemon-img').css('display', 'none');
        $('#charmander-img').css('display', 'block');
        const newPokemon = {
            name: pokemonOptions[1][0],
            type: pokemonOptions[1][1]
        };
        playerInfo.pokemon.push(newPokemon);
        $('#starter-pokemon-options').css('display', 'none');
        $('#starter-pokemon-prompt').css('display', 'none');
        showPokedex()
    });
    // Squirtle
    $('#chose-squirtle').on('click', () => {
        $('.no-pokemon-img').css('display', 'none');
        $('#squirtle-img').css('display', 'block');
        const newPokemon = {
            name: pokemonOptions[2][0],
            type: pokemonOptions[2][1]
        };
        playerInfo.pokemon.push(newPokemon);
        $('#starter-pokemon-options').css('display', 'none');
        $('#starter-pokemon-prompt').css('display', 'none');
        showPokedex()
    });

    // 6. Show pokedex of current pokemon
    function showPokedex() {
        $('#pokedex-info').css('display', 'block');
        $('.current-pokemon').text(`${playerInfo.pokemon.name}`);
        console.log(playerInfo.pokemon.name);
        $('#current-type').text(`${playerInfo.pokemon.type}`);
        console.log(playerInfo.pokemon.type);
        pokemonLearnMoves()
    };

    // 7. Player chooses skill to teach pokemon
    function pokemonLearnMoves() {
        // remove previous text

        // show prompt

        // show button options

        // pokemon health decreases

        // pokemon friendship increases

        feedPokemon()
    };

    // 8. Player chooses snack to give pokemon
    function feedPokemon() {
        // remove previous text

        // show prompt

        // show button options

        // pokemon health updates

        // pokemon friendship updates

        // next function
    };

    // 9. option for window prompt if health is low?

    // 10. option for window prompt to end game, or start new

});