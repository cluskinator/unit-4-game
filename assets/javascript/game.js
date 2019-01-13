//document init.
$(document).ready(function(){
//initializing variables to track scores and assign default random values 1-10 for crystals.
    var crystal1 = Math.floor(Math.random() * 10 + 1);
    var crystal2 = Math.floor(Math.random() * 10 + 1);
    var crystal3 = Math.floor(Math.random() * 10 + 1);
    var crystal4 = Math.floor(Math.random() * 10 + 1);
    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    
//this  calculates a random score 25-200 and prints it to the html. 
    var totalScore = Math.floor(Math.random() * 200 + 25);
    $('#score').html(totalScore);
//realized that i couldn't set the score too low or else there'd be a chance of having a number generated that couldn't add up.  or a prime number.  it's actually still possible in this game to never win,
//but nothing in the requirements that state a winner must be found.  still an element of luck I assume..?
    function reset () {
        totalScore = Math.floor(Math.random() * 200 + 25);
        currentScore = 0;
        crystal1 = Math.floor(Math.random() * 10 + 1);
        crystal2 = Math.floor(Math.random() * 10 + 1);
        crystal3 = Math.floor(Math.random() * 10 + 1);
        crystal4 = Math.floor(Math.random() * 10 + 1);
        $('#score').html(totalScore);
    }

    function win () {
        wins++;
        $('#wins').html(wins);
        console.log("You win!");
        reset();
    }

    function lose () {
        losses++;
        $('#losses').html(losses);
        console.log("You lose!");
        reset();
    }

//click functions for the gems.  each one is the same except for the random number generated.  
//if the current score is greater than total score lose.  else win.
    $('#crystal1').on('click', function(){
        currentScore = currentScore + crystal1;
        $('#currentScore').html(currentScore); 
        if (currentScore === totalScore) {
            win();
        }
        else if (currentScore > totalScore){
            lose();
        }   
    })  
    $('#crystal2').on('click', function () {
        currentScore = currentScore + crystal2;
        $('#currentScore').html(currentScore);
        if (currentScore === totalScore) {
            win();
        }
        else if (currentScore > totalScore) {
            lose();
        }
    })
    $('#crystal3').on('click', function () {
        currentScore = currentScore + crystal3;
        $('#currentScore').html(currentScore);
        if (currentScore === totalScore) {
            win();
        }
        else if (currentScore > totalScore) {
            lose();
        }
    })
    $('#crystal4').on('click', function () {
        currentScore = currentScore + crystal4;
        $('#currentScore').html(currentScore);
        if (currentScore === totalScore) {
            win();
        }
        else if (currentScore > totalScore) {
            lose();
        }
    });   
});


