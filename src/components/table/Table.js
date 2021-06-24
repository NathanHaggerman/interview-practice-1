import React, { useState } from "react";
import { useFilters, useSortBy, useTable } from "react-table";

export default function Table({ columns, data, addItem }) {
  const [titleFilterInput, setTitleFilterInput] = useState("");
  const [sicFilterInput, setSicFilterInput] = useState("");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );

  const handleTitleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("title", value);
    setTitleFilterInput(value);
  };

  const handleSICFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("sic_code", value);
    setSicFilterInput(value);
  };

  return (
    <>
      <input
        value={titleFilterInput}
        onChange={handleTitleFilterChange}
        placeholder={"Search by Title"}
      />
      <input
        value={sicFilterInput}
        onChange={handleSICFilterChange}
        placeholder={"Search by SIC code"}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <button onClick={(e) => addItem(row)}>Add to cart</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
