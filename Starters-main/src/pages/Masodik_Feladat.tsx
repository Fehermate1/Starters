import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/masodikfeladat.css'

const MasodikFeladat = () => {
    return(
        <div className='main'>
                <h1>Toys</h1>
                <Card style={{ width: '18rem', backgroundColor: "white", alignItems: "center"}}>
      <Card.Img variant="" src="https://rukminim2.flixcart.com/image/850/1000/xif0q/vehicle-pull-along/f/h/a/1-24-scale-big-die-cast-metal-toy-car-for-kid-model-brabus-original-imagnedbybhr5dg3.jpeg?q=90&crop=false" />
      <Card.Body>
        <Card.Title>Toy Car</Card.Title>
        <Card.Text>
A fun toy car for all the ages. Perfect for young adventures!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: "gray" }}>
      <Card.Img variant="top" src="https://www.ecr4kids.com/cdn/shop/files/hcdvqzyr0u4chudi0clz_1f24943a-948f-4b88-804f-659e182adab1.jpg?v=1729133704" />
      <Card.Body>
        <Card.Title>Building Blocks</Card.Title>
        <Card.Text>
            Enhance creativity with this set of colorful building blocks!
        </Card.Text>
        <Card.Footer>
            <div>
                $15.99
                </div>
                <div className='striker'>
                    $29.99
                </div>
            </Card.Footer>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: "gray" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVk-CHlhbEMQCnFrq9CdJrr2zM-WF0QbcdQ&s" />
      </Card.Body>
    </Card>
        </div>
    )
}

export default MasodikFeladat;