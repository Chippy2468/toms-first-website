var abc = [];

let numberOfClicked = 0;

function initialColors(){
    document.querySelectorAll(".connections_buttom")[0].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[1].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[2].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[3].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[4].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[5].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[6].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[7].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[8].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[9].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[10].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[11].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[12].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[13].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[14].style.backgroundColor = "red";
    document.querySelectorAll(".connections_buttom")[15].style.backgroundColor = "red";

    document.querySelectorAll(".connections_buttom")[0].style.color = "black";
    document.querySelectorAll(".connections_buttom")[1].style.color = "black";
    document.querySelectorAll(".connections_buttom")[2].style.color = "black";
    document.querySelectorAll(".connections_buttom")[3].style.color = "black";
    document.querySelectorAll(".connections_buttom")[4].style.color = "black";
    document.querySelectorAll(".connections_buttom")[5].style.color = "black";
    document.querySelectorAll(".connections_buttom")[6].style.color = "black";
    document.querySelectorAll(".connections_buttom")[7].style.color = "black";
    document.querySelectorAll(".connections_buttom")[8].style.color = "black";
    document.querySelectorAll(".connections_buttom")[9].style.color = "black";
    document.querySelectorAll(".connections_buttom")[10].style.color = "black";
    document.querySelectorAll(".connections_buttom")[11].style.color = "black";
    document.querySelectorAll(".connections_buttom")[12].style.color = "black";
    document.querySelectorAll(".connections_buttom")[13].style.color = "black";
    document.querySelectorAll(".connections_buttom")[14].style.color = "black";
    document.querySelectorAll(".connections_buttom")[15].style.color = "black";
}



