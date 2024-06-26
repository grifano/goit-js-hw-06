/*

Напиши клас StringBuilder, який приймає один 
параметр initialValue — довільний рядок, який 
записується у приватну властивість value об'єкта, 
що створюється.

Оголоси наступні методи класу:

- getValue() — повертає поточне значення приватної 
властивості value.
- padEnd(str) — отримує параметр str (рядок) і додає 
його в кінець значення приватної властивості value 
об'єкта, який викликає цей метод.
- padStart(str) — отримує параметр str (рядок) і додає 
його на початок значення приватної властивості value 
об'єкта, який викликає цей метод.
- padBoth(str) — отримує параметр str (рядок) і додає 
його на початок і в кінець значення приватної властивості 
value об'єкта, який викликає цей метод.

**/

class StringBuilder {
  #initialValue;

  constructor(initialValue) {
    this.#initialValue = initialValue;
  }

  getValue() {
    return this.#initialValue;
  }
  padStart(str) {
    this.#initialValue = str + this.#initialValue;
  }
  padEnd(str) {
    this.#initialValue += str;
  }
  padBoth(str) {
    this.#initialValue += str;
    this.#initialValue = str + this.#initialValue;
  }
}

// Output
console.log('--- Task 3 ---');
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
