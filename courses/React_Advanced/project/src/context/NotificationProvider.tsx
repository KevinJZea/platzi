import { useState, type PropsWithChildren } from 'react';
import { NotificationContext } from './NotificationContext';

type Message = string | null;

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [message, setMessage] = useState<Message>(null);

  const hideNotification = () => setMessage(null);
  const showNotification = (msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      hideNotification();
    }, 3000);
  };

  return (
    <NotificationContext.Provider
      value={{
        message,
        hideNotification,
        showNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
