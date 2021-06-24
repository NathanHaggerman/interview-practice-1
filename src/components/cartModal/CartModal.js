import "../app/App.css";

import React, { useMemo } from "react";

import CartTable from "../cartTable/CartTable";

const CartModal = ({ cartData, onClose, removeItem, show }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Data",
        columns: [
          {
            Header: "SIC Code",
            accessor: "sic_code",
          },
          {
            Header: "Title",
            accessor: "title",
          },
        ],
      },
    ],
    []
  );

  return show ? (
    <div className="modal" onClick={onClose}>
      <div clasName="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Cart</h4>
        </div>
        <div className="modal-body">
          <CartTable
            columns={columns}
            data={cartData}
            removeItem={removeItem}
          />
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button">
            Close
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CartModal;
