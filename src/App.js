
import { Container } from "react-bootstrap";
import NavBar from "./features/nav/NavBar";
import Hero from "./components/Hero";
import { AlertProvider } from "./providers/AlertContext";
import Pages from "./routes/Pages";

export default function App() {

  return (
    <Container fluid="sm" className="wrapper">
      <Hero />
      <NavBar />
      <AlertProvider>
          <Pages />
      </AlertProvider>
    </Container>
  );
}
