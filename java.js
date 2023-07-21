// disappear model
function model() {
  // console.log("hiii");
  document.getElementById("model").style.display = "none";
}
// add todo
function myFunction() {
  var input_TODO = document.getElementById("input_text").value;
  // console.log(input_TODO);
  if (input_TODO === "") {
    // console.log(document.getElementsByClassName("container"));
    document.getElementById("model").style.display = "block";
  } else {
    let Todo = document.createElement("div");
    Todo.classList.add("first_colum");
    Todo.innerHTML = `
      <span class="first">${input_TODO}</span>
      <span class="second">Delete</span>
      <span class="third">Compeleted</span>
      `;
    document.getElementById("table").appendChild(Todo);
    deleteElement();
    TODO();
  }
  document.getElementById("input_text").value = "";
}
// completed todo
function TODO() {
  var completers = document.getElementsByClassName("first_colum");
  // console.log(completers[0]);
  for (let i = 0; i < completers.length; i++) {
    completers[i].onclick = function () {
      this.classList.toggle("completed");
    };
  }
}
TODO();

// delete todo
function deleteElement() {
  var deleters = document.getElementsByClassName("second");
  for (let i = 0; i < deleters.length; i++) {
    deleters[i].onclick = function () {
      this.parentElement.style.display = "none";
    };
  }
}
deleteElement();

// filtering();
// function filtering() {
//   var todolist = document.getElementsByClassName("todobtn");
//   console.log(todolist);
//   todolist.onclick = function () {
//     console.log("Hello");
//     var todoelements = document.getElementsByClassName("first_colum");
//     for (let i = 0; i < todoelements.length; i++) {
//       todoelements[i].onclick = function () {
//         console.log("hiiii");
//         if (this.classList.contains("completed")) {
//           this.parentElement.style.display = "block";
//           document.getElementsByClassName("table").style.display = "block";
//         }
//       };
//     }
//   };
// }
