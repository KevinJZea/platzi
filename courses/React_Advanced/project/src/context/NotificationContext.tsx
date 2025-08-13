import { createContext } from 'react';

type Message = string | null;
interface INotificationContext {
  message: Message;
  showNotification: (msg: string) => void;
  hideNotification: () => void;
}
export const NotificationContext = createContext<
  INotificationContext | undefined
>(undefined);
