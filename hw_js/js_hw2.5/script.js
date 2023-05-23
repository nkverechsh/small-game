// hw 2.5

// Задание 1



// // hw 2.4

// // Задание 1
// let a = 0;
// while (a <=1) {
//     alert ('Привет');
//     a++;
// }

// // Задание 2
// let b = 1
// while (b<6) {
//     alert(b);
//     b++;
// }

// // Задание 3
// let c = 7;
// let d = 22;
// while (c<=d){
//     alert(c);
//     c++;
// }

// // Задание 4
// let obj = {
//     'Коля': '200',
//     'Вася': '300',
//     'Петя': '400',
// }
// for(key in obj){
//     alert(`${key} - Зарплата ${obj[key]} долларов`);
// }

// // Задание 5
// for (let n = 1000, num = 0; n > 50 ; num++) {
//     n /= 2;
//         alert(n);
// }

// // Задание 6
// for (let friday = 5, dayNum = 1; dayNum <= 31; dayNum++) {
//     if (dayNum === friday){
//     friday+=7;
//     alert(`Сегодня пятница, ${dayNum}-е число. Необходимо подготовить отчёт.`);
//     }
// }

// // hw 2.3

// // Задание 1
// let password = ('123456');
// let passwordAdd = (prompt('Введите пароль'));
// if (passwordAdd === password) {
//     alert('Пароль введен верно');
// }
// else {
//     alert('Пароль введен неверно');
// }

// // Задание 2
// let c = Number('0');
// if (c > 0 && c < 10) {
//     alert('Верно');
// }
// else {
//     alert('Неверно');
// }

// c = Number('10');
// if (c > 0 && c < 10) {
//     alert('Верно');
// }
// else {
//     alert('Неверно');
// }

// c = Number('-3');
// if (c > 0 && c < 10) {
//     alert('Верно');
// }
// else {
//     alert('Неверно');
// }

// c = Number('2');
// if (c > 0 && c < 10) {
//     alert('Верно');
// }
// else {
//     alert('Неверно');
// }

// // Задание 3
// let d = Number(333);
// let e = Number(3);
// if (d > e || e > d) {
//     alert('Верно');
// }
// else {
//     alert('Неверно');
// }

// // Задание 4
// let a = '2';
// let b = '3';
// // Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
// alert(+a + +b);

// // Задание 5

// let monthNumber = prompt('Введите номер месяца');
// switch (monthNumber) {
//     case '1':
//     case '2':
//     case '12':
//         alert('Зима');
//         break;

//     case '3':
//     case '4':
//     case '5':
//         alert('Весна');
//         break;

//     case '6':
//     case '7':
//     case '8':
//         alert('Лето');
//         break;

//     case '9':
//     case '10':
//     case '11':
//         alert('Осень');
//         break;

//     default:
//         alert('Такого дня недели не существует!');
//         break;
// }

// // hw 2.2

// // Задание 1
// let a = 10;
// alert(a);

// // Задание 2
// let releaseFirstIphone = 2007;
// alert(`Год выпуска первого Iphone: ${releaseFirstIphone}`);

// // Задание 3
// let inventorName = 'Брендан Айком';
// alert(`Создатель JavaScript: ${inventorName}`);

// // Задание 4
// let b = 2;
// alert(`Сумма: ${a += b}, Разность: ${a -= b}, Произведение: ${a *= b}, Частное: ${a /= b}`);

// // Задание 5
// alert(`2 в 5 степени: ${b ** 5}`);

// // Задание 6
// a = 9;
// alert(`Остаток от 9/2: ${a % b}`);

// // Задание 7 - не сделано!!!
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num ++;
// num --;
// alert(num);

// // Задание 8
// let age = prompt('Сколько вам лет?');
// alert(age);

// // Задание 9
// const user = {
//     name: 'Мишаня',
//     age: Number('86'),
//     isAdmin: true,
// };
//     user['city of residence'] = 'Иркутск';
//     user.age = 32;
//     delete user['city of residence'];
//     let info = prompt('Какую информацию хотите узнать о пользователе?');
//     alert(user[info]);

// // Задание 10
// let userName = prompt('Как тебя зовут?');
// alert (`Привет, ${userName} !`)
