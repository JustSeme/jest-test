jest.mock('./foo');
import foo from './foo';

test('mock implementation foo should return 42', () => {
  foo.mockImplementation(() => 42);
  expect(foo()).toBe(42);
});

const myMockFn = jest
  .fn()
  .mockImplementationOnce((cb) => cb(null, true))
  .mockImplementationOnce((cb) => cb(null, false));

test('mock fn should return true at first call and false at second', () => {
  myMockFn((err, val) => console.log(val));
  myMockFn((err, val) => console.log(val));
});

const myMockFn2 = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

test('mock fn shoulld return calls in sequence and default as default', () => {
  expect(myMockFn2()).toBe('first call');
  expect(myMockFn2()).toBe('second call');
  expect(myMockFn2()).toBe('default');
  expect(myMockFn2()).toBe('default');
});
