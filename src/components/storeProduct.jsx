import React, { Component } from 'react';

class StoreProduct extends Component {
   
    render() { 
         return ( 
             <div className="col-sm-3">       
                 <div  className="card-body" style={{background: 'lightblue',textAlign: 'center'}}> 
                         <h5 className="card-title">{this.props.product.name}</h5>
                         <p className="card-text">Code: {this.props.product.code}</p>
                         <p className="card-text">Price: {this.props.product.price}</p>
                         <p className="card-text">Quantity: {this.props.product.quantity}</p>
                         <button  onClick= { () => this.props.onIncrement(this.props.product)} 
                                     className="btn btn-light btn-sm m-2">Increase</button>
                         <button  onClick= { () => this.props.onDecrement(this.props.product)} 
                                  disabled={this.props.product.quantity === 0}   className="btn btn-light btn-sm m-2">Decrease</button>
                 </div>     
                 <br/>
          </div>
         );
    }

    formatCount(){
        const {quantity} = this.props.product;
        return quantity === 0 ? <span></span> : quantity ;
    }
}
 
export default StoreProduct;





       

 


        
                 