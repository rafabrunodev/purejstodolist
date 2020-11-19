import service from './services/api.js';
import renderList from './render.js';
import {
    addItem,
    getInputValue,
} from './actions.js';

const Main = () => {
    let todoList = [];

    const init = () => {

        //GET DEFAULT VALUES
        service.getDefaultList()
            .then(res => {
                todoList = res;
                renderList(todoList);
            })
            .catch(err => {
                console.error(err);
            });

        // ADD NOVO ITEM LISTENER
        document.querySelector('.add-btn')
            .addEventListener("click", () => {
                addItem(getInputValue(), todoList);
            }, false);

        // INIT INPUT KEY PRESS
        document.querySelector('.add-input')
            .addEventListener("keyup", (e) => {
                let key = e.which || e.keyCode;
                if (key == 13) {
                    addItem(getInputValue(), todoList);
                }
            }, false);
    };

    // INIT FUNCTIONS
    init();
};

// STARTING MAIN FUNCTION
Main();