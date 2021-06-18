import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "../table/Table";
import "./App.css";
import CartModal from "../cartModal/CartModal";

function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await axios(" https://pharaoh.candor-usa.com/industries");
      setData(result.data);
    })();
  }, []);

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


  return (
    <div className="App">
      <button onClick={() =>  setShow(true)}>View Cart</button>
      <CartModal onClose={() => setShow(false)} show={show}/>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
