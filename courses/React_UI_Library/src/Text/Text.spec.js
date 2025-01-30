import { render } from '@testing-library/react';
import Text from './Text';

describe('@components/Text', () => {
  it('', () => {
    const { getByRole } = render(<Text component="h1">Platzi Aventura</Text>);

    const TextTest = getByRole('heading', { name: /Platzi Aventura/i });

    expect(TextTest).toBeDefined();
  });
});
