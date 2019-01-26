//by Denys Pysmennyi

function perform() {
	
	let value=null;
	//TODO implement
	return new Promise(function(resolve, reject){
		resolve(
			value
		);
	});
}

perform(null, function(value){ // value === null

	var param = 1;
	console.log(param); // 1
	return param;
})
.then(function(param) { // param === 1
	console.log(++param); // 2
	return param;
})
.then(function(param) { // param === 2
	console.log(++param); // 3
	return param;
})
.then(function(param) { // param === 3
	console.log(++param); // 3
	return param;
});
