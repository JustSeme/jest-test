import axios from 'axios'

export class Users {
	static async getAll() {
		return axios.get('http://localhost:3000/users').then(resp => resp.data);
	}
}