import { ButtonGroup, Col, Container, ListGroup, Row } from "react-bootstrap";
import "./ListGroupComponent.css";
import { useState } from "react";
import { Button } from "bootstrap";

function ListGroupComponent() {
  const data = [
    "One Piece",
    "Demon Slayer",
    "HunterXHunter",
    "Dragonball",
    "made in abyss",
  ];
  const [animeList, setAnimeList] = useState(data);
  const [secondAnimeList, setSecondAnimeList] = useState([]);
  const [index, setIndex] = useState(0);

  const moveItemToSecondList = () => {
    setSecondAnimeList([...secondAnimeList, animeList[index]]);
    setAnimeList(animeList.filter((a) => a !== animeList[index]));
  };
  const moveItemToAnimeList = () => {
    setAnimeList([...animeList, secondAnimeList[index]]);
    setSecondAnimeList(
      secondAnimeList.filter((a) => a !== secondAnimeList[index])
    );
  };
  const moveAllToAnimeList = () =>{
    setAnimeList(...animeList, secondAnimeList)
    setSecondAnimeList([])
  }
  const moveAllToSecondAnimeList = () =>{
    setSecondAnimeList(...secondAnimeList, animeList)
    setAnimeList([])
  }

  return (
    <div>
      <h1>anime</h1>

      <Container>
        <Row>
          <Col>
            <ListGroup>
              {animeList.map((a, i) => (
                <ListGroup.Item
                  variant="primary"
                  action
                  onClick={() => {
                    setIndex(i);
                  }}
                  key={i}
                >
                  {a}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <ButtonGroup>
              <Row>
                <button onClick={()=> moveAllToSecondAnimeList()}>{">>"}</button>
                <button onClick={() => moveItemToSecondList()}>{">"}</button>
                <button onClick={()=> moveItemToAnimeList()}>{"<"}</button>
                <button onClick={()=> moveAllToAnimeList()}>{"<<"}</button>
              </Row>
            </ButtonGroup>
          </Col>
          <Col>
            <ListGroup>
              {secondAnimeList.map((a, i) => (
                <ListGroup.Item
                  variant="primary"
                  action
                  onClick={() => {
                    setIndex(i);
                  }}
                  key={i}
                >
                  {a}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ListGroupComponent;
