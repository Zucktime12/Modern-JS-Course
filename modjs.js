// function getDate() {
// 	var date = new Date();

// 	return date;
// }

// getDate();
// console.log(date);

// function discountPrices(prices, discount) {
// 	var discounted = [];

// 	for (var i = 0; i < prices.length; i++) {
// 		var discountedPrice = prices[i] * (1 - discount);
// 		var finalPrice = Math.round(discountedPrice * 100) / 100;
// 		discounted.push(finalPrice);
// 	}

// 	console.log(i);
// 	console.log(discountedPrice);
// 	console.log(finalPrice);

// 	return discounted;
// }

// discountPrices([100,200,300], .5);

// Object and Array Destructuring 

// var user = {
// 	name: 'Brandon',
// 	handle: '@Zucktime12',
// 	location: 'Denver, Colorado'
// };

// Extracting
// var name = user.name;
// var handle = user.handle;
// var location = user.location;
// these 2 examples are the same

// var {name, handle, location} = user;

// function getUser() {
// 	return {
// 	name: 'Brandon',
// 	handle: '@Zucktime12',
// 	location: 'Denver, Colorado'
//   };
// };

// var {name, handle, location} = getUser;

// Shorthand Property and method names

function formatMessage(name, id, avatar) { 
	return {
		name: name, // when Keys have the same name as the property value they can be removed. 
		id: id, 
		avatar: avatar, 
		timestamp: Date.now(),
		save: function () { // : function is not needed when using a function as an object
			//save
		}
	}
}
// shorthand for same function as above. 

function formatMessage(name, id, avatar) { 
	return {
		name, // when Keys have the same name as the property value they can be removed. 
		id, 
		avatar, 
		timestamp: Date.now(),
		save () { // : function is not needed when using a method (a function that is a property of an object is a method)
			//save
		}
	}
}




