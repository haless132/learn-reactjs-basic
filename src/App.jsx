import Header from 'components/Header';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import productApi from './api/productApi';
import './App.scss';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Albums';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todos';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log('productList API nhé:', productList);

      const { data } = productList;
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <h2>Learn React JS basic</h2>

      <Switch>
        {/* <Redirect from="/home" to="/" exact /> */}
        {/* <Redirect form="/post-list/:postId" to="/posts/:postId" exact /> */}

        <Route path="/" component={CounterFeature} exact />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route component={NotFound} />
      </Switch>

      <h2>Footer</h2>
    </div>
  );
}

export default App;
