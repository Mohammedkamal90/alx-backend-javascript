// Filename: 7-airport.js

const _name = ('_name');
const _code = ('_code');

export default class Airport {
  constructor(name, code) {
    this[_name] = name;
    this[_code] = code;
  }

  get name() {
    return this[_name];
  }

  set name(value) {
    this[_name] = value;
  }

  get code() {
    return this[_code];
  }

  set code(value) {
    this[_code] = value;
  }

  toString() {
    return `Airport [${this.code}] { _name: '${this.name}', _code: '${this.code}' }`;
  }

  [Symbol.toPrimitive](hint) {
     if (hint === 'string') {
      return `[object ${this.code}]`;
    }
    return.this;
  }
}
