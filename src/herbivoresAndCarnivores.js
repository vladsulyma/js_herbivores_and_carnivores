'use strict';

'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeIfDead(animal) {
    if (animal.health < 1) {
      const index = Animal.alive.indexOf(animal);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health = 100) {
    super(name, health);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(prey) {
    if (prey.hidden === false && typeof prey.hide === 'function') {
      prey.health -= 50;
      Animal.removeIfDead(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
