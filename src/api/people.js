import client from '@/api/config/client.js';
import axios from 'axios';

const getChars = pageId => {
	return client.get(`/people?page=${pageId}`).then(response => {
		return response.data;
	})
};

const getDetails = char => {
		const { films, homeworld, vehicles, species } = char;
		const requests = films.concat(vehicles, species, homeworld);
		return axios.all(requests.map(req => axios.get(req)))
					.then(response => {
							return response;
					});
}

export { getChars, getDetails };