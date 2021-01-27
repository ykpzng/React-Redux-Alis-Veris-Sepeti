import React, { Component } from 'react';
import { connect } from "react-redux";
import { BagPlus } from 'react-bootstrap-icons';
import { addToCart } from "../components/actions/cartActions";

class Home extends Component {

  handleClick = (id) => {
    this.props.addToCart(id);
    // console.log("handle-items : ", this.props.items)
    // console.log("handle-cart : ", this.props.cart)
  }

  componentDidMount() {

  }

  render() {
    console.log("Home=>items :", this.props.items)
    console.log("Home=> cart :", this.props.cart);
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {this.props.items.map((item) => (
          <div className="col mt-4" key={item.id}>
            <div className="card">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
                <span><b>Adet : {item.inventory}</b></span><br />
                <span><b>Fiyat : &#8378; {item.price}</b></span>
                <span type="button" style={{ float: "right" }} onClick={() => { this.handleClick(item.id) }}>
                  {item.inventory > 0 && <BagPlus style={{ width: "25", height: "25" }} />}

                </span>
              </div>
            </div>
          </div>
        ))}

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    items: state.items,
    cart: state.addedItems
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);