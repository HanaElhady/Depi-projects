import React from 'react';
import new_collections from './../Assets/Assets/new_collections'; 
import { Items } from '../Items/Items'; 
import './NewCollection.css'; 

export default function NewCollection() {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
          return (
            <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
          )
        })}
      </div>
    </div>
  );
}

