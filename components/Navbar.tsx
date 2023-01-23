import { StyledNav } from "../styles/StyledComponents";
import Link from "next/link";
import { useSwitch } from "../helpers/useSwitch";

const Navbar = () => {
  const { toggleClass, switchToggle } = useSwitch();
  console.log(toggleClass);
  return (
    <StyledNav data-testid="Navbar">
      <div>
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
