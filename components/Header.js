import Link from "next/dist/client/link";
import { Button, ButtonGroup } from "react-bootstrap";
//imports for components

const Header = () => (
  <div>
    {/* navigation bar */}
    <ButtonGroup>
      <Link href="/">
        <Button variant="secondary">Home</Button>
      </Link>
      <Link href="/projects">
        <Button variant="secondary">Projects</Button>
      </Link>
      <Link href="/contact">
        <Button variant="secondary">Contact</Button>
      </Link>
    </ButtonGroup>
  </div>
);

export default Header;
