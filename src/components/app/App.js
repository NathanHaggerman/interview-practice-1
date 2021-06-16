import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "../table/Table";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

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
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
