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

function romanizeSingleDigit(x){
  for(var index=0; index <= romanSingleDigit.length; index += 1){
    if (x === index) {
      return romanSingleDigit[index];
    };
  };
};
//front end
$(function(){

  $("#user-form").submit(function(event){
    event.preventDefault();
    debugger;

    var userInput = parseInt($("#user-input").val());

    var romanized = romanizeSingleDigit(userInput);

    console.log(romanized);



  });

});
