import React from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

const NavBar = () => (
  <Menu>
    <Link to="/">
      <Menu.item>
        Home
      </Menu.item>
    </Link>
    <Link to="/about">
      <Menu.item>
        About
      </Menu.item>
    </Link>
    <Link to="/products">
      <Menu.item>
        Products
      </Menu.item>
    </Link>
  </Menu>
)

export default NavBar