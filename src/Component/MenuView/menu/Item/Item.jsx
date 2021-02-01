import React from 'react';
import { Card } from 'react-bootstrap';
import FoodMenu from '../../../../public/menu/menu';
export default function Item(props) {
  const menu = FoodMenu.map((item, i) => {
    return (
      <Card
        key={i}
        style={{ width: '18rem' }}
        className="bg-transparent border-transparent"
      >
        <Card.Img
          variant="top"
          src={item.src}
          alt={item.alt}
          width={300}
          height={300}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.content}</Card.Text>
          <p>{item.price}</p>
        </Card.Body>{' '}
      </Card>
    );
  });
  return <div>{menu}</div>;
}
