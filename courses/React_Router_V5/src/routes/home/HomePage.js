import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTodos } from '../useTodos';
import { TodoHeader } from '../../ui/TodoHeader';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { ChangeAlert } from '../../ui/ChangeAlert';

function HomePage() {
  const history = useHistory();
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = state;

  const { completeTodo, deleteTodo, setSearchValue, sincronizeTodos } =
    stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit={() => {
              history.push('/edit/' + todo.id, {
                state: { todo },
              });
            }}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      <CreateTodoButton onClick={() => history.push('/new')} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };
