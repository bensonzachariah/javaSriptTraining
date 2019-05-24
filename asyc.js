	//using async keyword
	async function f() {
	return 1;
	}
	f().then(alert);
	
	//explicitly resolve promise
	async function f(){
	return Promise.resolve(1);
	}
	f().then(alert);