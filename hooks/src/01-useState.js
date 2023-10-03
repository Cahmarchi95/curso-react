import React, {useState} from 'react'

function State(){

  const [tarefas,setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks']);

  const [input, setInput] = useState('');  

   function handleAdd(){
     setTarefas([...tarefas, input])
     setInput("")
    }

  return (
    <div>
      <ul>
        {tarefas.map(tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type='text' value={input} onChange={(e)=> setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Adcionar</button>
    </div>
  )
}

export default State