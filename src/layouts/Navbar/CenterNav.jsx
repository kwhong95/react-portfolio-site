import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import NavItems from './NavItems'

const Container = styled.nav`
  margin-bottom: 5em;
`
const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  font-size: 18px;
  line-height: 2em;
  
  a {
    text-decoration: none;
    color: gray;
  }
`


const CenterNav = () => {

  return (
    <Container>
      <MenuList>
        {NavItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            exact={item.exact}
            activeClassName="selected"
            activeStyle={{
              color: '#fff'
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </MenuList>
    </Container>
  )
}

export default CenterNav