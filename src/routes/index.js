import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import Layout from 'containers/Layout/Layout';

const HomePagesLoad = loadable(() => import('pages/Home/HomePages'));

const Routes = () => {
  return (
    <>
      <Switch>
        <Layout>
          <Route path="/" component={HomePagesLoad} />
        </Layout>
      </Switch>
    </>
  );
};

export default Routes;
