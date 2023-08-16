


//exercicio 1
const salarios = [1200, 1600, 2000, 3000, 3400, 1000, 1700, 4000, 10000, 2500];
console.log(salarios);


const salarioAumento = salarios.map(salario => {
  if (salario <= 2000) {
    return salario * 1.15;
  } 
  else {
    return salario * 1.10; 
  }
});

console.log(salarioAumento);

//exercicio 2

const salarioFiltrado = salarioAumento.filter(salario => salario >= 2500);
console.log(`Salarios maiores que 2500: ${salarioFiltrado}`);

//exercicio 3

const somaSalario = salarioFiltrado.reduce((acumulado, atual) => acumulado + atual);

console.log(`Soma dos salarios: ${somaSalario}`);

//exercicio 4

const listaDeTarefas = [];

const formulario = document.getElementById("formulario");
const descricaoInput = document.getElementById("descricao");
const autorInput = document.getElementById("autor");
const departamentoInput = document.getElementById("departamento");
const importanciaInput = document.getElementById("importancia");
const listaElement = document.getElementById("listaDeTarefas");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const descricao = descricaoInput.value.trim();
    const autor = autorInput.value.trim();
    const departamento = departamentoInput.value.trim();
    const importancia = parseInt(importanciaInput.value);

    if (descricao !== "" && autor !== "" && departamento !== "" && !isNaN(importancia)) {
      const tarefa = {
        descricao,
        autor,
        departamento,
        importancia,
        concluida: false,
        valor: 0,
        duracao: 0
      };
      listaDeTarefas.push(tarefa);
      atualizarLista();
      formulario.reset();
    }
  });

  function removerTarefa(index) {
    if (index >= 0 && index < listaDeTarefas.length) {
      listaDeTarefas.splice(index, 1);
      atualizarLista();
    }
  }

  function ordenarPorImportancia() {
    const tarefasOrdenadas = [...listaDeTarefas].sort((a, b) => a.importancia - b.importancia);
    const tarefasDescricao = tarefasOrdenadas.map(tarefa => tarefa.descricao);
    console.log(tarefasDescricao);
  }

  function atualizarLista() {
    listaElement.innerHTML = "";
    for (let i = 0; i < listaDeTarefas.length; i++) {
      const tarefa = listaDeTarefas[i];
      const tarefaElement = document.createElement("li");
      tarefaElement.textContent = `${tarefa.descricao} (Autor: ${tarefa.autor}, Departamento: ${tarefa.departamento}, Importância: ${tarefa.importancia})`;

      const removerButton = document.createElement("button");
      removerButton.textContent = "Remover";
      removerButton.addEventListener("click", function() {
        removerTarefa(i);
      });

      tarefaElement.appendChild(removerButton);
      listaElement.appendChild(tarefaElement);
    }
  }

