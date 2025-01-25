import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Searcher } from './components/Searcher';
import { getGitHubUser } from './services/users';
import { UserCard } from './components/UserCard';

function App() {
  const [userState, setUserState] = useState('inputUser');
  const [inputUser, setInputUser] = useState('octocat');

  const getUser = async (username) => {
    const user = await getGitHubUser(username);

    if (inputUser === 'octocat') {
      localStorage.setItem('octocat', JSON.stringify(user));
    }

    if (user.message === 'Not Found') {
      setUserState(JSON.parse(localStorage.getItem('octocat')));
    } else {
      setUserState(user);
    }
  };

  useEffect(() => {
    getUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userData={userState} />
    </Container>
  );
}

export default App;
