/*

Створи клас Storage, який створюватиме об'єкти для 
управління складом товарів. Клас очікує лише один 
аргумент — початковий масив товарів, який записується 
до створеного об'єкта в приватну властивість items.

Оголоси наступні методи класу:

- getItems() — повертає масив поточних товарів 
у приватній властивості items.
- addItem(newItem) — приймає новий товар newItem 
і додає його до масиву товарів у приватну властивість 
items об'єкта.
- removeItem(itemToRemove) — приймає рядок з назвою 
товару itemToRemove і видаляє його з масиву товарів 
у приватній властивості items об'єкта.

**/

class Storage {
  #orders;

  constructor(orders) {
    this.#orders = orders;
  }

  getItems() {
    return this.#orders;
  }
  addItem(newItem) {
    this.#orders.push(newItem);
  }
  removeItem(itemToRemove) {
    this.#orders = this.#orders.filter(item => {
      if (item !== itemToRemove) return item;
    });
  }
}

// Output
console.log('--- Task 2 ---');
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