function generateArray() {

    var connectionArray = [
        ["start of pokemon", "bulb", "bee", "rat", "char"],
        ["stadium synonyms", "arena", "bowl", "coliseum", "dome"],
        ["romantic partner", "flame", "lover", "steady", "sweetheart"],
        ["facade", "bluff", "front", "sham", "show"],
        ["___ goose", "grey", "golden", "mother", "silly"],
        ["transfer", "give", "hand", "pass", "send"],
        ["fish", "bass", "fluke", "perch", "pike"],
        ["mess of hair", "mane", "mop", "shock", "tangle"]
    ];
    
    function unique_randoms(length, maximum) {
        var o1 = [];
        var test;
    
        for (var i = 0; i < length; i++) {
            do {
            test = Math.floor(Math.random() * maximum);
            } while (o1.indexOf(test) != -1);
        o1.push(test);
        }
    
        return o1;
    }
    
    output = unique_randoms(4,connectionArray.length);
    
    var group1number = output[0];
    var group2number = output[1];
    var group3number = output[2];    
    var group4number = output[3];
        
    var group1 = connectionArray[group1number];
    var group2 = connectionArray[group2number];
    var group3 = connectionArray[group3number];
    var group4 = connectionArray[group4number];

    var tileArray = [
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
    /*console.log(tileArray);*/

    /* https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
    let unshuffled = tileArray;
    let shuffled = unshuffled
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    console.log(shuffled)

    document.querySelectorAll(".connections_buttom")[0].innerHTML = shuffled[0];
    document.querySelectorAll(".connections_buttom")[1].innerHTML = shuffled[1];
    document.querySelectorAll(".connections_buttom")[2].innerHTML = shuffled[2];
    document.querySelectorAll(".connections_buttom")[3].innerHTML = shuffled[3];
    document.querySelectorAll(".connections_buttom")[4].innerHTML = shuffled[4];
    document.querySelectorAll(".connections_buttom")[5].innerHTML = shuffled[5];
    document.querySelectorAll(".connections_buttom")[6].innerHTML = shuffled[6];
    document.querySelectorAll(".connections_buttom")[7].innerHTML = shuffled[7];
    document.querySelectorAll(".connections_buttom")[8].innerHTML = shuffled[8];
    document.querySelectorAll(".connections_buttom")[9].innerHTML = shuffled[9];
    document.querySelectorAll(".connections_buttom")[10].innerHTML = shuffled[10];
    document.querySelectorAll(".connections_buttom")[11].innerHTML = shuffled[11];
    document.querySelectorAll(".connections_buttom")[12].innerHTML = shuffled[12];
    document.querySelectorAll(".connections_buttom")[13].innerHTML = shuffled[13];
    document.querySelectorAll(".connections_buttom")[14].innerHTML = shuffled[14];
    document.querySelectorAll(".connections_buttom")[15].innerHTML = shuffled[15];

    initialColors();

    let numberOfClicked = 0;


    abc = shuffled;
    return shuffled;
}

generateArray();

function afterRefresh() {
    document.querySelectorAll("p")[0].innerHTML = abc;
    numberOfClicked = 0; 
}

afterRefresh()

function shuffleArray(initialTileArray) {
    let unshuffled = initialTileArray;
    let shuffledAgain = unshuffled
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    console.log(shuffledAgain)

    document.querySelectorAll(".connections_buttom")[0].innerHTML = shuffledAgain[0];
    document.querySelectorAll(".connections_buttom")[1].innerHTML = shuffledAgain[1];
    document.querySelectorAll(".connections_buttom")[2].innerHTML = shuffledAgain[2];
    document.querySelectorAll(".connections_buttom")[3].innerHTML = shuffledAgain[3];
    document.querySelectorAll(".connections_buttom")[4].innerHTML = shuffledAgain[4];
    document.querySelectorAll(".connections_buttom")[5].innerHTML = shuffledAgain[5];
    document.querySelectorAll(".connections_buttom")[6].innerHTML = shuffledAgain[6];
    document.querySelectorAll(".connections_buttom")[7].innerHTML = shuffledAgain[7];
    document.querySelectorAll(".connections_buttom")[8].innerHTML = shuffledAgain[8];
    document.querySelectorAll(".connections_buttom")[9].innerHTML = shuffledAgain[9];
    document.querySelectorAll(".connections_buttom")[10].innerHTML = shuffledAgain[10];
    document.querySelectorAll(".connections_buttom")[11].innerHTML = shuffledAgain[11];
    document.querySelectorAll(".connections_buttom")[12].innerHTML = shuffledAgain[12];
    document.querySelectorAll(".connections_buttom")[13].innerHTML = shuffledAgain[13];
    document.querySelectorAll(".connections_buttom")[14].innerHTML = shuffledAgain[14];
    document.querySelectorAll(".connections_buttom")[15].innerHTML = shuffledAgain[15];
};



    var numberOfTiles = document.querySelectorAll(".connections_buttom").length;


    initialColors();

    for (var i = 0; i < numberOfTiles; i++){
        document.querySelectorAll(".connections_buttom")[i].addEventListener("click", function(){
        
        var thisId = this.id;

        function changeColor(abc) {
        
        switch(document.getElementById(thisId).style.backgroundColor){

            case "red":
                switch(numberOfClicked){
                    case 0:
                        document.getElementById(thisId).style.color = "white";
                        document.getElementById(thisId).style.backgroundColor = "black";
                        numberOfClicked++;
                    break;
                    case 1:
                        document.getElementById(thisId).style.color = "white";
                        document.getElementById(thisId).style.backgroundColor = "black";
                        numberOfClicked++;
                    break;
                    case 2:
                        document.getElementById(thisId).style.color = "white";
                        document.getElementById(thisId).style.backgroundColor = "black";
                        numberOfClicked++;
                    break;
                    case 3:
                        document.getElementById(thisId).style.color = "white";
                        document.getElementById(thisId).style.backgroundColor = "black";
                        numberOfClicked++;
                    break;
                    default:
                        alert("Already 4 Tiles Selected");
                }            
            
            break;

            case "black":
            document.getElementById(thisId).style.color = "black";
            document.getElementById(thisId).style.backgroundColor = "red";
            numberOfClicked--;
            break;

            default:
            alert("Invalid Color");
            }

        };


        changeColor(thisId);

        });
    };
