import { removeItem } from './actions.js';

const initDoneBtn = (todoList) => {
    setTimeout(() => {
        document.querySelectorAll('.done-btn').forEach(el => {
            el.addEventListener("click", (ev) => {
                removeItem(ev.target.dataset.value, todoList);
            }, false);
        })
    }, 100);
};

const renderList = (todoList) => {
    const listItensEl = document.querySelector(".list-itens");
    listItensEl.innerHTML = "";

    todoList.forEach((item, i) => {
        let itemEl = document.createElement('p');
        itemEl.innerHTML = `
            <span>${item}</span>
            <a class="done-btn btn-${i}" data-value="${i}">Done</a>
        `;
        listItensEl.appendChild(itemEl);
    });

    initDoneBtn(todoList);
};

export default renderList;