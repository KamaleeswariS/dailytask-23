import React,{useState} from 'react';
import './App.css';
import Heading from "./Heading";
import Header from "./Header";
import Card from './Card';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  /* <!-- Creating a useState hook --> */
  let [cart,setCart]=useState(0)
  /* <!-- Creating JSON  --> */
  let data=[ {
    sale: false,
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',    
    reviews: false,  
    price: '$40.00 - $80.00',  
    OldPrice: "",
    Offer: false,

  },
  {
    sale: true,
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: true,
    price: ' $18.00',
    OldPrice: '$20.00',
    Offer: true,

  },
  {
    sale: true,
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: false,
    price: '$25.00',
    OldPrice: '',
    Offer: false,

  },

  {
    sale:false,
    name: 'Popular Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: true,
    price: '$40.00',   
    OldPrice: "",
    Offer: false,    
  },

  {
    sale: true,
    name: 'Sale Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: false,
    price: ' $25.00',    
    OldPrice: '$50.00',
    Offer: true,

  },
  {
    sale: false,
    name: 'Fancy Product',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: false,
    price: ' $120.00',   
    OldPrice: '$280.00',
    Offer: true,

  },
  {
    sale: true,
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: true,
    price: ' $18.00',    
    OldPrice: '$20.00',
    Offer: true,    
  },
  {
    sale: false,
    name: 'Special Item',
    image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
    reviews: true,
    price: ' $20.00',   
    OldPrice: '',
    Offer: false,   
  }]

  return <>
  {/* <!-- Calling the Header--> */}
<Header cart={cart} setCart={setCart}/>
{/* <!-- Calling the TopBar(Heading)--> */}
<Heading cart={cart} setCart={setCart}/>
<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {/* <!-- To return JSON --> */}
                   {
                    data.map((e,i)=>{
                      return <Card e={e} key={i} cart={cart} setCart={setCart}/>

                    })
                   }

                    </div>
              </div>
</section>
{/* <!-- Calling the Footer--> */}
<Footer cart={cart} setCart={setCart}/>              
  </>
}
export default App