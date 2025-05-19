
test('instances and context this', () => {
	const myMock1 = jest.fn();
	const a = new myMock1();
	
	console.log(myMock1.mock.instances);
	
	const myMock2 = jest.fn();
	const b = { property: 'b' };
	const bound = myMock2.bind(b);
	bound();
	
	// Свойство mock в моковой функции сохраняет в себя контекст this
	console.log(myMock2.mock.contexts);
})


test.only('mock property in function', () => {
	const someMockFunction = jest.fn((x) => x + 42);
	
	someMockFunction(10);
	expect(someMockFunction.mock.calls).toHaveLength(1)
	console.log(someMockFunction.mock.calls);

	expect(someMockFunction.mock.calls[0][0]).toBe(10);
	
	expect(someMockFunction.mock.results).toHaveLength(someMockFunction.mock.calls.length);
	console.log(someMockFunction.mock.results[0]);
	expect(someMockFunction.mock.results[0].value).toBe(52);

	console.log(someMockFunction.mock.contexts);
	
})