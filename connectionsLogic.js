/* Keeps a track of how many tiles are currently clicked */
let numberOfClicked = 0;

/* Keeps track of the tiles which have been checked, used to define whether a set is a correct answer or not */
let selectedTiles = [];

/* Keeps a log of how many correct sets have been found thus far */
let correctSets = 0;

/* Keeps a log of how many incorrect answers have been chosen */
let incorrectGuesses  = 0;

/* Designates arrays to store final answers */
let firstAnswerGroup = [];
let secondAnswerGroup = [];
let thirdAnswerGroup = [];
let fourthAnswerGroup = [];

/* This an array of all of the potential sets which can be used as part of the game, will hopefully be populated from a DB / via an API at some point */
const connectionArray = [
    ["start of pokemon", "BULB", "BEE", "RAT", "CHAR"], 
    ["stadium synonyms", "ARENA", "BOWL", "COLISEUM", "DOME"], 
    ["romantic partner", "FLAME", "LOVER", "STEADY", "SWEETHEART"],
    ["facade", "BLUFF", "FRONT", "SHAM", "SHOW"], 
    ["___ goose", "GREY", "GOLDEN", "MOTHER", "SILLY"],
    ["transfer", "GIVE", "HAND", "PASS", "SEND"],
    ["fish", "BASS", "FLUKE", "PERCH", "PIKE"],
    ["mess of hair", "MANE", "MOP", "SHOCK", "TANGLE"],
    ["PIECES OF FURNITURE", "BED", "CHAIR", "COUCH", "TABLE"],
    ["CARRY, AS A FEELING", "BEAR", "HARBOR", "HOLD", "MAINTAIN"],
    ["WINE TASTING DESCRIPTORS", "BALANCED", "DRY", "FULL", "SWEET"],
    ["STARTING WITH METALS", "GOLDILOCKS", "IRONIC", "LEADERSHIP", "TINDER"],
    ["WAYS TO PREPARE EGGS", "BOIL", "FRY", "POACH", "SCRAMBLE"],
    ["EXHILARATION", "BUZZ", "KICK", "RUSH", "THRILL"],
    ["THROWN IN TARGET GAMES", "AXE", "DART", "HORSESHOE", "RING"],
    ["___ WRAP", "BODY", "BUBBLE", "GIFT", "SHRINK"],
    ["BENCHMARK", "BENCHMARK", "GAUGE", "STANDARD", "YARDSTICK"],
    ["POKER ACTIONS", "BET", "CALL", "CHECK", "FOLD"],
    ["SKIN TYPES", "COMBINATION", "DRY", "NORMAL", "OILY"],
    ["STARTS OF U.S. STATES", "KENT", "MARY", "MASS", "WASH"],
    ["THRUST", "JAB", "POKE", "PROD", "STICK"],
    ["KINDS OF SNAKES", "ADDER", "BOA", "MAMBA", "MOCCASIN"],
    ["SEEN IN “CINDERELLA”", "BALL", "PRINCE", "PUMPKIN", "SLIPPER"],
    ["PASTA SHAPES", "BOWTIE", "ELBOW", "TUBE", "WHEEL"],
    ["TAKE A TUMBLE", "FALL", "SLIP", "SPILL", "TRIP"],
    ["KINDS OF WATER", "MINERAL", "SPRING", "STILL", "TAP"],
    ["THINGS THAT ARE CINCHED IN THE MIDDLE", "CORSET", "DIABOLO", "HOURGLASS", "WASP"],
    ["BREATHES HEAVILY", "GASPS", "HUFFS", "PANTS", "PUFFS"],
    ["PRESERVES, AS MEAT", "CANS", "CURES", "SALTS", "SMOKES"],
    ["PREDICAMENTS", "BINDS", "JAMS", "PICKLES", "SPOTS"],
    ["THINGS IN “MY FAVORITE THINGS”", "KETTLES", "MITTENS", "RAINDROPS", "WHISKERS"],
    ["ESPECIALLY", "MIGHTY", "PRETTY", "REALLY", "VERY"],
    ["DISNEY CHARACTERS", "DAISY", "GOOFY", "HAPPY", "LADY"],
    ["KINDS OF BLUE", "BABY", "NAVY", "SKY", "TIFFANY"],
    ["BODY PARTS PLUS Y", "ARMY", "COLONY", "LIVERY", "SHINY"],
    ["EXITED", "DEPARTED", "LEFT", "SPLIT", "WENT"],
    ["ONE FLYING AN AIRPLANE", "ACE", "AVIATOR", "FLIER", "PILOT"],
    ["KINDS OF WHALES", "BLUE", "FIN", "GRAY", "RIGHT"],
    ["THINGS WITH SLOTS", "ATM", "CASINO", "SCHEDULE", "SPATULA"],
    ["UPDATE FOR ACCURACY", "AMEND", "CORRECT", "FIX", "REVISE"],
    ["QUARREL", "FIGHT", "ROW", "SCRAP", "TIFF"],
    ["GAMES OF CHANCE", "BINGO", "LOTTERY", "ROULETTE", "WAR"],
    ["___ CHIP", "BLUE", "COMPUTER", "POKER", "POTATO"],
    ["MUSICAL INSTRUMENTS", "BASS", "BASSOON", "HARP", "RECORDER"],
    ["PLANT GROWTHS", "BLOOM", "BUD", "SHOOT", "SPROUT"],
    ["BRING UP", "FOSTER", "NURSE", "RAISE", "REAR"],
    ["SOLAR EMANATIONS", "CORONA", "FLARE", "LIGHT", "RADIATION"],
    ["HOW FAST SOMETHING IS GOING", "CLIP", "PACE", "RATE", "SPEED"],
    ["STEP ON IT!", "FASTER", "GO", "HURRY", "MOVE"],
    ["N.B.A. TEAM PLAYER", "CLIPPER", "PACER", "ROCKET", "SPUR"],
    ["TELE___", "COMMUTE", "MEDICINE", "PROMPTER", "VISION"],
    ["FAIL TO ATTEND", "CUT", "DITCH", "MISS", "SKIP"],
    ["DECISIVE VICTORY", "BLOWOUT", "ROMP", "ROUT", "SWEEP"],
    ["___ WHEEL", "CHEESE", "COLOR", "HAMSTER", "PRAYER"],
    ["KUDOS", "CREDIT", "GLORY", "PRAISE", "PROPS"],
    ["BECOME AWARE OF", "DISCOVER", "FIND", "LEARN", "REALIZE"],
    ["PURSUE", "CHASE", "TAIL", "TRACK", "SHADOW"],
    ["SEEN IN A PASSPORT", "NAME", "PHOTO", "STAMP", "VISA"],
    ["JUMPING ANIMALS", "CRICKET", "FROG", "HARE", "KANGAROO"],
    ["APPLY PRESSURE TO", "CRUSH", "MASH", "PRESS", "SQUASH"],
    ["OLYMPIC SPORTS", "BREAKING", "HOCKEY", "SKELETON", "TRAMPOLINE"],
    ["THINGS YOU CAN SET", "MOOD", "RECORD", "TABLE", "VOLLEYBALL"],
    ["CHAT, INFORMALLY", "GAB", "JAW", "YAK", "YAP"],
    ["FEMALE ANIMALS", "COW", "DOE", "EWE", "HEN"],
    ["PALINDROMES", "BIB", "EYE", "GAG", "POP"],
    ["STARTS OF PLANET NAMES", "EAR", "MAR", "MER", "SAT"],
    ["SEEN AT A SPORTS STADIUM", "ASTROTURF", "JUMBOTRON", "SCOREBOARD", "SKYBOX"],
    ["CAMERA BRANDS", "FUJIFILM", "HASSELBLAD", "OLYMPUS", "POLAROID"],
    ["ITALIAN DEMONYMS", "BOLOGNESE", "NEAPOLITAN", "PARMESAN", "VENETIAN"],
    ["STARTING WITH ROCK BANDS", "CREAMSICLE", "JOURNEYMAN", "KISSCAM", "RUSHMORE"],
    ["MOVIE SUMMARY INFO", "CAST", "GENRE", "PLOT", "TITLE"],
    ["PRETENSE", "AFFECT", "AIRS", "CHARADE", "FRONT"],
    ["FAMOUS GUITARISTS", "BERRY", "KING", "PAGE", "WATERS"],
    ["SECOND ___", "FIDDLE", "GUESS", "NATURE", "WIND"],
    ["SEGMENT OF A PROCESS", "CYCLE", "PHASE", "ROUND", "STAGE"],
    ["CONSTELLATIONS", "CYGNUS", "GEMINI", "ORION", "PEGASUS"],
    ["SPIRALS IN NATURE", "CYCLONE", "GALAXY", "SNAIL", "SUNFLOWER"],
    ["ASSOCIATED WITH “ONE”", "CYCLOPS", "MONOLOGUE", "SOLITAIRE", "UNICYCLE"]
];

