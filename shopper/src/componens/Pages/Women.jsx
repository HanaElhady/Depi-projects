import React from 'react'
import { Items } from '../Items/Items';
import '../NewCollection/NewCollection.css'; 
import all_product from '../Assets/Assets/all_product';

export default function Women() {
    const women = all_product.filter(woman => 
        woman.category ==='women'
    );

  return (
        <div className="new-collections">
          <h1>Women Collections</h1>
          <hr />
          <div className="collections">
            {women.map((item, i) => {
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