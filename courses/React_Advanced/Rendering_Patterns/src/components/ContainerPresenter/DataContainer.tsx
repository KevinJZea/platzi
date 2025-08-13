import { useEffect, useState } from 'react';
import { DataPresenter } from './DataPresenter';

type DataItem = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export const DataContainer = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/data.json');

        if (!response.ok) throw new Error('Error loading data');

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DataPresenter data={data} />
      )}
    </div>
  );
};
