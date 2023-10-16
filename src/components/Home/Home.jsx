import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks';

import Container from 'react-bootstrap/container';
import { InfinitySpin } from 'react-loader-spinner';

const Home = () => {
  const { isRefreshing } = useAuth();
  return isRefreshing ? (
    <Container className="mt-5 d-flex justify-content-center">
      <InfinitySpin color="#3f89ca" />
    </Container>
  ) : (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Container className="my-5">
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </>
  );
};
export default Home;
