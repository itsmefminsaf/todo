const lists = document.getElementById("todos");

const addTodo = () => {
  const newTodo = document.getElementById("todoinput").value;
  if (newTodo === "") {
    return console.log("Please enter the task..");
  } else {
    fetch("/api/todo", {
      method: "POST",
      headers: {
        "content-Type": "Application/json",
      },
      body: JSON.stringify({ data: newTodo }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(`Something wrong : ${e}`);
      });
  }
  getAlltodo();
};

const getAlltodo = () => {
  fetch("/api/todo", {
    method: "GET",
    headers: {
      "content-Type": "Application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      lists.innerHTML = "";
      data.map((todo) => {
        const list = document.createElement("li");
        list.textContent = todo.task;
        lists.append(list);
      });
    });

  console.log(todos);
};

getAlltodo();
