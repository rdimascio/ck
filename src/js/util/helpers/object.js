'use strict';

const isObjectEmpty = (obj) => {
	const OBJ = Object.assign({}, obj);

	return Object.entries(OBJ).length === 0 && OBJ.constructor === Object;
};

const uniqueObjectValues = (obj, value) => {
	const OBJ = [...obj];
	const SEEN = new Set();

	const UNIQUE_OBJECT = OBJ.filter((item) => {
		const DUPLICATE = SEEN.has(item[value]);
		SEEN.add(item[value]);
		return !DUPLICATE;
	});

	return UNIQUE_OBJECT;
};

export {isObjectEmpty, uniqueObjectValues};
