import { TodoIcon } from "../TodoIcon";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      color={completed ? "green" : "gray"}
      type="check"
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
