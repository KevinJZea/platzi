import { useNotification } from '../hooks/useNotification';

export const NotificationButton = () => {
  const { showNotification } = useNotification();

  const handleClick = () =>
    showNotification('✅ ¡Tu transacción se ha realizado con éxito!');

  return <button onClick={handleClick}>Confirmar transacción</button>;
};
