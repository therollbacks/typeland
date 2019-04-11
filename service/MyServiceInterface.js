import {db} from '../db.js';

export const addItem = (item, uri, score) => {
	
	var newPostRef = db.ref('/items').push({
		name: item,
		avatar: uri,
		score: 0
	});

	var postId = newPostRef.key;
	return postId
}

export const updateItem = (objectid, score) => {
	
	var adaNameRef = db.ref('/items/' + objectid);

	adaNameRef.update({ score: score });
}

// export const sortItem = (objectid) => {
	

//         db.ref("/items").orderByChild("")
//         .limitToFirst(5)
//         .once("value")
//         .then(function(snapshot){ ... })


// }
