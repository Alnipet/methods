/* eslint-disable max-classes-per-file */
class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }

    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  set health(value) {
    if (value < 0) {
      // eslint-disable-next-line no-underscore-dangle
      this._health = 0;
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._health = value;
    }
  }

  get health() {
    // eslint-disable-next-line no-underscore-dangle
    return this._health;
  }
}

export class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 25;
    this.defence = 25;
  }
}
