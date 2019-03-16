const todoItems = [
  { id: 1, title: "Todo one", completed: false },
  { id: 2, title: "Todo two", completed: true },
  { id: 1, title: "Todo three", completed: false }
];

var output = "";

// Object.keys(todoItems).forEach( function(item){
//     output += `<li class="collection-header"><h5>${item}</h5></li>`;
//     todoItems[item].forEach( function(name){
//             output += `<li class="collection-item"><a href="#">${name}</a></li>`;
//         });
// });

todoItems.forEach(function(name) {
  output += `<div class="todo-item"><p>${name.title}</p></div>`;
});

document.getElementById("my-items").innerHTML = output;
