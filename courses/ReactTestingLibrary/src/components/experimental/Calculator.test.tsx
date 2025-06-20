import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Calculator, CalculatorProps } from './Calculator';

describe('<Calculator />', () => {
  const useCasesTest: {
    a: CalculatorProps['a'];
    b: CalculatorProps['b'];
    operation: CalculatorProps['operation'];
    expected: number;
  }[] = [
    { a: 1, b: 2, operation: 'add', expected: 3 },
    { a: 3, b: 2, operation: 'multiply', expected: 6 },
  ];

  it.each(useCasesTest)(
    'should return $expected when $a & $b are $operation',
    ({ a, b, operation, expected }) => {
      render(<Calculator a={a} b={b} operation={operation} />);
      const result = screen.getByText(`Result: ${expected}`);
      expect(result).toBeInTheDocument();
    }
  );
});
