// eslint-disable-next-line object-curly-newline
import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../app';

describe.each([Bowerman, Swordsman, Magician, Daemon, Undead, Zombie])('Проверяем %p', (Character) => {
  test('Принимает имя и тип персонажа', () => {
    const character = new Character('Name', Character.name);
    expect(character.name).toBe('Name');
  });

  test('Не принимает имя короче двух символов', () => {
    expect(() => new Character('N', Character.name)).toThrow();
  });

  test('Не принимает имя длиннее десяти символов', () => {
    expect(() => new Character('_1234567890', Character.name)).toThrow();
  });

  test('Не принимает категориию персонажа которого нет в списке', () => {
    expect(() => new Character('Name', 'Lion King')).toThrow();
  });

  test.each([
    {
      prop: 'level',
      func(obj) {
        return obj.level + 1;
      },
    },
    {
      prop: 'attack',
      func(obj) {
        return obj.attack * 1.2;
      },
    },
    {
      prop: 'defence',
      func(obj) {
        return obj.defence * 1.2;
      },
    },
    {
      prop: 'health',
      func() {
        return 100;
      },
    },
  ])('Срабатывает метод levelUp с полем %s', ({ prop, func }) => {
    const character = new Character('Name', Character.name);
    const propAfter = func(character);
    character.levelUp();

    expect(character[prop]).toBe(propAfter);
  });

  test('Проверяем, что нельзя повысить левел умершего', () => {
    const character = new Character('Name', Character.name);
    function levelUpCheck() {
      character.health = 0;
      character.levelUp();
    }

    expect(levelUpCheck).toThrow();
  });

  test('Проверяем нанесение урона, метод damage', () => {
    const character = new Character('Name', Character.name);
    const points = 10;
    const healthAfterDamage = character.health - points * (1 - character.defence / 100);
    character.damage(points);

    expect(character.health).toBe(healthAfterDamage);
  });

  test('При уроне значение health не может становиться меньше нуля', () => {
    const character = new Character('Name', Character.name);
    const points = 50;
    const healthAfterDamage = 0;
    character.health = 1;
    character.damage(points);

    expect(character.health).toBe(healthAfterDamage);
  });
});
