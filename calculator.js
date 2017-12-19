// JavaScript Document

// Change Display
function d(val) {
	document.getElementById("d").value=val;
}

// Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

// Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}

function square() {
	// evaluate the current equation
	e();
	
	// get the value of the screen and square it
	var x = document.getElementById("d").value;
	x=x*x;
	
	// display the result
	d(x);
}