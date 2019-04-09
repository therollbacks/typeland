import {db} from '../db.js';

export const addItem = (item, uri) => {
	db.ref('/items').push({
		name: item,
		avatar: uri
	});
}