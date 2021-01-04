import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';
import { addQuantity, removeItem, subtractQuantity } from './actions/cartActions';

class Cart extends Component {

  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }

  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }

  render() {
    console.log("Carttan : ", this.props);

    return (
      <div className="card mb-3">
        <p><strong>Sepet Toplamı : &#8378; {this.props.total}</strong></p>
        {this.props.items.map((item) => (
          <div key={item.id}>
            <div className="row g-0" >
              <div className="col-md-4">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <span><b>Fiyat : &#8378; {item.price}</b></span>
                  <p></p>
                  <span type="button"><PlusCircle onClick={() => { this.handleAddQuantity(item.id) }} /></span>

                  <span> <b> {item.quantity} </b> </span>

                  <span type="button" ><DashCircle onClick={() => { this.handleSubtractQuantity(item.id) }} /></span>
                  <p></p>
                  <button className="btn btn-danger"
                    onClick={() => { this.handleRemove(item.id) }}>Sepetten Kaldır</button>
                </div>
              </div>
            </div>
            <hr />
            <div>

            </div>
          </div>

        ))
        }
      </div>

    )

  }
}


const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    total: state.total
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    removeItem: (id) => { dispatch(removeItem(id)) },
    addQuantity: (id) => { dispatch(addQuantity(id)) },
    subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Cart);










