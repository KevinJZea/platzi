import { createEffect, createMemo, createSignal, For, Show } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { ButtonDarkMode } from './components/ButtonDarkMode';
import { Todo } from './components/Todo';

function App() {
  const [newItem, setNewItem] = createSignal('');
  const todosLocalStorage = JSON.parse(localStorage.getItem('todos') ?? '[]');
  const [todos, setTodos] = createStore(todosLocalStorage);

  function addTodo() {
    if (!newItem()) return;
    // setTodos(todos.length, { text: newItem(), completed: false });
    setTodos(
      produce((todos) => {
        todos.push({ text: newItem(), completed: false });
      }),
    );
    setNewItem('');
  }

  function removeTodo(index) {
    // setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    setTodos(produce((todos) => todos.splice(index, 1)));
  }

  const uncompletedTasks = createMemo(() => todos.filter((i) => !i.completed));
  const completedTasks = createMemo(() => todos.filter((i) => i.completed));
  const completedCount = createMemo(() => completedTasks().length);

  createEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  });

  return (
    <div class="w-full h-full  min-h-screen flex items-center justify-center dark:bg-gray-600 dark:text-white">
      <ButtonDarkMode />

      <div>
        <h1 class="text-2xl text-center">Solid Todo App</h1>

        <div class="my-5 flex justify-center">
          <input
            class="border dark:text-white border"
            type="text"
            value={newItem()}
            onInput={(e) => setNewItem(e.target.value)}
          />
          <button class="px-2 border" onClick={addTodo}>
            Add
          </button>
        </div>

        <div class="flex gap-16">
          <ul>
            <h2 class="font-bold text-lg">ToDo's</h2>
            <For each={uncompletedTasks()} fallback="Agrega tu primer todo">
              {(todo, index) => (
                <li>
                  <Todo
                    todo={todo}
                    onDelete={() => removeTodo(index())}
                    onChange={() => {
                      // setTodos(index(), 'completed', !todo.completed);
                      setTodos(
                        produce((todos) => {
                          todos[index()].completed = !todos[index()].completed;
                        }),
                      );
                    }}
                    onBlur={(newText) => {
                      // setTodos(index(), 'text', e.target.textContent);
                      setTodos(
                        produce((todos) => {
                          todos[index()].text = newText;
                        }),
                      );
                    }}
                  />
                </li>
              )}
            </For>
          </ul>

          <ul>
            <h2 class="font-bold text-lg">Completed</h2>
            <For
              each={completedTasks()}
              fallback="Aquí se mostrarán tus tareas completadas"
            >
              {(todo, index) => (
                <li>
                  <Todo
                    todo={todo}
                    onDelete={() => removeTodo(index())}
                    onChange={() => {
                      // setTodos(index(), 'completed', !todo.completed);
                      setTodos(
                        produce((todos) => {
                          todos[index()].completed = !todos[index()].completed;
                        }),
                      );
                    }}
                    onBlur={(newText) => {
                      // setTodos(index(), 'text', e.target.textContent);
                      setTodos(
                        produce((todos) => {
                          todos[index()].text = newText;
                        }),
                      );
                    }}
                  />
                </li>
              )}
            </For>
          </ul>
        </div>
        <p class="text-center text-sm mt-4">Completed count: {completedCount()}</p>
      </div>
    </div>
  );
}

export default App;
