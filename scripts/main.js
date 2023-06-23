// Простой пример создания класса
/*class Point{
    x = 0;
    y = 0;
    msg = 'empty';
    print() {
        console.log(
            `x = ${this.x}\n` +
            `y = ${this.y}\n` +
            `msg: ${this.msg}`
        );
    }
    distance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
};

var A = new Point(); // объект класса Point
var B = new Point(); // объект класса Point

A.x = 4.5;
A.y = 6;
console.log(`x = ${A.x}`);
console.log(`y = ${A.y}`);
console.log(A);
console.log(B);

A.print();
B.print();

console.log(`Расстояние до центра: ${A.distance()}`);*/

// Класс сс конструктором
/*class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(`${this.name} сказал ${this.voice}`);
    }
};

var cat = new Animal('Vasya', 7);

cat.say();

cat.voice = 'Мяу';
cat['body color'] = 'рыжий';
console.log(cat['body color']);
console.log(cat);

cat.say();*/


// Принципы ООП
class Person {
    static #number = 0; // статическое поле класса
    #id; // приватное поле класса
    constructor(name, birthday) {
        this.name = name;
        this.birthday = new Date(birthday);
        Person.#number++;
        this.#id = Person.number;
    }
    static showNumber() {
        console.log(`Кол-во объектов: ${Person.#number}`);
    }
    #getBirthday() {
        return this.birthday.getDate() + '.' + 
        (this.birthday.getMonth() + 1) + '.' +
        this.birthday.getFullYear();
    }
    print() {
        console.log(
            `Имя: ${this.name}\n` +
            `Дата рождения: ${this.#getBirthday()}\n` +
            `ID: ${this.#id}`
        );
    }
    get id() {
        console.log('Геттер id');
        return this.#id;
    }
    set id(id) {
        console.log('Сеттер id');                       
        this.#id = id;
    }
}

class Student extends Person{
    #grades;
    constructor(name, birthday, group, grades) {
        super(name, birthday);
        this.group = group;
        this.#grades = grades;
    }
    setGrade(subject, grade) {
        this.#grades[subject] = grade;
    }
    #getBirthday() {
        return this.birthday.getDate() + '.' + 
        (this.birthday.getMonth() + 1) + '.' +
        this.birthday.getFullYear();
    }
    #getGrades() {
        let result = '';
        for(let key in this.#grades)
            result += '\t' + key + ': ' + this.#grades[key] + '\n';
        return result;
    }
    print() {
        console.log(
            `Имя: ${this.name}\n` +
            `Дата рождения: ${this.#getBirthday()}\n` +
            `ID: ${this.id}\n` +
            `Группа: ${this.group}\n` +
            `Оценки:\n${this.#getGrades()}`
        );
    }
}

const stud1 = new Student(
    'NoName',
    '06/20/2000',
    'БВ113',
    {
        'Основы C++': 10,
        'Microsoft .NET Framework C#': 12,
        'Основы информационных технологий': 9,
        'HTML & CSS': 12
    }
);

stud1.setGrade('UML', 11);

console.log(stud1);
stud1.print();

//const obj1 = new Person('Big Smoke', '10/10/1986');
//const obj2 = new Person('Carl Jhonson', '11/11/1983');

//console.log(obj1);
//console.log(obj2);

//Person.showNumber();                                  

/*const obj = new Person('Иванов Иван', '06/20/1990');

// obj.#id = 1; // ОШИБКА, т.к. поле приватное
// obj.id = 1; // создание нового поля

console.log(obj);

obj.id = 10;

console.log(`ID: ${obj.id}`);
console.log(obj.id = 7);

obj.print();*/