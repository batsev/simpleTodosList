// const todoItems = [
//   { id: 1, title: "Todo one", completed: false },
//   { id: 2, title: "Todo two", completed: true },
//   { id: 3, title: "Todo three", completed: false }
// ];

// var output = "";

// todoItems.forEach(function(name) {
//   output += `<div class="todo-item"><p>${name.title}</p></div>`;
// });

// document.getElementById("my-items").innerHTML = output;

class UI {
  static displayTodos() {
    const StoredTodos = [
      { id: 1, title: "Todo one", completed: false },
      { id: 2, title: "Todo two", completed: true },
      { id: 3, title: "Todo three", completed: false }
    ];

    const todos = StoredTodos;

    todos.forEach(todo => UI.addTodoToList(todo));
  }

  static addTodoToList(todo) {
    const list = document.getElementById("my-items");

    const row = document.createElement("div");
    row.className = "todo-item";
    if (todo.completed) {
      row.innerHTML = `<p><input class="myCheckbox" type="checkbox" checked>${
        todo.title
      }<button class="del">x</button></p>`;
      row.className += " is-completed";
    } else {
      row.innerHTML = `<p><input class="myCheckbox" type="checkbox">${
        todo.title
      }<button class="del">x</button></p>`;
    }

    list.appendChild(row);
  }

  static deleteTodo(element) {
    if (element.classList.contains("del")) {
      element.parentElement.parentElement.remove();
      UI.showAlert("Succesfully deleted todo.", "info");
    }
  }

  static crossTodo(element) {
    if (element.classList.contains("myCheckbox")) {
      if (
        element.parentElement.parentElement.classList.contains("is-completed")
      ) {
        element.parentElement.parentElement.classList.remove("is-completed");
      } else {
        element.parentElement.parentElement.classList.add("is-completed");
      }
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.style.cssText = "margin-top: 10px;";
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#todo-form");
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}

document.addEventListener("DOMContentLoaded", UI.displayTodos);
document.querySelector("#todo-form").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  if (title === "") {
    UI.showAlert("Fill the form.", "danger");
  } else {
    const todo = { title: title, completed: false };
    UI.addTodoToList(todo);
    document.querySelector("#title").value = "";
    UI.showAlert("Succesfully added todo!", "success");
  }
});

document.getElementById("my-items").addEventListener("click", e => {
  UI.deleteTodo(e.target);
});

document.getElementById("my-items").addEventListener("click", e => {
  UI.crossTodo(e.target);
});
