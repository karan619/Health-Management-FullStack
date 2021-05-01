import React, { useState, useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import BTable from "react-bootstrap/Table";
import Filter from "./Filter";
//import DATA from "./Data.json";
import { COLUMNS } from "./columns";

const TestTable = ({ Notes }) => {
  //const [tdata, setData] = useState([]);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => {
    if (Notes.length === 0) {
      return [];
    } else if (Notes.length > 0) {
      return Notes;
    }
  }, [Notes]);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      {console.log("this is the value", tableInstance)}
      <div>
        <Filter filter={globalFilter} setFilter={setGlobalFilter} />
        <BTable striped bordered hover size="sm" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </BTable>
      </div>
    </>
  );
};

export default TestTable;
