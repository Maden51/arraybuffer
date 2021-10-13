export default class ArrayBufferConverter {
  load(value) {
    this.buffer = value;
  }

  toString() {
    const arr = new Uint16Array(this.buffer);
    return String.fromCharCode(...arr);
  }
}
