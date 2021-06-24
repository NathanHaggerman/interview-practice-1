import "./App.css";

import React, { useEffect, useMemo, useState } from "react";

import CartModal from "../cartModal/CartModal";
import Table from "../table/Table";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://pharaoh.candor-usa.com/industries");
      setData(result.data);
    })();
  }, []);

  const addItem = (row) => {
    setCartData(cartData.concat(row.original));
  };

  const removeItem = (row) => {
    setCartData(cartData.filter((data) => data.title !== row.original.title));
    console.log("cartData", cartData);
  };

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

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>View Cart</button>
      <CartModal
        onClose={() => setShow(false)}
        cartData={cartData}
        removeItem={removeItem}
        show={show}
      />
      <Table columns={columns} data={data} addItem={addItem} />
    </div>
  );
}

export default App;
