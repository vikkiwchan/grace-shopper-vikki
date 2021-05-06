import React, { Component } from 'react';
import UserDashboard from './UserDashboard.jsx';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './AllProducts.jsx';
import MainNav from './MainNav.jsx';
import HomePage from '../Containers/HomePage.jsx';
import AuthTest from './AuthTest.jsx';
import Cart from './Cart/Cart.jsx';

import { setToken, fetchToken } from '../store/auth/token.js';
import { fetchCartProducts } from '../store/cart/cart';
import { fetchAuth } from '../store/auth/auth.js';

const mapStateToProps = ({ auth, token, cartProducts }) => ({
  auth,
  token,
  cartProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAuth: (token) => dispatch(fetchAuth(token)),
  fetchToken: (credentials) => dispatch(fetchToken(credentials)),
  setToken: (token) => dispatch(setToken(token)),
  fetchCartProducts: (token) => dispatch(fetchCartProducts(token)),
});

class Main extends Component {
  componentDidMount = () => {
    const { fetchToken, setToken } = this.props;
    const token = window.localStorage.token;
    console.log(token);
    if (!token) {
      fetchToken({ visitor: true });
    } else {
      setToken(token);
    }
  };

  componentDidUpdate = (prevProps) => {
    const { token: prevToken } = prevProps;
    const { fetchToken, token, fetchCartProducts, fetchAuth } = this.props;
    if (token === '') {
      fetchToken({ visitor: true });
    }
    if (prevToken !== token) {
      fetchAuth(token); // don't want this to fire for visitors?
      fetchCartProducts(token);
    }
  };

  render() {
    return (
      <>
        <Router>
          <MainNav />
          <Switch>
            <Route component={HomePage} path="/" exact />
            <Route component={AllProducts} path="/products" exact />
            <Route component={AuthTest} path="/login" exact />
            <Route component={Cart} path="/cart" exact />
          </Switch>
        </Router>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
