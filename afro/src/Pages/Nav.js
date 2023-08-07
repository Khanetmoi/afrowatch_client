import NavItem  from "./styles";
import LoginButton  from "./styles";
import Navigation  from "./styles";

 const Nav = ({handleItemClick, handleLogInClick, Islogged, logo})=>{
    return (
      <Navigation>
          <img src={logo} alt="logo.png"/>
          <ul>
          <NavItem onClick={() => handleItemClick('Home')}>
          <a href="#">Home</a>
        </NavItem>
        <NavItem onClick={() => handleItemClick('Movie')}>
          <a href="#">Movie</a>
        </NavItem>
        <NavItem onClick={() => handleItemClick('Show')}>
          <a href="#">Show</a>
        </NavItem>
          </ul>
          <div>
            {
              Islogged?<button>Profile</button>:<LoginButton onClick={() => handleLogInClick()}>Log In</LoginButton>
            }
          
          </div>
          </Navigation>
    )
  }

  export default Nav;