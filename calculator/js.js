// главнй input
const input = document.getElementById('mainRow')
//дивы в которых span с цифрами
const number = document.querySelectorAll('.number')
//дивы в которых span с символами
const symbol = document.querySelectorAll('.symbol')

// перебираем дивы с цифрами
number.forEach(div => {
    // перебераем все span которы в div
    for (const child of div.children) {
        // если класс отсутсвует то это span с цифрой
        if (child.className === '') {
            // вешаем событие для добавления содержимого span в input
            child.addEventListener('click', (e) => {
                input.innerHTML += e.srcElement.innerHTML
            })
        } else {
            // span для классом dull
            //  вешаем событие на очистку текста в input
            child.addEventListener('click', (e) => {
                input.innerHTML = ''
            })
        }
    }
})

// перебираем все div с символами
symbol.forEach(div => {
        // если div с классом symbol то вешаем событие для добавления символа в input
    if(div.className === 'symbol'){
        div.children[0].addEventListener('click', (e) => {
            input.innerHTML += " " + e.srcElement.innerHTML + " ";
        })
    }else{
        // события для span с текстом =
        div.children[0].addEventListener('click', () => {
            // функция JS для подсчета примера который в строке ХЗ как она работает))
            input.innerHTML = eval(input.innerHTML)
        });
    }
})