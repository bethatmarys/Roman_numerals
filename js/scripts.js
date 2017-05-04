//

// var input = $parseInt("#input").val();




// foo[input - 1] = VIII
//
// take an input, loop through the numeral array, and divide (modulo)
// by each number in that array
//
// newArray.push(foo[i]) // pushes "I" into a new array
//
//
//

// //back end
var romanSingleDigit = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX",]
var numberSingleDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function romanizeSingleDigit(x){//this establishes a function called romanizeSingleDigit.
  for(var index=0; index <= romanSingleDigit.length; index += 1){//tell the for loop to go through roman single digit array
    if (x === index) {//for each loop if the current index is = to x (userInput)
      return romanSingleDigit[index];//then return the value of the current index of array romanSingleDigit
    };
  };
};

function makeUserArray(number){
  var ourNumber = number;
  ourNumber.toString();
  console.log(ourNumber);
  // return string.split("");
}

//front end
$(function(){//calling a fucntion

  $("#user-form").submit(function(event){//the beginning of a fucntion when you submit a form
    event.preventDefault();//stops from continuelly sending to a server
    debugger;

    var userInput = parseInt($("#user-input").val());//parses the user input and stores in a variable

    var userInputArray = makeUserArray(userInput);

    // var romanized = romanizeSingleDigit(userInput);//runs the user input through romanizeSingleDigit and returns it romanized

    console.log(userInputArray);



  });

});
