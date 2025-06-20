import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { describe, expect, it, type Mock, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Login } from './Login';
import { SessionProvider } from '../../context/AuthContext';
import { getAuth } from '../../services/getAuth';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return { ...actual, useNavigate: () => mockNavigate };
});

vi.mock('../../services/getAuth', () => ({
  getAuth: vi.fn(),
}));

const mockNavigate = vi.fn();
const mockGetAuth = getAuth as Mock;

describe('<Login />', () => {
  const renderComponent = () => {
    return render(
      <SessionProvider>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </SessionProvider>
    );
  };

  it('should show error message', async () => {
    mockGetAuth.mockRejectedValue(new Error('Invalid credentials'));
    renderComponent();

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await act(() => {
      fireEvent.change(usernameInput, { target: { value: 'wrongUser' } });
      fireEvent.change(passwordInput, { target: { value: 'wrongPassword' } });
      fireEvent.click(loginButton);
    });

    const errorMessage = screen.getByText('Invalid credentials');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should redirect to /orders', async () => {
    mockGetAuth.mockResolvedValue({ success: true });
    renderComponent();

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    await act(() => {
      fireEvent.change(usernameInput, { target: { value: 'validUser' } });
      fireEvent.change(passwordInput, { target: { value: 'validPassword' } });
      fireEvent.click(loginButton);
    });

    await waitFor(() => {
      expect(mockGetAuth).toHaveBeenCalledWith('validUser', 'validPassword');
      expect(mockNavigate).toHaveBeenCalledWith('/orders');
    });
  });

  it('should toggle password visibility', async () => {
    renderComponent();

    const passwordInput = screen.getByPlaceholderText('Password');
    const toggleButton = screen.getByRole('button', { name: 'show' });

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'text');
    expect(toggleButton).toHaveTextContent('hide');

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(toggleButton).toHaveTextContent('show');
  });
});
