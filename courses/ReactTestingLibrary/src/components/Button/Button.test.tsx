import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render button', () => {
    render(<Button label="click" />);
    const button = screen.getByText('click');
    expect(button).toBeInTheDocument();
  });

  it('should call onClick', () => {
    const handleClick = vi.fn();
    render(<Button label="click" onClick={handleClick} />);

    const button = screen.getByText('click');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
