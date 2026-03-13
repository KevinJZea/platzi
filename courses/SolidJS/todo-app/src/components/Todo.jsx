export function Todo(props) {
  return (
    <>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={props.onChange}
      />
      <span
        onDblClick={(e) => {
          e.target.setAttribute('contenteditable', true);
          e.target.focus();
        }}
        onBlur={(e) => {
          e.target.removeAttribute('contenteditable');
          props.onTextChange(e.target.textContent);
        }}
      >
        <Show when={props.todo.completed} fallback={props.todo.text}>
          <s>{props.todo.text}</s>
        </Show>
      </span>
      <button onClick={props.onDelete}>❌</button>
    </>
  );
}
