import axios from 'axios';

export const getFlickr = async (opt) => {
	const key = '51b057cd44f5185603bcc94da4cdd6ad';
	const username = '195299958@N03';
	const method_people = 'flickr.people.getPhotos';
	const method2 = 'flickr.photos.search';
	const num = 50;
	let url = '';

	if (opt.type === 'interest') {
		url = `https://www.flickr.com/services/rest/?method=${method_people}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${username}`;
	}

	if (opt.type === 'search') {
		url = `https://www.flickr.com/services/rest/?method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
	}

	return await axios.get(url);
};
