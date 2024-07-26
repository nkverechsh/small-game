    // Времена года

    function oneGame() {
        let monthNumber = prompt('Введите номер месяца');
            switch (monthNumber) {
                case '1':
                case '2':
                case '12':
                    alert ('Зима');
                    break;

                case '3':
                case '4':
                case '5':
                    alert ('Весна');
                    break;

                case '6':
                case '7':
                case '8':
                    alert ('Лето');
                    break;

                case '9':
                case '10':
                case '11':
                    alert ('Осень');
                    break;

                default:
                    alert ('Некорректный номер месяца');
                    break;
            }
    }

    // Запомни слова

    function secondGame() {
        let quest = () => {
            let frut = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
            frut = frut.sort(() => Math.random() - 0.5);
            let question = alert (`Запомните первый и последний фрукт: \n ${frut.join(', ')}`);
            let firstQuestion = prompt('Введите первый фрукт списка');
            let secondQuestion = prompt('Введите второй фрукт списка');
            if (firstQuestion.toUpperCase() == frut[0].toUpperCase() && secondQuestion.toUpperCase() == frut[6].toUpperCase()) {
                alert ('Поздравляем, Вы выиграли!!!')}
                else if (firstQuestion.toUpperCase() !== frut[0].toUpperCase() || secondQuestion.toUpperCase() !== frut[6].toUpperCase()){
                    alert ('К сожалению угадан только один фрукт! Попробуйте ещё раз)')}
                    else {
                        alert ('гуляй, Вася')
                    }
            }
            quest();
    }