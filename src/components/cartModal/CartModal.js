import React, { useMemo } from 'react'
import "../app/App.css";
import CartTable from "../cartTable/CartTable";

const CartModal = props => {    
    const columns = useMemo(
        () => [
          {
            Header: "Data",
            columns: [
              {
                Header: "SIC Code",
                accessor: "sic_code"
              },
              {
                Header: "Title",
                accessor: "title"
              }
            ]
          },
        ],
        []
    );

    if (!props.show) {
        return null
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div clasName="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Cart</h4>
                </div>
                <div className="modal-body">
                    <CartTable columns={columns} data={props.cartData} removeItem={props.removeItem}/>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default CartModal