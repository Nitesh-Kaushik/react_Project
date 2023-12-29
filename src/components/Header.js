import React, {useState} from 'react'
import styled from "styled-components"
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
// import  { selectCars } from '../features/car/carslide';
// import { useSlector } from 'react-redux';

function Header() {
    // let useState;
    const [burgerStatus, setBurgerStatus] = useState(false);
    // const cars = useSlector(selectCars)
    // console.log(cars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">shop</a>
        <a href="#">tesla account</a>
        <CostomMenu onClick = { ()=>setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CloseWrapper>
        <li><a href="#">Exiting Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruct</a></li>
        <li><a href="#">Exiting Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
      display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;    

    a {
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
    }
`
const CostomMenu = styled(ListIcon)`
    cursor:pointer;
`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 100;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
justify-content: flex-start;
transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
transition: transform 0.2s ease-in;

li {
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  padding: 10px;

  a {
    font-weight: 600;
  }
}

`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
right: 0;
justify-content: flex-end;


`

















