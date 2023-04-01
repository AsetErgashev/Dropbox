import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../UI/Button';
import { RootState } from '../../store';
import { signout } from '../../store/actions/authActions';
import './header.module.css'

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return(
    <nav className="navbar is-spaced has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <h4></h4>
          <Link className="navbar-item"  to={!authenticated ? "/" : "/dashboard"}>Dropbox</Link>
          {/* <Button text="board" onClick={() => history.push('/register')} /> */}
        </div>

        <div className="navbar-end">
          <div className="navbar-items">
            {!user ? <div className="buttons">
                <Button text="Sign up" onClick={() => history.push('/signup')} className="is-primary" />
                <Button text="Sign in" onClick={() => history.push('/signin')} />
              </div>
              :
              <Button text="Sign out" onClick={logoutClickHandler} />
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
