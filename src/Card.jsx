import React,{useState} from 'react'

function Card({cart,setCart,e}) {
    let [toggle,setToggle]=useState(true)
    //let count-0
return <div className="col mb-5">
     {/* <div>Total Order = {cart}</div>  */}
  <div className="card h-100">
      {e.sale?(<><div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div></>):("")}
      <img className="card-img-top" src={e.image} alt="..." />
      <div className="card-body p-4">
          <div className="text-center">
              <h5 className="fw-bolder">{e.name}</h5>
              {e.reviews?(<><div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
              </div>
              </>):("")}
              {e.Offer ? (
  <div>
    <span className="text-muted text-decoration-line-through">{e.OldPrice}</span>
      {e.price}
  </div>
) : (
  e.price
)}

          </div>
      </div>
      <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                        toggle?<button className="btn btn-outline-success mt-auto" href="#" onClick={()=>{
                                            setCart(cart+1);
                                            setToggle(false);
                                        }}> Add to Cart </button>:
                                        <button className="btn btn-outline-danger mt-auto" href="#" onClick={()=>{
                                            setCart(cart-1);
                                            setToggle(true);
                                        }}> Remove from cart </button>
                                    }
                                </div>
                            </div>
    </div>
</div>      

}

export default Card