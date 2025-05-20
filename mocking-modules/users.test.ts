import axios from "axios";
import { Users } from "./users";

jest.mock('axios');

test('test mocking axios module', async () => {
	const users = [{ name: 'Bob'	}];
	const response = { data: users };
	(axios as any).get.mockResolvedValue(response);

	await Users.getAll().then(data => expect(data).toEqual(users))
})