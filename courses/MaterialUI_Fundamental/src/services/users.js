import { urlFetch } from '../constants';

export const getGitHubUser = async (username) => {
  const response = await fetch(`${urlFetch}/${username}`);
  const data = await response.json();

  return data;
};
