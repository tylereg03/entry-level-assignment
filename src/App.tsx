import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { StyledInput, StyledSelect } from "./styles";
import { ColDef } from "@ag-grid-community/core";

type Row = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  ip_address: string;
  balance: number;
};

const fields = [
  { field: "id" },
  { field: "first_name" },
  { field: "last_name" },
  { field: "ip_address" },
  { field: "balance" },
];

function App() {
  const [rowData, setRowData] = useState<Row[]>();
  const [colDefs, setColDefs] = useState<ColDef<Row>[]>();
  const [search, setSearch] = useState<string>("");

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div
      className="ag-theme-quartz"
      style={{
        height: 500,
      }}
    >
      <StyledInput value={search} onChange={(e) => setSearch(e.target.value)} />
      <StyledSelect />
      <AgGridReact defaultColDef={defaultColDef} />
    </div>
  );
}

export default App;
