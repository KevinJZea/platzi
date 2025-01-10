import type { NextPage } from 'next';
import Head from 'next/head';
import { LazyImage } from '../components/RandomFox';
import { useState } from 'react';

const random = () => Math.floor(Math.random() * 123) + 1;

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox = () => {
    const newImageItem: ImageItem = {
      id: random().toString(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };

    setImages((prevImages) => [...prevImages, newImageItem]);
  };

  return (
    <div>
      <Head>
        <title>Platzi</title>
        <meta
          name="description"
          content="Next.js app with TypeScript, by Kevin J. Zea"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Hello Platzi!</h1>

        <button onClick={addNewFox}>Add new fox</button>

        {images.map((image) => (
          <div className="p-4" key={image.id}>
            <LazyImage
              src={image.url}
              className="bg-gray-300"
              width={320}
              height="auto"
              alt=""
              onLazyLoad={(image: HTMLImageElement) => console.log(image)}
            />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
