import getBuffer from '../Getbuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('Должен конвертировать данные в строку', () => {
  const convertArr = new ArrayBufferConverter();
  convertArr.load(getBuffer());
  expect(convertArr.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
