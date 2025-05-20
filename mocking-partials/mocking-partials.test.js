import defaultExport, { foo, bar } from './foo-bar-baz'

jest.mock('./foo-bar-baz', () => {
	const originalModule = jest.requireActual('./foo-bar-baz');

	return {
		__esModule: true,
		...originalModule,
		default: jest.fn(() => 'mocked baz'),
		foo: 'mocked foo',
	}
})

test('shoud do a partial mock', () => {
	expect(foo).toBe('mocked foo');
	expect(bar()).toBe('bar');

	const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();
})