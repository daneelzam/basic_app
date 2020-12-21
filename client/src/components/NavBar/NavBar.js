import React from 'react';
import {
  Navbar, NavItem, Icon
} from 'react-materialize';
import { useSelector } from 'react-redux';

function NewNavBar() {
  const isAuth = useSelector((state) => state.isAuth);

  return (
    <Navbar
    alignLinks="right"
    brand={<a className="brand-logo" href="/">Basic app with authorization</a>}
    id="mobile-nav"
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true
    }}
  >
    <NavItem href='/'>
            Main
    </NavItem>
    { isAuth ? <NavItem href='/logout'>Logout</NavItem> : <NavItem href='/login'>Login</NavItem> }
    { isAuth ? <NavItem href='/dashboard'>Dashboard</NavItem> : <NavItem href='/signup'>SignUp</NavItem>}
  </Navbar>
  );
}

export default NewNavBar;
