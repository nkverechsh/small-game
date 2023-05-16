// Задание 1
let a = 10;
alert(a);

// Задание 2
let releaseFirstIphone = 2007;
alert(`Год выпуска первого Iphone: ${releaseFirstIphone}`);

// Задание 3
let inventorName = 'Брендан Айком';
alert(`Создатель JavaScript: ${inventorName}`);

// Задание 4
let b = 2;
alert(`Сумма: ${a += b}, Разность: ${a -= b}, Произведение: ${a *= b}, Частное: ${a /= b}`);

// Задание 5
alert(`2 в 5 степени: ${b ** 5}`);

// Задание 6
a = 9;
alert(`Остаток от 9/2: ${a % b}`);

// Задание 7 - не сделано!!!
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age = prompt('Сколько вам лет?');
alert(age);

// Задание 9
const user = {
    name: 'Мишаня',
    age: Number('86'),
    isAdmin: true,
};
    user['city of residence'] = 'Иркутск';
    user.age = 32;
    delete user['city of residence'];
    let info = prompt('Какую информацию хотите узнать о пользователе?');
    alert(user[info]);

// Задание 10
let userName = prompt('Как тебя зовут?');
alert (`Привет, ${userName} !`)


