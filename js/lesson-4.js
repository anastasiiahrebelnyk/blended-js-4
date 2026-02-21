//! ===================TASK 1==============================

// // 1 - отримай body елемент і виведи його в консоль;

// const bodyEl = document.querySelector('body');
// console.dir(bodyEl);


// // 2 - отримай елемент id="title" і виведи його в консоль;

// const titleEl = document.querySelector('#title');
// console.dir(titleEl);

// // 3 - отримай елемент class="list" і виведи його в консоль;

// const listEl = document.querySelector('.list');
// console.dir(listEl);


// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

// const dataTopicsEl = document.querySelectorAll('[data-topic]');
//     console.log(dataTopicsEl);
    

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const firstChildTopicEl = dataTopicsEl[0];
// console.dir(firstChildTopicEl);


// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// const lastChildTopicEl = dataTopicsEl[dataTopicsEl.length - 1];
// console.dir(lastChildTopicEl);


// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

// const sibling = titleEl.nextElementSibling;
// console.dir(sibling);


// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

// const subTitles = document.querySelectorAll('h3');
// console.dir(subTitles);

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір


// subTitles.forEach((title) => title.classList.add('active'));

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;


// const navigationEl = [...dataTopicsEl].find((topic) => topic.dataset.topic === 'navigation');
// console.dir(navigationEl);


// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

// navigationEl.style.backgroundColor = 'yellow';

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

// navigationEl.lastElementChild.textContent = "Я змінила тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

// const currentTopic = "manipulation";
// const manipulationEl = document.querySelector(`[data-topic = ${currentTopic}]`);
// console.dir(manipulationEl);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

// manipulationEl.style.backgroundColor = 'blue';

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

// // const completedTitleEl = document.querySelector('.completed');
// // console.dir(completedTitleEl);

// const completedTitleEl = [...subTitles].find((title) => title.classList.contains("completed"))
// console.dir(completedTitleEl);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// // completedTitleEl.parentElement.remove();
// document.querySelector('li>h3.completed').remove();

// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

// const markup = "<p>Об'єктна модель документа (Document Object Model)</p>";
// titleEl.insertAdjacentHTML('afterend', markup);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const newmarkup = ` <li data-topic="manipulation">
//           <h3>Властивість innerHTML</h3>

//           <p>
//            Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
//           </p>
//         </li>`;

// listEl.innerHTML += newmarkup;

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// listEl.insertAdjacentHTML('beforeend', newmarkup);

// // 20 - очисти список

// listEl.innerHTML = "";


//!======================TASK 2=========================
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const elements = [];
// for (let i = 1; i <= 100; i++) {
//     const div = document.createElement('div')
//     div.classList.add('number');
//     const number = randomNumber();
//     div.textContent = number;
//     if (number % 2 === 0) {
//         div.classList.add('even')
//     } else { div.classList.add('odd') }
//     elements.push(div);
// };

// const numberContainer = document.querySelector('.number-container');
// console.log(numberContainer);


// numberContainer.append(...elements);



//!======================TASK 3=========================

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const contactFormInfo = document.querySelector('.contact-form-input')

contactFormInfo.addEventListener('input', onContactFormInput);

function onContactFormInput() {
    // console.log('hello');
    if (contactFormInfo.value.trim().length > 6) {
    contactFormInfo.classList.remove('error')
        contactFormInfo.classList.add('success')
    } else {
    contactFormInfo.classList.remove('success')
    contactFormInfo.classList.add('error')

    }
}

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

contactFormInfo.addEventListener('focus', onContactFormInputFocus);

function onContactFormInputFocus() {
    if (contactFormInfo.value.trim().length === 0) {
        contactFormInfo.style.outline = '3px solid red';
    } else {contactFormInfo.style.outline = '3px solid green'}
}



// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`



// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.



