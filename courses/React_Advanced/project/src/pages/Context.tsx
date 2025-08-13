import { NotificationButton } from '../components/NotificationButton';
import { Notification } from '../components/Notification';
import './Context.css';

const Context = () => {
  return (
    <>
      <h1>💸 Transacción casi lista 💸</h1>

      <p>¿Estás seguro de que deseas completar esta transacción?</p>

      <NotificationButton />
      <Notification />
    </>
  );
};

export default Context;
