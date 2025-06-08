import Container from "../components/container";
import Logo from "../assets/images/Logo.svg?react";

export default function Header() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <Logo className="h-9 md:h-12" />

      <nav>
        
      </nav>
    </Container>
  );
}
