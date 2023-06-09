// hw 2.8

// Задание 1

const folk = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
function sortArr(a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if  (a.age < b.age) {
        return -1;
    } 
    return 0;
    
}

    console.log (folk.sort(sortArr));

// Задание 2

function isPositive(num) {
    return num > 0;
    }

    function isMale(person) {
        return person.gender === 'male';
    }

    function filter(arr, mainRule) {
        const conclusion = [];
        for (let i = 0; i < arr.length; i++) {
            if (mainRule(arr[i])) {
                conclusion.push(arr[i]);
            }
        }
        return conclusion;
    }
    
    console.log (filter([3, -4, 1, 9], isPositive)); 
    
    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
    ];
    
    console.log (filter(people, isMale)); 
    
// Задание 3

let time = setInterval(() => {
    let present = new Date();
    console.log (present)
}, 3000);

setTimeout(() => {
    clearInterval(time);
    console.log ('30 секунд прошло');
}, 3000);

// Задание 4
function delayForSecond(callback) {

    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log ('Прошла одна секунда');
			if(cb) {
                cb();
            }
    }, 1000)
}

function sayHi (name) {
    console.log (`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

// // hw 2.7

// // Задание 1
// let st = 'Строка'; 

// alert(st.toUpperCase());

// // Задание 2
// let firstStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// let firstSearch = 'ко';
// firstStart.forEach((firstStart) => {

// 	if (firstStart.toLowerCase().includes(firstSearch.toLowerCase())) {
// 		alert(firstStart);
// 	}
// });

// let secondStart = ['яблоко', 'груша', 'гриб', 'огурец'];
// let secondSearch = 'гру';
// secondStart.forEach((secondStart) => {

// 	if (secondStart.toLowerCase().includes(secondSearch.toLowerCase())) {
// 		alert(secondStart);
// 	}
// });

// let thirdStart = ['Дом', 'Банк', 'Больница', 'Театр'];
// let thirdSearch = 'Кино';
// thirdStart.forEach((thirdStart) => {

// 	if (thirdStart.toLowerCase().includes(thirdSearch.toLowerCase())) {
// 		alert(thirdStart);
// 	}
// });

// // Задание 3
// let oneNum = 32.58884;

// alert (Math.ceil(oneNum));
// alert (Math.floor(oneNum));
// alert (Math.round(oneNum));

// // Задание 4
// const arr = [52, 53, 49, 77, 21, 32]
// const minArr = Math.min(...arr)
// const maxArr = Math.max(...arr)
// alert ("Наименьшее число: " + minArr + "; Наибольшее число: " + maxArr)

// // Задание 5
// function getRandomOk(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// alert (getRandomOk(1, 10));

// // Задание 6
// const getArr = n => {
//     n = prompt ('Введите число')
//     let arr = [];
//     for (let i = 0; i < Math.floor(n / 2); i++)
//     arr.push(Math.floor(Math.random() * n));
//     return arr
// }

// alert ("Массив 1/2 введённого числа: " + getArr().join(', '));

// // Задание 7
// function getRandom(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//     alert (getRandom(10, 60));


// // Задание 8
// let currentDate = new Date();
// console.log(currentDate);

// // Задание 9
// const now = new Date()
// const getDate = new Date(now)
// getDate.setDate(now.getDate() + 73)

// alert (getDate);

// // Задание 10
// let nowDay = new Date();
// let option = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
// }

// let optionDay = {
//     weekday: 'long',
// }

// alert (`Дата: ${nowDay.toLocaleString('ru-RU', option)}` + " - это " + `${nowDay.toLocaleString('ru-RU', optionDay)}` + '\n' + `Время: ${nowDay.toLocaleTimeString()}`);

// // Задание 11
// let quest = () => {
// let frut = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
// frut = frut.sort(() => Math.random() - 0.5);
// let question = alert (`Запомните первый и последний фрукт: \n ${frut.join(', ')}`);
// let firstQuestion = prompt('Введите первый фрукт списка');
// let secondQuestion = prompt('Введите второй фрукт списка');
// if (firstQuestion.toUpperCase() == frut[0].toUpperCase() && secondQuestion.toUpperCase() == frut[6].toUpperCase()) {
//     alert ('Поздравлюем, Вы выиграли!!!')}
//     else if (firstQuestion.toUpperCase() !== frut[0].toUpperCase() || secondQuestion.toUpperCase() !== frut[6].toUpperCase()){
//         alert ('К сожалению угадан только один фрукт! Попробуйте ещё раз)')}
//         else {
//             alert ('гуляй, Вася')
//         }
// }
// quest();

// // hw 2.6

// // Задание 1
// const foundTen = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < foundTen.length; i++) {
//     if (foundTen[i] == 10) break;

//     alert ("Цикл выполнен до значения 10: " + foundTen[i]);
// };

// // Задание 2
// const numberInEl = [1, 5, 4, 10, 0, 3];

// alert ("Позиция числа 4 в массиве: " + numberInEl.indexOf(4));

// // Задание 3
// let probel = [1, 3, 5, 10, 20];
// probel = probel.join(' ');

// alert ("Вывод чисел через пробел с помощью join: " + probel);

// // Задание 4
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 		for (let j = 0; j < 3; j++) {
// 		arr[i].push(1);
// 	}
// };

// alert (arr);

// // Задание 5
// let massAdd = [1, 1, 1];
// massAdd.push (2, 2, 2);

// alert (massAdd);

// // Задание 6
// let delA = [9, 8, 7, 'a', 6, 5];
// delA = delA.sort();
// delA = delA.reverse();
// delA.splice(0, 1);

// alert (delA);

// // Задание 7
// let nomer = [9, 8, 7, 6, 5];
// let nomerAdd = nomer.includes(+prompt('Введите число')) ? 'Да' : 'Нет';

// alert (nomerAdd);

// // Задание 8
// let str = "abcdef";
// let reverse = str.split('').reverse().join('');

// alert (reverse);

// // Задание 9
// let secondMass = [[1, 2, 3], [4, 5, 6]];
// let result = [].concat(...secondMass);

// alert (result);

// // Задание 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length - 1; i++) {
// alert ( + arr[i] + arr[i + 1]);
// };

// // Задание 11
// const numb = [2, 7, 4, 9, 3];
// function numbKv(numb) {
//     return numb.map (a => a ** 2);
// };

// alert ('Квадрат чисел из массива: ' + numbKv(numb).join([', ']));

// // Задание 12
// let wor = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// let lenths = wor.map(function(word) {
//     return word.length;
// });

//     alert (lenths.join([', ']));

// // Задание 13
// let masNorm = [-25, 25, 0, -1000, -2, -200, -163, -26, -4, 0, 7, 76, 8, 99, 100];
// let masNormMinus = masNorm.filter((x) => {
//     return x % 2 !== 0;
// });

// alert ("Все нечётные числа массива: " + masNormMinus.join([', ']));

// // hw 2.5

// // Задание 1
// function smallNum (a, b) {
//     return a <= b ? a : b;
// };

//     alert (smallNum(8, 4));
//     alert (smallNum(6, 6));
//     alert (smallNum(11, 75));

// // Задание 2
// function quantity (n) {
//     if (n % 2 == 0) {
//         return 'Число чётное';
//     }

//     else {
//         return 'Число не чётное';
//     }
// };

//     alert (quantity(prompt('Введите число для проверки его чётности')));

// // Задание 3.1
// function countSquare (n) {
//     return n ** 2;
// };

//     alert (countSquare(prompt('Введите число для возведения в квадрат')));

// // Задание 3.2
// function countResetSquare (q) {
//     return (Math.sqrt(q));
// };

//     alert (countResetSquare(prompt('Введите число для возвращения квадрата числа')));

// // Задание 4
// function checkAge (age) {
//     if (age < 1) {
//         alert ('Вы ввели неправильное значение');
//     }

//     else if (age <= 12) {
//         alert ('Привет, друг!');
//     }

//     else if (age > 12) {
//         alert ('Добро пожаловать!');
//     }
// };

// checkAge(prompt('Введите ваш возраст'));

// // Задание 5
// function checkDigit (q, w) {
//     if (isFinite(q) && isFinite(w)) {
//         alert (q * w);
//     }

//     else {
//         alert ('Одно или оба значения не являются числом');
//     }
// };

// checkDigit(prompt('Введите первое число'), prompt('Введите второе число'));

// // Задание 6
// function cubeNum (inform) {
//     if (isFinite(inform)) {
//         alert ('Введённое число в кубе равняется ' + inform ** 3);
//     }

//     else {
//         alert ('Переданный параметр не является числом');
//     }
// };

// cubeNum (prompt('Введите число для возведения в куб'));

// // Задание 7
// function getCircleArea() {
//     return this.pi * this.radius ** 2;
// }
// function getCirclePerimeter() {
//     return 2 * this.pi * this.radius;
// };

// const circle1 = {
//     radius: 4,
//     pi: 3.14,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
// };

// const circle2 = {
//     radius: 7,
//     pi: 3.14,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
// };

// alert(circle1.getArea());
// alert(circle1.getPerimeter());
// alert(circle2.getArea());
// alert(circle2.getPerimeter());

// // Задание 8
// let monthNumber = prompt('Введите номер месяца');
// switch (monthNumber) {
//     case '1':
//     case '2':
//     case '12':
//         alert ('Зима');
//         break;

//     case '3':
//     case '4':
//     case '5':
//         alert ('Весна');
//         break;

//     case '6':
//     case '7':
//     case '8':
//         alert ('Лето');
//         break;

//     case '9':
//     case '10':
//     case '11':
//         alert ('Осень');
//         break;

//     default:
//         alert ('Некорректный номер месяца');
//         break;
// };

// // hw 2.4

// // Задание 1
// let a = 0;
// while (a <= 1) {
//     alert ('Привет');
//     a++;
// };

// // Задание 2
// let b = 1
// while (b < 6) {
//     alert (b);
//     b++;
// };

// // Задание 3
// let c = 7;
// let d = 22;
// while (c <= d){
//     alert(c);
//     c++;
// };

// // Задание 4
// let obj = {
//     'Коля': '200',
//     'Вася': '300',
//     'Петя': '400',
// };

// for(key in obj){
//     alert (`${ key } - Зарплата ${ obj[key] } долларов`);
// };

// // Задание 5
// for (let n = 1000, num = 0; n > 50 ; num++) {
//     n /= 2;

//     alert (n);
// };

// // Задание 6
// for (let friday = 5, dayNum = 1; dayNum <= 31; dayNum++) {
//     if (dayNum === friday){
//     friday += 7;

//     alert (`Сегодня пятница, ${ dayNum } -е число.Необходимо подготовить отчёт.`);
//     }
// };

// // hw 2.3

// // Задание 1
// let password = ('123456');
// let passwordAdd = (prompt('Введите пароль'));
// if (passwordAdd === password) {
//     alert ('Пароль введен верно');
// }

// else {
//     alert ('Пароль введен неверно');
// };

// // Задание 2
// let c = Number('0');
// if (c > 0 && c < 10) {
//     alert ('Верно');
// }

// else {
//     alert ('Неверно');
// }

// c = Number('10');
// if (c > 0 && c < 10) {
//     alert ('Верно');
// }

// else {
//     alert ('Неверно');
// }

// c = Number('-3');
// if (c > 0 && c < 10) {
//     alert ('Верно');
// }

// else {
//     alert ('Неверно');
// }

// c = Number('2');
// if (c > 0 && c < 10) {
//     alert ('Верно');
// }

// else {
//     alert('Неверно');
// };

// // Задание 3
// let d = Number(333);
// let e = Number(3);
// if (d > e || e > d) {
//     alert ('Верно');
// }

// else {
//     alert ('Неверно');
// };

// // Задание 4
// let a = '2';
// let b = '3';

// alert (+a + +b);

// // Задание 5

// let monthNumber = prompt('Введите номер месяца');
// switch (monthNumber) {
//     case '1':
//     case '2':
//     case '12':
//         alert ('Зима');
//         break;

//     case '3':
//     case '4':
//     case '5':
//         alert ('Весна');
//         break;

//     case '6':
//     case '7':
//     case '8':
//         alert ('Лето');
//         break;

//     case '9':
//     case '10':
//     case '11':
//         alert ('Осень');
//         break;

//     default:
//         alert ('Такого месяца не существует!');
//         break;
// }

// // hw 2.2

// // Задание 1
// let a = 10;

// alert(a);

// // Задание 2
// let releaseFirstIphone = 2007;

// alert (`Год выпуска первого Iphone: ${ releaseFirstIphone } `);

// // Задание 3
// let inventorName = 'Брендан Айком';

// alert (`Создатель JavaScript: ${ inventorName } `);

// // Задание 4
// let b = 2;

// alert (`Сумма: ${ a += b }, Разность: ${ a -= b }, Произведение: ${ a *= b }, Частное: ${ a /= b } `);

// // Задание 5
// alert (`2 в 5 степени: ${ b ** 5 } `);

// // Задание 6
// a = 9;

// alert (`Остаток от 9 / 2: ${ a % b } `);

// // Задание 7 - не сделано!!!
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num ++;
// num --;

// alert (num);

// // Задание 8
// let age = prompt('Сколько вам лет?');

// alert (age);

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

// alert (user[info]);

// // Задание 10
// let userName = prompt('Как тебя зовут?');

// alert (`Привет, ${ userName } !`);