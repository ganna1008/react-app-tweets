import { useState, useEffect } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import toast, { Toaster } from 'react-hot-toast';
import { Container, LoaderWrapper } from '../components/App.styled';
import UsersList from '../components/UserList/UsersList';
import { Button } from '../components/Button/Button';
import { fetchUsers, userLimit } from '../utils/api';
import { Backlink } from '../components/App.styled';
import { Link } from 'react-router-dom';

const Tweets = () => {
  const [userCards, setUserCards] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function update() {
      setIsLoading(true);
      try {
        const usersList = await fetchUsers(signal, page);

        if (usersList.length > 0) {
          setUserCards(prevUserCards => [...prevUserCards, ...usersList]);
        } else {
          toast.error('Sorry, there are no tweets match your search.');
          setError(true);
        }
      } catch (error) {
        if (error.message === 'canceled') {
          return;
        }
        toast.error('Tweets not found. Please try it again later.');
        setError(true);
      }
      setIsLoading(false);
    }

    update();

    return () => {
      controller.abort();
    };
  }, [page]);

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Container>
        <main>
          <Link to="/">
            <Backlink>&#8592; Go back</Backlink>
          </Link>
          {userCards.length > 0 && <UsersList userCards={userCards} />}

          <LoaderWrapper>
            <ScaleLoader
              color="#3737d7"
              loading={isLoading}
              height={70}
              margin={6}
              radius={9}
              width={6}
            />
          </LoaderWrapper>
          {!isLoading && !error && userCards.length % userLimit === 0 && (
            <Button nextPage={nextPage} />
          )}
        </main>
      </Container>
    </>
  );
};

export default Tweets;
