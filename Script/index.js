document.querySelector("form").addEventListener("submit", Todo);

var todoList=JSON.parse(localStorage.getItem("todoData")) || [];

function Todo() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var quantity = document.querySelector("#qty").value;
  var prior = document.querySelector("#priority").value;

  var todoObj = {
    itemName: name,
    itemQty: quantity,
    itemPrior: prior,
  };
  todoList.push(todoObj);

  localStorage.setItem("todoData", JSON.stringify(todoList));
}