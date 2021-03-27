import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import Layout from 'containers/Layout/Layout';

const HomePagesLoad = loadable(() => import('pages/Home/HomePages'));

const Routes = () => {
  return (
    <>
      <Switch>
        <Redirect from="/" to="/movies" exact />
        <Layout>
          <Route path="/movies" component={HomePagesLoad} exact />
        </Layout>
      </Switch>
    </>
  );
};

export default Routes;
