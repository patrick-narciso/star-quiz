import client from '@/api/config/client.js';

export default {
	getChars(pageId) {
		return client.get(`/people?page=${pageId}`).then(response => {
			return response.data;
		})
	}
}