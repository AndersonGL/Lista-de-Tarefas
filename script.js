const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const novoInput = taskInput.value.trim();


   // Condição não digite nada aparece um alerta
  if (novoInput === "") {            
    alert("Por favor, insira uma tarefa.");
    return;
  }

  // Criar li
  const li = document.createElement("li");

  // Texto da tarefa
  const taskText = document.createElement("span");
  taskText.textContent = novoInput;

  // Botão remover
  const btnRemove = document.createElement("button");
  btnRemove.textContent = "Remover";
  btnRemove.style.marginLeft = "20px"; // só pra não ficar grudado
  btnRemove.onclick = function () {
    taskList.removeChild(li);
  };

  // Montar item
  li.appendChild(taskText);
  li.appendChild(btnRemove);
  taskList.appendChild(li);

  // Limpar campo
  taskInput.value = "";
}