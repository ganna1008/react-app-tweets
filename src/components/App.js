import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Header, Link } from './App.styled';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tweets">Tweets</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

// import { useState, useEffect } from 'react';
// import ScaleLoader from 'react-spinners/ScaleLoader';
// import toast, { Toaster } from 'react-hot-toast';
// import { Container, LoaderWrapper } from './App.styled';
// import UsersList from './UserList/UsersList';
// import { Button } from './Button/Button';
// import { fetchUsers, userLimit } from '../utils/api';

// export const App = () => {
//   const [userCards, setUserCards] = useState([]);
//   const [error, setError] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     async function update() {
//       setIsLoading(true);
//       try {
//         const usersList = await fetchUsers(signal, page);

//         if (usersList.length > 0) {
//           setUserCards(prevUserCards => [...prevUserCards, ...usersList]);
//         } else {
//           toast.error('Sorry, there are no tweets match your search.');
//           setError(true);
//         }
//       } catch (error) {
//         if (error.message === 'canceled') {
//           return;
//         }
//         toast.error('Tweets not found. Please try it again later.');
//         setError(true);
//       }
//       setIsLoading(false);
//     }

//     update();

//     return () => {
//       controller.abort();
//     };
//   }, [page]);

//   const nextPage = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   return (
//     <>
//       <Toaster position="top-right" reverseOrder={false} />
//       <Container>
//         {userCards.length > 0 && <UsersList userCards={userCards} />}

//         <LoaderWrapper>
//           <ScaleLoader
//             color="#3737d7"
//             loading={isLoading}
//             height={70}
//             margin={6}
//             radius={9}
//             width={6}
//           />
//         </LoaderWrapper>
//         {!isLoading && !error && userCards.length % userLimit === 0 && (
//           <Button nextPage={nextPage} />
//         )}
//       </Container>
//     </>
//   );
// };
