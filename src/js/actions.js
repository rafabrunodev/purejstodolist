import renderList from './render.js';

export const addItem = (item, todoList) => {
    todoList.push(item);
    clearInput();
    renderList(todoList);
}

export const clearInput = () => {
    document.querySelector('.add-input').value = '';
}

export const getInputValue = () => {
    return document.querySelector('.add-input').value;
}

export const removeItem = (index, todoList) => {
    if (index > -1) {
        todoList.splice(index, 1);
        renderList(todoList);
    }
}

export const actionsFC = {
    addItem,
    clearInput,
    getInputValue,
    removeItem
}

export default actionsFC;