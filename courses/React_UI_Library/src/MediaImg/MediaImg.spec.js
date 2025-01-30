import { render } from '@testing-library/react';
import MediaImg from './MediaImg';

describe('@components/MediaImg', () => {
  it('', () => {
    const { getByRole } = render(
      <MediaImg
        alt="Platzi Cool Image"
        borderRadius="16px"
        src="https://platziversosupercool.com/img.png"
      />
    );

    const MediaImgTest = getByRole('img');

    expect(MediaImgTest).toBeInTheDocument();
    expect(MediaImgTest).toHaveAttribute(
      'src',
      'https://platziversosupercool.com/img.png'
    );
    expect(MediaImgTest).toHaveAttribute('alt', 'Platzi Cool Image');

    expect(MediaImgTest).toHaveStyle({ 'border-radius': '16px' });
  });
});