/* setRowColors sets the colors of the tiles based on how many correct sets have been chosen */
function setRowColors(){
    switch(correctSets){
        case 0:
            for(let i = 0; i < 16; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "grey";
                document.querySelectorAll(".connections_tile")[i].style.color = "black";
            };

            document.querySelectorAll(".fourLivesIcon")[0].style.backgroundColor = "lightgreen";
            document.querySelectorAll(".fourLivesIcon")[0].innerHTML="4 Lives Left &#128513;";
            document.querySelectorAll(".threeLivesIcon")[0].style.backgroundColor = "white";
            document.querySelectorAll(".threeLivesIcon")[0].innerHTML="";
            document.querySelectorAll(".twoLivesIcon")[0].style.backgroundColor = "white";
            document.querySelectorAll(".twoLivesIcon")[0].innerHTML="";
            document.querySelectorAll(".oneLifeIcon")[0].style.backgroundColor = "white";
            document.querySelectorAll(".oneLifeIcon")[0].innerHTML="";
        break;

        case 1:
            for(let i = 4; i < 16; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "grey";
                document.querySelectorAll(".connections_tile")[i].style.color = "black";
            };
            for(let i=0; i<4; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "blue";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
        break;

        case 2:
            for(let i = 8; i < 16; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "grey";
                document.querySelectorAll(".connections_tile")[i].style.color = "black";
            };
            for(let i=0; i<4; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "blue";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
            for(let i=4; i<8; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "green";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
        break;

        case 3:
            for(let i = 12; i < 16; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "grey";
                document.querySelectorAll(".connections_tile")[i].style.color = "black";
            };
            for(let i=0; i<4; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "blue";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
            for(let i=4; i<8; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "green";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
            for(let i=8; i<12; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "purple";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
        break;
        
        case 4:
            for(let i=0; i<4; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "blue";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
            for(let i=4; i<8; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "green";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
            for(let i=8; i<12; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "purple";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
            for(let i=12; i<16; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "orange";
                document.querySelectorAll(".connections_tile")[i].style.color = "white";
            };
        break;

        default:
            alert("Something has gone wrong!!!!");
    }
}

/* Generates a new set of 16 tiles and resets all values used within the game*/
function refreshArray(){

    /* This function is used to pick a random set from the connectionArray constant */
    function uniqueRandoms(length, maximum) {
        let o1 = [];
        let test;
        for (let i = 0; i < length; i++) {
            do {
                test = Math.floor(Math.random() * maximum);
            } while (o1.indexOf(test) != -1);
            o1.push(test);
        }
    
        return o1;
    }
    
    /* This section generates the 4 sets of answers and assigns the all into an initial array */
    output = uniqueRandoms(4,connectionArray.length);
    
    let group1number = output[0];
    let group2number = output[1];
    let group3number = output[2];    
    let group4number = output[3];
        
    let group1 = connectionArray[group1number];
    let group2 = connectionArray[group2number];
    let group3 = connectionArray[group3number];
    let group4 = connectionArray[group4number];

    let tileArray = [
        group1[1], 
        group1[2],
        group1[3],
        group1[4],
        group2[1],
        group2[2],
        group2[3],
        group2[4],
        group3[1],
        group3[2],
        group3[3],
        group3[4],
        group4[1],
        group4[2],
        group4[3],
        group4[4]
    ]
    ;

    /* This section shuffles the tileArray generated above. Stolen from the below post online... */
    /* https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
    let unshuffled = tileArray;
    let shuffled = unshuffled
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    console.log(shuffled)

    for(let j = 0; j < 16; j++){
        document.querySelectorAll(".connections_tile")[j].innerHTML = shuffled[j];
    };

    /* The section resets the games stats to their defaults and resets the color of the grid */
    numberOfClicked = 0;
    selectedTiles = [];
    correctSets = 0;
    firstAnswerGroup = [];
    secondAnswerGroup = [];
    thirdAnswerGroup = [];
    fourthAnswerGroup = [];
    setRowColors();
    incorrectGuesses = 0;

    /* Defines the 4 correct answer groups to be used when checking the responses */
    abc = shuffled;
    def = unshuffled;
    answer1 = group1[0];
    answerGroup1 = [group1[1], group1[2], group1[3], group1[4]];
    answer2 = group2[0];
    answerGroup2 = [group2[1], group2[2], group2[3], group2[4]];
    answer3 = group3[0];
    answerGroup3 = [group3[1], group3[2], group3[3], group3[4]];
    answer4 = group4[0];
    answerGroup4 = [group4[1], group4[2], group4[3], group4[4]];
    return shuffled;    
}

/* Adds the buttons to the 16 tiles */
function configureButtons(){  

    /* Should always return 16 but maybe useful if I try to add the option to have more than 4 sets? */
    let numberOfTiles = document.querySelectorAll(".connections_tile").length;

    /* Add buttons to the non-answered groups */
    for (let i = correctSets; i < numberOfTiles; i++){
        document.querySelectorAll(".connections_tile")[i].addEventListener("click", function(){

            let thisId = this.id;
            let thisHTML = this.innerHTML;

            function changeColor() {
        
                switch(document.getElementById(thisId).style.backgroundColor){

                    case "grey":
                        switch(numberOfClicked){
                            case 0:
                                document.getElementById(thisId).style.color = "white";
                                document.getElementById(thisId).style.backgroundColor = "black";
                                numberOfClicked++;
                                selectedTiles.push(thisHTML);
                                /* alert(selectedTiles); */
                            break;
                            case 1:
                                document.getElementById(thisId).style.color = "white";
                                document.getElementById(thisId).style.backgroundColor = "black";
                                numberOfClicked++;
                                selectedTiles.push(thisHTML);
                                /* alert(selectedTiles); */
                            break;
                            case 2:
                                document.getElementById(thisId).style.color = "white";
                                document.getElementById(thisId).style.backgroundColor = "black";
                                numberOfClicked++;
                                selectedTiles.push(thisHTML);
                                /* alert(selectedTiles); */
                            break;
                            case 3:
                                document.getElementById(thisId).style.color = "white";
                                document.getElementById(thisId).style.backgroundColor = "black";
                                numberOfClicked++;
                                selectedTiles.push(thisHTML);
                                /* alert(selectedTiles); */
                            break;
                            default:
                                alert("Already 4 Tiles Selected");
                            }            
            
                    break;

                    case "black":
                        document.getElementById(thisId).style.color = "black";
                        document.getElementById(thisId).style.backgroundColor = "grey";
                        numberOfClicked--;
                        selectedTiles.splice(selectedTiles.indexOf(thisHTML),1);
                        /* selectedTiles.pop(thisHTML); was causing issues when deselecting an element which wasn't the last to be selected */
                    break;

                    default:
                        /*alert("Invalid Color");*/
                }

            };


            changeColor(thisId);
        })
    }
}

/* Checks the selected answers */
function checkAnswers(){

    let finalSelectedTiles = selectedTiles.sort();
    let finalAnswerGroup1 = answerGroup1.sort();
    let finalAnswerGroup2 = answerGroup2.sort();
    let finalAnswerGroup3 = answerGroup3.sort();
    let finalAnswerGroup4 = answerGroup4.sort();
        
    switch(numberOfClicked){
        case 4:
            if (finalSelectedTiles[0] === finalAnswerGroup1[0] && finalSelectedTiles[1] === finalAnswerGroup1[1] && finalSelectedTiles[2] === finalAnswerGroup1[2] && finalSelectedTiles[3] === finalAnswerGroup1[3]){
                alert ("Correct!!! The theme for this was... " + answer1);
                switch(correctSets){
                    case 0:
                        firstAnswerGroup = selectedTiles;
                    break;
                    case 1:
                        secondAnswerGroup = selectedTiles;
                    break;
                    case 2:
                        thirdAnswerGroup = selectedTiles;
                    break;
                    case 3:
                        fourthAnswerGroup = selectedTiles;
                    break;
                    default:
                        ;
                };
                correctSets++;
                selectedTiles = [];
                numberOfClicked = 0;
                setRowColors();
                reorderAfterAnswer();
            } else if (finalSelectedTiles[0] === finalAnswerGroup2[0] && finalSelectedTiles[1] === finalAnswerGroup2[1] && finalSelectedTiles[2] === finalAnswerGroup2[2] && finalSelectedTiles[3] === finalAnswerGroup2[3]){
                alert ("Correct!!! The theme for this was... " + answer2);
                switch(correctSets){
                    case 0:
                        firstAnswerGroup = selectedTiles;
                    break;
                    case 1:
                        secondAnswerGroup = selectedTiles;
                    break;
                    case 2:
                        thirdAnswerGroup = selectedTiles;
                    break;
                    case 3:
                        fourthAnswerGroup = selectedTiles;
                    break;
                    default:
                        ;
                };
                correctSets++;
                selectedTiles = [];
                numberOfClicked = 0;
                setRowColors();
                reorderAfterAnswer();
            } else if (finalSelectedTiles[0] === finalAnswerGroup3[0] && finalSelectedTiles[1] === finalAnswerGroup3[1] && finalSelectedTiles[2] === finalAnswerGroup3[2] && finalSelectedTiles[3] === finalAnswerGroup3[3]){
                alert ("Correct!!! The theme for this was... " + answer3);
                switch(correctSets){
                    case 0:
                        firstAnswerGroup = selectedTiles;
                    break;
                    case 1:
                        secondAnswerGroup = selectedTiles;
                    break;
                    case 2:
                        thirdAnswerGroup = selectedTiles;
                    break;
                    case 3:
                        fourthAnswerGroup = selectedTiles;
                    break;
                    default:
                        ;
                };
                correctSets++;
                selectedTiles = [];
                numberOfClicked = 0;
                setRowColors();
                reorderAfterAnswer();
            } else if (finalSelectedTiles[0] === finalAnswerGroup4[0] && finalSelectedTiles[1] === finalAnswerGroup4[1] && finalSelectedTiles[2] === finalAnswerGroup4[2] && finalSelectedTiles[3] === finalAnswerGroup4[3]){
                alert ("Correct!!! The theme for this was... " + answer4);
                switch(correctSets){
                    case 0:
                        firstAnswerGroup = selectedTiles;
                    break;
                    case 1:
                        secondAnswerGroup = selectedTiles;
                    break;
                    case 2:
                        thirdAnswerGroup = selectedTiles;
                    break;
                    case 3:
                        fourthAnswerGroup = selectedTiles;
                    break;
                    default:
                        ;
                };
                correctSets++;
                selectedTiles = [];
                numberOfClicked = 0;
                setRowColors();
                reorderAfterAnswer();
            } else {
                incorrectGuesses++;
                changeLifeCount();
                switch(incorrectGuesses){
                case 4:
                    endGame();
                break;
                default:
                    ;
                }
                switch(incorrectGuesses){
                    case 4:
                    break;
                    default:
                        alert ("No Match :(");
                }
            }
        break;

        default:
            alert("4 tiles must be pressed!");
        }
}

/* Reorder after correct answer */
function reorderAfterAnswer(){
    switch(correctSets){
        case 1:
            document.querySelectorAll(".connections_tile")[0].innerHTML = firstAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[1].innerHTML = firstAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[2].innerHTML = firstAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[3].innerHTML = firstAnswerGroup[3];
            abc.splice(abc.indexOf(firstAnswerGroup[0]),1);
            abc.splice(abc.indexOf(firstAnswerGroup[1]),1);
            abc.splice(abc.indexOf(firstAnswerGroup[2]),1);
            abc.splice(abc.indexOf(firstAnswerGroup[3]),1);
            def.splice(def.indexOf(firstAnswerGroup[0]),1);
            def.splice(def.indexOf(firstAnswerGroup[1]),1);
            def.splice(def.indexOf(firstAnswerGroup[2]),1);
            def.splice(def.indexOf(firstAnswerGroup[3]),1);

            unshuffled = abc;
            shuffled1 = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            console.log(shuffled1)
            for(let j = 0; j < 12; j++){
                document.querySelectorAll(".connections_tile")[j+4].innerHTML = shuffled1[j];
            };


            break;
        case 2:
            document.querySelectorAll(".connections_tile")[0].innerHTML = firstAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[1].innerHTML = firstAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[2].innerHTML = firstAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[3].innerHTML = firstAnswerGroup[3];
            document.querySelectorAll(".connections_tile")[4].innerHTML = secondAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[5].innerHTML = secondAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[6].innerHTML = secondAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[7].innerHTML = secondAnswerGroup[3];
            abc.splice(abc.indexOf(secondAnswerGroup[0]),1);
            abc.splice(abc.indexOf(secondAnswerGroup[1]),1);
            abc.splice(abc.indexOf(secondAnswerGroup[2]),1);
            abc.splice(abc.indexOf(secondAnswerGroup[3]),1);
            def.splice(def.indexOf(secondAnswerGroup[0]),1);
            def.splice(def.indexOf(secondAnswerGroup[1]),1);
            def.splice(def.indexOf(secondAnswerGroup[2]),1);
            def.splice(def.indexOf(secondAnswerGroup[3]),1);

            unshuffled = abc;
            shuffled2 = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            console.log(shuffled2)
            for(let j = 0; j < 8; j++){
                document.querySelectorAll(".connections_tile")[j+8].innerHTML = shuffled2[j];
            };

        break;
        case 3:
            document.querySelectorAll(".connections_tile")[0].innerHTML = firstAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[1].innerHTML = firstAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[2].innerHTML = firstAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[3].innerHTML = firstAnswerGroup[3];
            document.querySelectorAll(".connections_tile")[4].innerHTML = secondAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[5].innerHTML = secondAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[6].innerHTML = secondAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[7].innerHTML = secondAnswerGroup[3];
            document.querySelectorAll(".connections_tile")[8].innerHTML = thirdAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[9].innerHTML = thirdAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[10].innerHTML = thirdAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[11].innerHTML = thirdAnswerGroup[3];
            abc.splice(abc.indexOf(thirdAnswerGroup[0]),1);
            abc.splice(abc.indexOf(thirdAnswerGroup[1]),1);
            abc.splice(abc.indexOf(thirdAnswerGroup[2]),1);
            abc.splice(abc.indexOf(thirdAnswerGroup[3]),1);
            def.splice(def.indexOf(thirdAnswerGroup[0]),1);
            def.splice(def.indexOf(thirdAnswerGroup[1]),1);
            def.splice(def.indexOf(thirdAnswerGroup[2]),1);
            def.splice(def.indexOf(thirdAnswerGroup[3]),1);

            unshuffled = abc;
            shuffled3 = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            console.log(shuffled3)
            for(let j = 0; j < 4; j++){
                document.querySelectorAll(".connections_tile")[j+12].innerHTML = shuffled3[j];
            };

        break;
        case 4:
            document.querySelectorAll(".connections_tile")[0].innerHTML = firstAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[1].innerHTML = firstAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[2].innerHTML = firstAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[3].innerHTML = firstAnswerGroup[3];
            document.querySelectorAll(".connections_tile")[4].innerHTML = secondAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[5].innerHTML = secondAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[6].innerHTML = secondAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[7].innerHTML = secondAnswerGroup[3];
            document.querySelectorAll(".connections_tile")[8].innerHTML = thirdAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[9].innerHTML = thirdAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[10].innerHTML = thirdAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[11].innerHTML = thirdAnswerGroup[3];
            document.querySelectorAll(".connections_tile")[12].innerHTML = fourthAnswerGroup[0];
            document.querySelectorAll(".connections_tile")[13].innerHTML = fourthAnswerGroup[1];
            document.querySelectorAll(".connections_tile")[14].innerHTML = fourthAnswerGroup[2];
            document.querySelectorAll(".connections_tile")[15].innerHTML = fourthAnswerGroup[3];
            abc.splice(abc.indexOf(fourthAnswerGroup[0]),1);
            abc.splice(abc.indexOf(fourthAnswerGroup[1]),1);
            abc.splice(abc.indexOf(fourthAnswerGroup[2]),1);
            abc.splice(abc.indexOf(fourthAnswerGroup[3]),1);
            def.splice(def.indexOf(fourthAnswerGroup[0]),1);
            def.splice(def.indexOf(fourthAnswerGroup[1]),1);
            def.splice(def.indexOf(fourthAnswerGroup[2]),1);
            def.splice(def.indexOf(fourthAnswerGroup[3]),1);
            alert("Congratulations!!! You Win!!!");
        break;

    }
}

/* Add a function to allow the player to shuffle the remaining answers */
function shuffleGrid(){
    switch(correctSets){
        case 0:
            unshuffled = abc;
            shuffled1 = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            console.log(shuffled1)
            for(let j = 0; j < 16; j++){
                document.querySelectorAll(".connections_tile")[j].innerHTML = shuffled1[j];
            };
            for(let i = 0; i < 16; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "grey";
                document.querySelectorAll(".connections_tile")[i].style.color = "black";
            };
            selectedTiles = [];
            numberOfClicked = 0;
        break;
        case 1:
            unshuffled = abc;
            shuffled1 = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            console.log(shuffled1)
            for(let j = 0; j < 12; j++){
                document.querySelectorAll(".connections_tile")[j+4].innerHTML = shuffled1[j];
            };
            for(let i = 4; i < 16; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "grey";
                document.querySelectorAll(".connections_tile")[i].style.color = "black";
            };
            selectedTiles = [];
            numberOfClicked = 0;
        break;
        case 2:
            unshuffled = abc;
            shuffled2 = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            console.log(shuffled2)
            for(let j = 0; j < 8; j++){
                document.querySelectorAll(".connections_tile")[j+8].innerHTML = shuffled2[j];
            };
            for(let i = 8; i < 16; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "grey";
                document.querySelectorAll(".connections_tile")[i].style.color = "black";
            };
            selectedTiles = [];
            numberOfClicked = 0;
        break;
        case 3:
            unshuffled = abc;
            shuffled3 = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            console.log(shuffled3)
            for(let j = 0; j < 4; j++){
                document.querySelectorAll(".connections_tile")[j+12].innerHTML = shuffled3[j];
            };
            for(let i = 12; i < 16; i++){
                document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "grey";
                document.querySelectorAll(".connections_tile")[i].style.color = "black";
            };
            selectedTiles = [];
            numberOfClicked = 0;
        break;
    }
}

/* Adding a function to display the currently selected answers to be used during testing */
function displayCurrentlySelected(){
    alert(selectedTiles);
}

/* Adding a function to show the remaining items to be checked */
function remainingItems(){
    alert(abc);
}

/* Allows the user to deselect all currently selected answers */
function deselectAll(){
    setRowColors();
    selectedTiles = [];
    numberOfClicked = 0;
}

/* End game colour change */
function endGamesColourChange(){
    for(let i=0; i<4; i++){
        document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "blue";
        document.querySelectorAll(".connections_tile")[i].style.color = "white";
    };
    for(let i=4; i<8; i++){
        document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "green";
        document.querySelectorAll(".connections_tile")[i].style.color = "white";
    };
    for(let i=8; i<12; i++){
        document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "purple";
        document.querySelectorAll(".connections_tile")[i].style.color = "white";
    };
    for(let i=12; i<16; i++){
        document.querySelectorAll(".connections_tile")[i].style.backgroundColor = "orange";
        document.querySelectorAll(".connections_tile")[i].style.color = "white";
    };
}

/* Function which is triggered once the user reaches 4 incorrect guesses :( */
function endGame(){
    alert("Unlucky, You lose!")
    let oldCorrectSets = correctSets;
    correctSets = 4;
    switch(oldCorrectSets){
        case 0:
            document.querySelectorAll(".connections_tile")[0].innerHTML = answerGroup1[0];
            document.querySelectorAll(".connections_tile")[1].innerHTML = answerGroup1[1];
            document.querySelectorAll(".connections_tile")[2].innerHTML = answerGroup1[2];
            document.querySelectorAll(".connections_tile")[3].innerHTML = answerGroup1[3];
            document.querySelectorAll(".connections_tile")[4].innerHTML = answerGroup2[0];
            document.querySelectorAll(".connections_tile")[5].innerHTML = answerGroup2[1];
            document.querySelectorAll(".connections_tile")[6].innerHTML = answerGroup2[2];
            document.querySelectorAll(".connections_tile")[7].innerHTML = answerGroup2[3];
            document.querySelectorAll(".connections_tile")[8].innerHTML = answerGroup3[0];
            document.querySelectorAll(".connections_tile")[9].innerHTML = answerGroup3[1];
            document.querySelectorAll(".connections_tile")[10].innerHTML = answerGroup3[2];
            document.querySelectorAll(".connections_tile")[11].innerHTML = answerGroup3[3];
            document.querySelectorAll(".connections_tile")[12].innerHTML = answerGroup4[0];
            document.querySelectorAll(".connections_tile")[13].innerHTML = answerGroup4[1];
            document.querySelectorAll(".connections_tile")[14].innerHTML = answerGroup4[2];
            document.querySelectorAll(".connections_tile")[15].innerHTML = answerGroup4[3];
        break;
        case 1:
            document.querySelectorAll(".connections_tile")[4].innerHTML = def[0];
            document.querySelectorAll(".connections_tile")[5].innerHTML = def[1];
            document.querySelectorAll(".connections_tile")[6].innerHTML = def[2];
            document.querySelectorAll(".connections_tile")[7].innerHTML = def[3];
            document.querySelectorAll(".connections_tile")[8].innerHTML = def[4];
            document.querySelectorAll(".connections_tile")[9].innerHTML = def[5];
            document.querySelectorAll(".connections_tile")[10].innerHTML = def[6];
            document.querySelectorAll(".connections_tile")[11].innerHTML = def[7];
            document.querySelectorAll(".connections_tile")[12].innerHTML = def[8];
            document.querySelectorAll(".connections_tile")[13].innerHTML = def[9];
            document.querySelectorAll(".connections_tile")[14].innerHTML = def[10];
            document.querySelectorAll(".connections_tile")[15].innerHTML = def[11];
        break;
        case 2:
            document.querySelectorAll(".connections_tile")[8].innerHTML = def[0];
            document.querySelectorAll(".connections_tile")[9].innerHTML = def[1];
            document.querySelectorAll(".connections_tile")[10].innerHTML = def[2];
            document.querySelectorAll(".connections_tile")[11].innerHTML = def[3];
            document.querySelectorAll(".connections_tile")[12].innerHTML = def[4];
            document.querySelectorAll(".connections_tile")[13].innerHTML = def[5];
            document.querySelectorAll(".connections_tile")[14].innerHTML = def[6];
            document.querySelectorAll(".connections_tile")[15].innerHTML = def[7];
        break;
        default:
        ;
    }
    endGamesColourChange();
}

/* Display the number of lives the user has left */
function changeLifeCount(){
    switch(incorrectGuesses){
        case 1:
            document.querySelectorAll(".fourLivesIcon")[0].style.backgroundColor = "white";
            document.querySelectorAll(".fourLivesIcon")[0].innerHTML="";
            document.querySelectorAll(".threeLivesIcon")[0].style.backgroundColor = "green";
            document.querySelectorAll(".threeLivesIcon")[0].innerHTML="3 Lives Left &#128515;";
        break;
        case 2:
            document.querySelectorAll(".threeLivesIcon")[0].style.backgroundColor = "white";
            document.querySelectorAll(".threeLivesIcon")[0].innerHTML="";
            document.querySelectorAll(".twoLivesIcon")[0].style.backgroundColor = "yellow";
            document.querySelectorAll(".twoLivesIcon")[0].innerHTML="2 Lives Left &#128512;";
        break;
        case 3:
            document.querySelectorAll(".twoLivesIcon")[0].style.backgroundColor = "white";
            document.querySelectorAll(".twoLivesIcon")[0].innerHTML="";
            document.querySelectorAll(".oneLifeIcon")[0].style.backgroundColor = "orange";
            document.querySelectorAll(".oneLifeIcon")[0].innerHTML="1 Life Left &#128517;";
        break;
        case 4:
            document.querySelectorAll(".oneLifeIcon")[0].style.backgroundColor = "black";
            document.querySelectorAll(".oneLifeIcon")[0].style.color = "white";
            document.querySelectorAll(".oneLifeIcon")[0].innerHTML="Game Over &#128128;";
        break;
        default:
            ;
}
}

refreshArray();
configureButtons();

/* old checkAnswers Function
function checkAnswers(){

    let finalSelectedTiles = selectedTiles.sort();
    let finalAnswerGroup1 = answerGroup1.sort();
    let finalAnswerGroup2 = answerGroup2.sort();
    let finalAnswerGroup3 = answerGroup3.sort();
    let finalAnswerGroup4 = answerGroup4.sort();
        
    switch(numberOfClicked){
        case 4:
            if (finalSelectedTiles[0] === finalAnswerGroup1[0] && finalSelectedTiles[1] === finalAnswerGroup1[1] && finalSelectedTiles[2] === finalAnswerGroup1[2] && finalSelectedTiles[3] === finalAnswerGroup1[3]){
                alert ("Correct!!! The theme for this was... " + answer1);
                switch(correctSets){
                    case 0:
                        firstAnswerGroup = selectedTiles;
                    break;
                    case 1:
                        secondAnswerGroup = selectedTiles;
                    break;
                    case 2:
                        thirdAnswerGroup = selectedTiles;
                    break;
                    case 3:
                        fourthAnswerGroup = selectedTiles;
                    break;
                    default:
                        ;
                };
                correctSets++;
                selectedTiles = [];
                numberOfClicked = 0;
                setRowColors();
                reorderAfterAnswer();
            } else if (finalSelectedTiles[0] === finalAnswerGroup2[0] && finalSelectedTiles[1] === finalAnswerGroup2[1] && finalSelectedTiles[2] === finalAnswerGroup2[2] && finalSelectedTiles[3] === finalAnswerGroup2[3]){
                alert ("Correct!!! The theme for this was... " + answer2);
                switch(correctSets){
                    case 0:
                        firstAnswerGroup = selectedTiles;
                    break;
                    case 1:
                        secondAnswerGroup = selectedTiles;
                    break;
                    case 2:
                        thirdAnswerGroup = selectedTiles;
                    break;
                    case 3:
                        fourthAnswerGroup = selectedTiles;
                    break;
                    default:
                        ;
                };
                correctSets++;
                selectedTiles = [];
                numberOfClicked = 0;
                setRowColors();
                reorderAfterAnswer();
            } else if (finalSelectedTiles[0] === finalAnswerGroup3[0] && finalSelectedTiles[1] === finalAnswerGroup3[1] && finalSelectedTiles[2] === finalAnswerGroup3[2] && finalSelectedTiles[3] === finalAnswerGroup3[3]){
                alert ("Correct!!! The theme for this was... " + answer3);
                switch(correctSets){
                    case 0:
                        firstAnswerGroup = selectedTiles;
                    break;
                    case 1:
                        secondAnswerGroup = selectedTiles;
                    break;
                    case 2:
                        thirdAnswerGroup = selectedTiles;
                    break;
                    case 3:
                        fourthAnswerGroup = selectedTiles;
                    break;
                    default:
                        ;
                };
                correctSets++;
                selectedTiles = [];
                numberOfClicked = 0;
                setRowColors();
                reorderAfterAnswer();
            } else if (finalSelectedTiles[0] === finalAnswerGroup4[0] && finalSelectedTiles[1] === finalAnswerGroup4[1] && finalSelectedTiles[2] === finalAnswerGroup4[2] && finalSelectedTiles[3] === finalAnswerGroup4[3]){
                alert ("Correct!!! The theme for this was... " + answer4);
                switch(correctSets){
                    case 0:
                        firstAnswerGroup = selectedTiles;
                    break;
                    case 1:
                        secondAnswerGroup = selectedTiles;
                    break;
                    case 2:
                        thirdAnswerGroup = selectedTiles;
                    break;
                    case 3:
                        fourthAnswerGroup = selectedTiles;
                    break;
                    default:
                        ;
                };
                correctSets++;
                selectedTiles = [];
                numberOfClicked = 0;
                setRowColors();
                reorderAfterAnswer();
            } else {
                alert ("No Match :(");
            }
        break;

        default:
            alert("4 tiles must be pressed!");
        }
}
*/
