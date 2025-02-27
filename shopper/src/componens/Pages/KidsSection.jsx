import React from 'react'
import { Items } from '../Items/Items';
import '../NewCollection/NewCollection.css'; 
import all_product from '../Assets/Assets/all_product';

export default function KidsSection() {
  const kids = all_product.filter(kid => 
   kid.category ==='kid'
  );
    
return (
     <div className="new-collections">
      <h1>Kids Collections</h1>
       <hr />
      <div className="collections">
      {kids.map((item, i) => {
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
