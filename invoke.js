/closure function
	var add = function () {
	var counter = 0;
	return function () {counter += 1; return counter;}
	}();
	console.log(add());
	
	//invoking func as a func
	function func(a,b){
    return a*b;
    }
    console.log(func(4,3));
	
	//global object by default is window 
	function func(a,b){
	return a*b;
	}
	console.log(window.func(5,5));
	
	//invoking func using method
	var person = {
	firstName:"aryan",
	lastName: "mp",
	fullName: function() {
    return this.firstName + " " + this.lastName;
	}
	}
	console.log(person.fullName());
	
	

	//function constructor
	function func(arg1, arg2) {  
	this.firstName = arg1;
	this.lastName  = arg2;
	}	

	var obj = new func("aryan","mp");  //creates new object
	console.log(obj.lastName);

	