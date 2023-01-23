import { StyledNav } from "../styles/StyledComponents";
import Link from "next/link";
import { useSwitch } from "../helpers/useSwitch";

const Navbar = () => {
  const { toggle, switchToggle } = useSwitch();
  console.log(toggle);
  return (
    <StyledNav show={toggle} data-testid="Navbar">
      <div data-testid="burger" onClick={() => switchToggle()}>
        Burger
      </div>
      <div data-testid="menu" className="menu">
        <Link data-testid="Home" href="/">
          Home
        </Link>
        <Link data-testid="About" href="/about">
          About
        </Link>
        <Link data-testid="Contact" href="/contact">
          Contact
        </Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
