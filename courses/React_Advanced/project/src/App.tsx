import { lazy } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

const Context = lazy(() => import('./pages/Context'));
const Reducer = lazy(() => import('./pages/Reducer'));
const Redux = lazy(() => import('./pages/Redux'));
const StateMachine = lazy(() => import('./pages/StateMachine'));
const Zustand = lazy(() => import('./pages/Zustand'));
const TanstackQuery = lazy(() => import('./pages/TanstackQuery'));

import { NotificationProvider } from './context/NotificationProvider';
import { store } from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <NotificationProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="context" element={<Context />} />
              <Route path="reducer" element={<Reducer />} />
              <Route path="redux" element={<Redux />} />
              <Route path="zustand" element={<Zustand />} />
              <Route path="state-machine" element={<StateMachine />} />
              <Route path="tanstack-query">
                <Route index element={<TanstackQuery />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </NotificationProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

const routes: { to: string; label: string }[] = [
  { to: '/context', label: 'Context' },
  { to: '/reducer', label: 'Reducer' },
  { to: '/redux', label: 'Redux' },
  { to: '/zustand', label: 'Zustand' },
  { to: '/state-machine', label: 'State Machine' },
  { to: '/tanstack-query', label: 'Tanstack Query' },
];
const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '2rem',
        position: 'absolute',
        top: '3rem',
      }}
    >
      {routes.map((route) => (
        <Link key={route.to} to={route.to}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
