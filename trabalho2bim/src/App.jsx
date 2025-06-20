import React, { useState } from 'react';
import './App.css';


export default function ChecklistEstudos() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [materia, setMateria] = useState('');
  const [dia, setDia] = useState('');
  const [filtroDia, setFiltroDia] = useState('');
  const [filtroMateria, setFiltroMateria] = useState('');

  function adicionarTarefa() {
    if (titulo && materia && dia) {
      const nova = {
        id: Math.random(),
        titulo,
        materia,
        dia,
        feita: false
      };

      setTarefas([...tarefas, nova]);
      setTitulo('');
      setMateria('');
      setDia('');
    }
  }

  function marcarFeita(id) {
    const novas = tarefas.map(t => {
      if (t.id === id) {
        return { ...t, feita: !t.feita };
      }
      return t;
    });
    setTarefas(novas);
  }

  function remover(id) {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  const tarefasFiltradas = tarefas.filter(t => {
    if (filtroDia && t.dia !== filtroDia) return false;
    if (filtroMateria && t.materia !== filtroMateria) return false;
    return true;
  });

  const criadas = tarefasFiltradas.filter(t => !t.feita);
  const feitas = tarefasFiltradas.filter(t => t.feita);

  return (
    <div style={{ padding: 20 }}>
      <h1>Checklist de Estudos</h1>

      <div>
        <h2>Nova Tarefa</h2>
        <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} /><br />
        <select value={materia} onChange={e => setMateria(e.target.value)}>
          <option>Matemática</option>
          <option>História</option>
          <option>Física</option>
          <option>Química</option>
          <option>Português</option>
          <option>Geografia</option>
          <option>Religião</option>
          <option>Projeto de Vida</option>
          <option>Literatura</option>
          <option>Inglês</option>
          <option>Biologia</option>
          <option>Investigação Matematica</option>
          <option>Filosofia</option>
          <option>Sociologia</option>
          <option>Artes</option>
        </select><br />
        <select value={dia} onChange={e => setDia(e.target.value)}>
          <option value="">Dia</option>
          <option>Segunda</option>
          <option>Terça</option>
          <option>Quarta</option>
          <option>Quinta</option>
          <option>Sexta</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select><br />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <div>
        <h3>Filtros</h3>
        <select value={filtroDia} onChange={e => setFiltroDia(e.target.value)}>
          <option value="">Filtrar por Dia</option>
          <option>Segunda</option>
          <option>Terça</option>
          <option>Quarta</option>
          <option>Quinta</option>
          <option>Sexta</option>
          <option>Sábado</option>
          <option>Domingo</option>
        </select><br />
        <select value={filtroMateria} onChange={e => setFiltroMateria(e.target.value)}>
          <option value="">Filtrar por Matéria</option>
          <option>Matemática</option>
          <option>História</option>
          <option>Física</option>
          <option>Química</option>
          <option>Português</option>
          <option>Geografia</option>
          <option>Religião</option>
          <option>Projeto de Vida</option>
          <option>Literatura</option>
          <option>Inglês</option>
          <option>Biologia</option>
          <option>Investigação Matematica</option>
          <option>Filosofia</option>
          <option>Sociologia</option>
          <option>Artes</option>

        </select><br />
        <button onClick={() => { setFiltroDia(''); setFiltroMateria(''); }}>Limpar Filtros</button>
      </div>

      <hr />

      <div>
        <h2>Tarefas Criadas</h2>
        {criadas.length === 0 ? <p>Nenhuma tarefa</p> :
          criadas.map(t => (
            <div key={t.id}>
              <p><b>{t.titulo}</b> - {t.materia} - {t.dia}</p>
              <button onClick={() => marcarFeita(t.id)}>Concluir</button>
              <button onClick={() => remover(t.id)}>Remover</button>
              <hr />
            </div>
          ))}
      </div>
      <hr />

      <div>
        <h2>Tarefas Concluídas</h2>
        {feitas.length === 0 ? <p>Nenhuma tarefa</p> :
          feitas.map(t => (
            <div key={t.id}>
              <p><s>{t.titulo}</s> - {t.materia} - {t.dia}</p>
              <button onClick={() => marcarFeita(t.id)}>Desmarcar</button>
              <button onClick={() => remover(t.id)}>Remover</button>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
}
