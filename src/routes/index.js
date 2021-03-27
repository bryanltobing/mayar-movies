import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import Layout from 'containers/Layout/Layout';

const HomePagesLoad = loadable(() => import('pages/Home/HomePages'));
const ActorPagesLoad = loadable(() => import('pages/Actor/ActorPages'));
const Pages404Load = loadable(() => import('pages/404/404'));

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/"
          component={({ component: Component, ...rest }) => (
            <Route {...rest} render={() => <Redirect to="/movies" />} />
          )}
          exact
        />
        <Route path="/movies" component={HomePagesLoad} exact />
        <Route path="/actor" component={ActorPagesLoad} exact />
        <Route component={Pages404Load} />
      </Switch>
    </Layout>
  );
};

export default Routes;
