/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const my_button = document.createElement('button');
    my_button.innerHTML = 'Удали меня';
    document.body.append(my_button);
    my_button.addEventListener('click', function () {
        this.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const my_list = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        const my_li = document.createElement('li');
        my_li.innerHTML = arr[i];
        my_li.addEventListener('mouseover', function (event) {
            this.title = this.textContent;
        });
        my_list.append(my_li);
    }
    document.body.appendChild(my_list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const my_link = document.createElement('a');
    my_link.innerHTML = 'tensor';
    my_link.href = 'https://tensor.ru/';

    my_link.addEventListener('click', function (event) {
        if (!this.innerHTML.includes(this.href)) {
            this.textContent = this.textContent + ' ' + this.href;
            event.preventDefault();
        }
    });
    document.body.appendChild(my_link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const my_list = document.createElement('ul');
    const my_elem = document.createElement('li');
    my_elem.innerHTML = 'Пункт';
    my_elem.addEventListener('click', function (event) {
        this.textContent = this.textContent + '!';
    });
    my_list.appendChild(my_elem);

    const my_button = document.createElement('button');
    my_button.innerHTML = 'Добавить пункт';
    my_button.addEventListener('click', function (event) {
        const my_new_elem = document.createElement('li');
        my_new_elem.textContent = 'Пункт';
        my_new_elem.addEventListener('click', function (event) {
            this.textContent = this.textContent + '!';
        });
        my_list.appendChild(my_new_elem);
    });

    document.body.appendChild(my_list);
    document.body.append(my_button);
}
