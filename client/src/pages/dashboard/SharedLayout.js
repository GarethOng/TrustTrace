import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
function SharedLayout() {
  return (
    <Wrapper>
      <nav></nav>
      <Outlet />
    </Wrapper>
  )
}

export default SharedLayout
