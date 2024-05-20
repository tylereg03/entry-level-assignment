import { useState, useMemo } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { StyledInput, StyledSelect, StyledGrid } from "./styles";
import rowData from "./data.json";

type Row = {
  id: number;
  first_name: string;
  last_name: string;
  ip_address: string;
  balance: number;
};

function App() {
  const [search, setSearch] = useState<string>("");
  const [selectedRowID, setSelectedRowID] = useState(false);

  const columnDefs = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "first_name",
      headerName: "First Name",
    },
    {
      field: "last_name",
      headerName: "Last Name",
    },
    {
      field: "ip_address",
      headerName: "IP Address",
      cellRenderer: (params: any) => {
        // replace false with the selectedRowID boolean, which is toggled through the use of onCellClicked
        if (selectedRowID) {
          return params.value;
        }
        return "";
      },
      onCellClicked: () => {
        setSelectedRowID(!selectedRowID);
      },
    },
    {
      field: "balance",
      headerName: "Balance",
      valueFormatter: (p: any) => {
        // Using a regular expression, format the balance as a currency rather than a simple integer
        return (
          "$" +
          Number(p.value)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      },
    },
  ] as const; // since these fields are declared as read-only, ag grid will throw an error as colDefs likes the definitions to be mutable

  const [selectedOption, setSelectedOption] =
    useState<(typeof columnDefs)[number]["field"]>("id");

  const options = () => {
    const opt: { label: string; value: string }[] = [];
    // Iterate over columnDefs as a easy fix to repeating fields for the dropdown filter
    columnDefs.forEach((column) => {
      opt.push({
        label: column.headerName,
        value: column.field,
      });
    });
    return opt;
  };

  // addition which implements a search feature that filters the grid data
  // based on user input
  const filteredData = useMemo(() => {
    return rowData.filter((row) => {
      const fieldValue = row[selectedOption].toString().toLowerCase();
      return fieldValue.includes(search.toLowerCase());
    });
  }, [search, selectedOption, rowData]);

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div
      className="ag-theme-material"
      style={{
        height: 500,
      }}
    >
      <StyledInput
        $yourProp={true}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <StyledSelect
        options={options()}
        value={selectedOption}
        onChange={(e) =>
          setSelectedOption(e as (typeof columnDefs)[number]["field"])
        }
      />
      <StyledGrid
        defaultColDef={defaultColDef}
        rowData={filteredData}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default App;
