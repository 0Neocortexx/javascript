// arquivo app.js é um componente pai para o tasks

// todo arquivo react precisa ser importado para a sintaxe funcionar
import React, { useState } from "react";
// importar arquivo css
import './app.css'
import Tasks from "./componentes/tasks";

/* 
 const App = () => {
  const message = "Hello World!"
  return (
    <h1>{message}</h1>
  )
 } 
*/

// TUDO DO COMPONENTE TEM QUE SER RENDERIZADO NUMA DIV SO

const App = () => {
  // let message = "Hello World!";
  // Uma variavel normal quando alterada nao atualiza o componente
  // e um state atualiza com componente

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'ler livros',
      completed: true,
    },
  ]);

  return (
  <>  
    <div className="container">
      < Tasks tasks= {tasks}/>
    </div>
  </>
  );
};


export default App;