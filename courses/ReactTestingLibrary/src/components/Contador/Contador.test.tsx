import { describe, expect, it } from 'vitest';
import { Contador } from './Contador';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<Contador />', () => {
  it('should show initial value', () => {
    render(<Contador />);
    const contador = screen.getByText('Contador: 0');
    expect(contador).toBeInTheDocument();
  });

  it('Counter should increase', () => {
    render(<Contador />);
    const button = screen.getByText('Incrementar');
    fireEvent.click(button);
    const contador = screen.getByText('Contador: 1');
    expect(contador).toBeInTheDocument();
  });
});
