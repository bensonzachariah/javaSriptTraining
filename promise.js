 //resolve promise
	let promise = new Promise(function(resolve, reject) {
	setTimeout(() => resolve("done!"), 1000);
	});
	promise.then(                    // resolve runs the first function in .then
	result => alert(result), 
	error => alert(error) 
	);