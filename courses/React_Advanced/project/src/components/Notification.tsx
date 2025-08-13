import { useNotification } from '../hooks/useNotification';

export const Notification = () => {
  const { message } = useNotification();

  if (!message) return null;

  return (
    <aside>
      <p>{message}</p>
    </aside>
  );
};
