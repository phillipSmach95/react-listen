import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import "./ListGroupComponent.css";
import { useState } from "react";

function ListGroupComponent() {
  const data = [
    "One Piece",
    "Demon Slayer",
    "HunterXHunter",
    "Dragonball",
    "made in abyss",
  ];
  const [animeList, setAnimeList] = useState(data);

  return (
    <div>
      <h1>anime</h1>
      <ListGroup>
        <Row>
          <Col>
            {animeList.map((a, i) => (
              <ListGroup.Item
                variant="primary"
                action
                onClick={() => {}}
                key={i}
              >
                {a}
              </ListGroup.Item>
            ))}
          </Col>
          <Col>
            {animeList.map((a, i) => (
              <ListGroup.Item
                variant="primary"
                action
                onClick={() => {}}
                key={i}
              >
                {a}
              </ListGroup.Item>
            ))}
          </Col>
        </Row>
      </ListGroup>
    </div>
  );
}
export default ListGroupComponent;
