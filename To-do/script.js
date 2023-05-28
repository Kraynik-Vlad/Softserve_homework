class ToDoList {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.deleted = false; // Додано нову властивість для позначення видалення списку
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(index) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
}

class Item {
  constructor(content, done = false) {
    this.content = content;
    this.done = done;
    this.clickCount = 0;
  }

  toggleDone() {
    this.done = !this.done;
  }

  increaseClickCount() {
    this.clickCount++;
  }
}

class ToDoApp {
  constructor() {
    this.lists = [];
  }

  addList(list) {
    this.lists.push(list);
  }

  removeList(index) {
    if (index >= 0 && index < this.lists.length) {
      this.lists.splice(index, 1);
    }
  }

  renderLists() {
    const listsElement = document.getElementById('lists');
    listsElement.innerHTML = '';

    this.lists.forEach((list, index) => {
      if (!list.deleted) { // Перевірка, чи список не був видалений
        const listElement = document.createElement('div');
        listElement.classList.add('list');

        const titleElement = document.createElement('h2');
        titleElement.classList.add('list-title');
        titleElement.textContent = list.name;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-list-button');
        deleteButton.textContent = '-';
        titleElement.appendChild(deleteButton); // Додано кнопку видалення до заголовку списку

        const itemsElement = document.createElement('ul');
        itemsElement.classList.add('list-items');

        list.items.forEach((item, itemIndex) => {
          const itemElement = document.createElement('li');
          itemElement.classList.add('list-item');
          itemElement.innerHTML = `
            <span>${item.content}</span>
            <button class="delete-item-button">-</button>
          `;

          if (item.done) {
            itemElement.classList.add('done');
          }

          itemElement.addEventListener('click', () => {
            item.increaseClickCount();

            if (item.clickCount === 3) {
              itemElement.classList.add('delete-animation');
              setTimeout(() => {
                itemElement.classList.add('move-animation');
                setTimeout(() => {
                  itemElement.style.transform = 'translateX(-10px)';
                  setTimeout(() => {
                    itemElement.classList.add('fadeout-animation');
                    setTimeout(() => {
                      list.removeItem(itemIndex);
                      this.renderLists();
                    }, 500);
                  }, 500);
                }, 500);
              }, 10);
            }
          });

          const deleteButton = itemElement.querySelector('.delete-item-button');
          deleteButton.addEventListener('click', event => {
            event.stopPropagation();
            list.removeItem(itemIndex);
            this.renderLists();
          });

          itemsElement.appendChild(itemElement);
        });

        deleteButton.addEventListener('click', event => {
          event.stopPropagation();
          list.deleted = true; // Позначаємо список як видалений
          this.renderLists();
        });

        const newItemForm = document.createElement('form');
        newItemForm.classList.add('new-item-form');
        const newItemInput = document.createElement('input');
        newItemInput.classList.add('new-item-input');
        newItemInput.type = 'text';
        newItemInput.placeholder = 'Enter new item';
        const newItemButton = document.createElement('button');
        newItemButton.classList.add('new-item-button');
        newItemButton.type = 'submit';
        newItemButton.textContent = '+';

        newItemForm.addEventListener('submit', event => {
          event.preventDefault();
          const newItemContent = newItemInput.value.trim();
          if (newItemContent) {
            const newItem = new Item(newItemContent);
            list.addItem(newItem);
            this.renderLists();
            newItemInput.value = '';
          }
        });

        listElement.appendChild(titleElement);
        listElement.appendChild(itemsElement);
        listElement.appendChild(newItemForm);
        newItemForm.appendChild(newItemInput);
        newItemForm.appendChild(newItemButton);

        listsElement.appendChild(listElement);
      }
    });
  }
}

const todoApp = new ToDoApp();

function initializeApp() {
  const storedLists = localStorage.getItem('lists');
  if (storedLists) {
    todoApp.lists = JSON.parse(storedLists);
  }

  const newListForm = document.getElementById('new-list-form');
  newListForm.addEventListener('submit', event => {
    event.preventDefault();
    const newListInput = document.getElementById('new-list-input');
    const newListName = newListInput.value.trim();
    if (newListName) {
      const newList = new ToDoList(newListName);
      todoApp.addList(newList);
      todoApp.renderLists();
      newListInput.value = '';
    }
  });

  todoApp.renderLists();
}

window.addEventListener('DOMContentLoaded', initializeApp);
window.addEventListener('beforeunload', () => {
  const listsJson = JSON.stringify(todoApp.lists);
  localStorage.setItem('lists', listsJson);
});