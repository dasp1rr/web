class Pizza {
  constructor(type, size) {
    this.types = {
      "Маргарита": { price: 500, calories: 300 },
      "Пепперони": { price: 800, calories: 400 },
      "Баварская": { price: 700, calories: 450 }
    };

    this.sizes = {
      "Большая": { price: 200, calories: 200 },
      "Маленькая": { price: 100, calories: 100 }
    };

    if (!this.types[type] || !this.sizes[size]) {
      throw new Error("Ошибка! Такой пиццы не существует.");
    }

    this.type = type;
    this.size = size;
    this.toppings = [];
  }

  addTopping(topping) {
    const toppingsList = {
      "Сливочная моцарелла": { name: "Сливочная моцарелла", price: 50, calories: 20 },
      "Сырный борт": { name: "Сырный борт", price: (this.size === 'Маленькая' ? 150 : 300), calories: (this.size === 'Маленькая' ? 50 : 100) },
      "Чедер и пармезан": { name: "Чедер и пармезан", price: (this.size === 'Маленькая' ? 150 : 300), calories: (this.size === 'Маленькая' ? 50 : 100) }
    };

    if (!toppingsList[topping]) {
      throw new Error("Ошибка! Такой добавки не существует");
    }

    this.toppings.push(toppingsList[topping]);
  }

  removeTopping(topping) {
    this.toppings = this.toppings.filter(t => t.name !== topping);
  }

  getToppings() {
    return this.toppings.map(t => t.name);
  }

  getSize() {
    return this.size;
  }

  getType() {
    return this.type;
  }

  calculatePrice() {
    let total = this.types[this.type].price + this.sizes[this.size].price;
    this.toppings.forEach(t => total += t.price);
    return total;
  }

  calculateCalories() {
    let total = this.types[this.type].calories + this.sizes[this.size].calories;
    this.toppings.forEach(t => total += t.calories);
    return total;
  }
}