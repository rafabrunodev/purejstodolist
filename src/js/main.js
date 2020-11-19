import service from './services/api.js';

const Main = () => {
    let todoList = [];

    const init = () => {

        //GET DEFAULT VALUES
        service.getDefaultList()
            .then(res => {
                todoList = res;
                renderList();
            })
            .catch(err => {
                console.error(err);
            });

        // ADD NOVO ITEM LISTENER
        document.querySelector('.add-btn')
            .addEventListener("click", () => {
                addItem(getInputValue());
            }, false);

        // INIT INPUT KEY PRESS
        document.querySelector('.add-input')
            .addEventListener("keyup", (e) => {
                let key = e.which || e.keyCode;
                if (key == 13) {
                    addItem(getInputValue());
                }
            }, false);
    };

    const initDoneBtn = () => {
        setTimeout(() => {
            document.querySelectorAll('.done-btn').forEach(el => {
                el.addEventListener("click", (ev) => {
                    removeItem(ev.target.dataset.value);
                }, false);
            })
        }, 100);
    };

    const addItem = (item) => {
        todoList.push(item);
        clearInput();
        renderList();
    }

    const clearInput = () => {
        document.querySelector('.add-input').value = '';
    }

    const getInputValue = () => {
        return document.querySelector('.add-input').value;
    }

    const removeItem = (index) => {
        if (index > -1) {
            todoList.splice(index, 1);
            renderList();
        }
    }

    const renderList = () => {
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

        initDoneBtn();
    };

    // INIT
    init();
};

// STARTING MAIN FUNCTION
Main();