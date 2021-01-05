import React from 'react';
import { Link } from 'react-router-dom';
// HOC for redux
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

// This is a special syntax in React for importing SVG.
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUer: state.user.currentUer,
});

export default connect(mapStateToProps)(Header);
