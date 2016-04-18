// FizzBuzz
// User presses a button to display a new number
// numbers must start at 1 and increase 1 each time 
// every 3rd number must display Fizz 
// every 5th number must display Buzz 


// User presses a button to display a new number

// numbers must start at 1 and increase 1 each time 


// every 3rd number must display Fizz 
// every 5th number must display Buzz 

var num = 0
runNum function(num){
	alert(num);
	findFizz();
}

findFizz function(num){
	if (num%3=0) {
		console.log('Fizz');
	} else {
		findBuzz();
	};
}
findBuzz function(num){
	if (num%5=0){
		console.log('Buzz')
	} else {
		console.log(num)
	};
}



// 

