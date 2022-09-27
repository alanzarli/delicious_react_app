import { useEffect, useState } from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiFrenchFries } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


import React from 'react'

function Category() {
  return (
    <List>
      <Slinks to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slinks>
      <Slinks to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </Slinks>
      <Slinks to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai Food</h4>
      </Slinks>
      <Slinks to={'/cuisine/French'}>
        <GiFrenchFries />
        <h4>French</h4>
      </Slinks>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

 const Slinks = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg{
      color: white;
    }
    h4 {
      color: white;
    }
  }
 `;



export default Category

