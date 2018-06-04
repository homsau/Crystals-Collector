$(document).ready(function() {
    
    // Creates variables
    var randomNumber = Math.floor(Math.random()*101+19);
    console.log(randomNumber);
    var total = 0;
    var wins = 0;
    var losses = 0;
    var green = Math.floor(Math.random()*11+1);
    var blue = Math.floor(Math.random()*11+1);
    var red = Math.floor(Math.random()*11+1);
    var purple = Math.floor(Math.random()*11+1);
    console.log(green, blue, red, purple);
    

        function reset() {
            total = 0;
            randomNumber = Math.floor(Math.random()*101+19);
            green = Math.floor(Math.random()*11+1);
            blue = Math.floor(Math.random()*11+1);
            red = Math.floor(Math.random()*11+1);
            purple = Math.floor(Math.random()*11+1);
            $('#number').text(randomNumber);
            $('#finalTotal').text(total);
            console.log(green, blue, red, purple);
            $('#wins').text("Wins: " + wins);
            $('#losses').text("Losses: " + losses);
        }
        //reset();
        
        $('#number').text(randomNumber);
        console.log(randomNumber);

        // Register random numbers to each color rupee
        $('#green-rupee').on ('click', function() {
        total = total + green;
        console.log("New total= " + total);
        $('#finalTotal').text(total);
            if (total === randomNumber) {
                console.log("nice");
                wins++;
                reset();
            }
            else if (total > randomNumber) {
                console.log("you lose");
                losses++;
                reset();
            }
        })
        $('#blue-rupee').on ('click', function() {
        total = total + blue;
        console.log("New total= " + total);
        $('#finalTotal').text(total);
            if (total === randomNumber) {
                console.log("nice");
                wins++;
                reset();
            }
            else if (total > randomNumber) {
                console.log("you lose");
                losses++;
                reset();
            }
        })
        $('#red-rupee').on ('click', function() {
        total = total + red;
        console.log("New total= " + total);
        $('#finalTotal').text(total);
            if (total === randomNumber) {
                console.log("nice");
                wins++;
                reset();
            }
            else if (total > randomNumber) {
                console.log("you lose");
                losses++;
                reset();
            }
        })
        $('#purple-rupee').on ('click', function() {
        total = total + purple;
        console.log("New total= " + total);
        $('#finalTotal').text(total);
            if (total === randomNumber) {
                console.log("nice");
                wins++;
                reset();
            }
            else if (total > randomNumber) {
                console.log("you lose");
                losses++;
                reset();
            }
        });
        
    });