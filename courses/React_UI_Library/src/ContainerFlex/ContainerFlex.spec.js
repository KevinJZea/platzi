import React from 'react';
import { render } from '@testing-library/react';
import ContainerFlex from './ContainerFlex';

describe('@components/ContainerFlex', () => {
  it('Component is mounted', () => {
    const { getByRole } = render(<ContainerFlex role="banner" />);

    const containerFlexTest = getByRole('banner');

    expect(containerFlexTest).toBeDefined();
  });

  it('Component has blue background', () => {
    const { getByRole } = render(
      <ContainerFlex bgColor="blue" role="banner" />
    );

    const containerFlexTest = getByRole('banner');

    expect(containerFlexTest).toHaveStyle({ backgroundColor: 'blue' });
  });
});
