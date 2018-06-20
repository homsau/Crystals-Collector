$(document).ready(function() {
    
    // Creates variables
    var randomNumber = Math.floor(Math.random()*101+19);
    //console.log(randomNumber);
    var total = 0;
    var wins = 0;
    var losses = 0;
    var green = Math.floor(Math.random()*11+1);
    var blue = Math.floor(Math.random()*11+1);
    var red = Math.floor(Math.random()*11+1);
    var purple = Math.floor(Math.random()*11+1);
    //console.log(green, blue, red, purple);
    var audio = new Audio('assets/audio/kakariko-village.mp3');
    var rupeeSound = document.createElement("audio");
        rupeeSound.src = "assets/audio/rupee.wav";
        rupeeSound.volume = 1;
        rupeeSound.autoPlay = false;
        rupeeSound.preLoad = true;

    //reset the game after completed and redeclare rupee random valuables
    function reset() {
        total = 0;
        randomNumber = Math.floor(Math.random()*101+19);
        green = Math.floor(Math.random()*11+1);
        blue = Math.floor(Math.random()*11+1);
        red = Math.floor(Math.random()*11+1);
        purple = Math.floor(Math.random()*11+1);
        $('#number').text(randomNumber);
        $('#finalTotal').text(total);
        //console.log(green, blue, red, purple);
        $('#wins').text("Wins: " + wins);
        $('#losses').text("Losses: " + losses);
    }

    $('#number').text(randomNumber);
    
    // Play audio (town music on loop and ruppee sound once)
    function noise() {
        audio.play();
        audio.loop = true;
        $(".playSound").click(function() {
            rupeeSound.play();
        });
    }
    noise();

    // initialize audio after first click
    $('.rupees div span').on('click', function() {
        noise();
    });

    // eliminate duplicated win lose function by making it a variable
    // and calling it from the rupee clicks
    function winLose() {
        $('#finalTotal').text(total);
        if (total === randomNumber) {
            //console.log("nice");
            wins++;
            reset();
        }
        else if (total > randomNumber) {
            //console.log("you lose");
            losses++;
            reset();
        }
    }

    // Register random numbers to each color rupee
    $('#green-rupee').on('click', function() {
        total = total + green;
        //console.log("New total= " + total);
        winLose();
    })
    $('#blue-rupee').on('click', function() {
        total = total + blue;
        //console.log("New total= " + total);
        winLose();
    })
    $('#red-rupee').on('click', function() {
        total = total + red;
        //console.log("New total= " + total);
        winLose();
    })
    $('#purple-rupee').on('click', function() {
        total = total + purple;
        //console.log("New total= " + total);
        winLose();
    });
});