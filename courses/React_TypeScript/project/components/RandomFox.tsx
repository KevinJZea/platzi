import { ImgHTMLAttributes, JSX, useEffect, useRef, useState } from 'react';

type LazyImageProps = {
  src: string;
  onLazyLoad?: (image: HTMLImageElement) => void;
};
type ImageNative = ImgHTMLAttributes<HTMLImageElement>;
type Props = LazyImageProps & ImageNative;

/* export const RandomFox1 = () => {
  return <img />;
}; */

export const LazyImage = ({
  src,
  onLazyLoad,
  ...props
}: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && src !== currentSrc) {
          setCurrentSrc(src);

          if (node.current && onLazyLoad) {
            console.log({ src, currentSrc, onLazyLoad, node: node.current });
            onLazyLoad(node.current);
          }
        }
      });
    });

    node.current && observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
  }, [node.current, src]);

  /* useEffect(() => {
    if (src && onLazyLoad && node.current) {
      console.log({ src, onLazyLoad, node: node.current });

      onLazyLoad(node.current);
    }
  }, [src]); */

  return <img {...props} ref={node} src={currentSrc} />;
};

/* export const RandomFox3: FunctionComponent = () => {
  return <img />;
};
export const RandomFox4: FC = () => {
  return <img />;
}; */
