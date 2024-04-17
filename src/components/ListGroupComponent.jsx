import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './ListGroupComponent.css'
import { useState } from 'react';

function ListGroupComponent(){
    const data = ['One Piece','Demon Slayer', 'HunterXHunter', 'Dragonball', 'made in abyss']
    const [animeList, setAnimeList] = useState(data)
    const [isActive, setIsActive] = useState(false)
    
    return(
    <div>
        <h1>anime</h1>
        <ListGroup>
            {animeList.map((a, i)=>(<ListGroup.Item variant="primary" active={isActive} onClick={()=>{setIsActive(!isActive)}} key={i}>{a}</ListGroup.Item>))}
        </ListGroup>
    </div>
)
}
export default ListGroupComponent;