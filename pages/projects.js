import Layout from "../components/Layout";

//bootstrap imports
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default () => (
  <Layout>
    <h1>My Projects</h1>
    <br></br>
    <h2>Web development projects:</h2>
    <Card style={{ width: "30vw" }}>
      <Card.Body>
        <Card.Title>Itunes Api integrated app</Card.Title>
        <Card.Text>
          App that connects to the Itunes api and gives you relevant search
          results.
        </Card.Text>
        <Button
          variant="outline-primary"
          href="https://t21pt2.herokuapp.com/"
          target="_blank"
        >
          Go to page
        </Button>
      </Card.Body>
    </Card>
    <br></br>
    <Card style={{ width: "30vw" }}>
      <Card.Body>
        <Card.Title>Card Game</Card.Title>
        <Card.Text>Simple interactive card memory game.</Card.Text>
        <Button
          variant="outline-primary"
          href="https://react-card-game-1.herokuapp.com/"
          target="_blank"
        >
          Go to page
        </Button>
      </Card.Body>
    </Card>
    <br></br>
    <Card style={{ width: "30vw" }}>
      <Card.Body>
        <Card.Title>StarWars API</Card.Title>
        <Card.Text>Simple StarWars Api integrated app.</Card.Text>
        <Button
          variant="outline-primary"
          href="https://starwars-task.herokuapp.com/"
          target="_blank"
        >
          Go to page
        </Button>
      </Card.Body>
    </Card>
    <br></br>
    <h2>Artworks:</h2>

    <Button
      variant="primary"
      href="https://www.instagram.com/q.exe_art/?hl=en"
      target="_blank"
    >
      Go to page
    </Button>
  </Layout>
);
