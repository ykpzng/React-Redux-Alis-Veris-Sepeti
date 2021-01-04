import React from 'react';
import { Link } from "react-router-dom";
import { Cart3 } from 'react-bootstrap-icons';
import { connect } from 'react-redux';


function Navbar(props) {

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Alışveriş</Link>
        <div className="d-flex">
          <Link to="/" className="nav-link">Alışveriş</Link>
          <Link to="/cart" className="nav-link">Sepetim</Link>

          <span className="nav-link">({props.addedItems.length}) <Cart3 style={{ width: "25", height: "25" }} /></span>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems
  }
}

export default connect(mapStateToProps)(Navbar);