import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

import { Grid } from '@mui/material';

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Navigation />
      <Outlet />
    </Grid>
  );
};
export default Home;
