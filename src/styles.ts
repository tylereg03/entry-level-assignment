import styled from "styled-components";
import { Input, Select } from "antd";
import { AgGridReact } from "ag-grid-react";

export const StyledInput = styled(Input)<{ $yourProp?: boolean }>`
  background-color: ${({ $yourProp }) => ($yourProp ? "white" : "cyan")};
  width: 80%;

  /* Style the placeholder text */
  &::placeholder {
    color: gray; /* Set color to gray */
    font-style: italic; /* Set font style to italic */
    font-size: 16px;
  }
`;

export const StyledSelect = styled(Select)`
  min-width: 20%;
  font-size: 16px;
`;

export const StyledGrid = styled(AgGridReact)`
  /* Example grid styles */
  .ag-header-cell {
    background-color: #f0f0f0; /* Light gray background for column headers */
    color: #333; /* Dark gray text color for column headers */
    font-weight: bold; /* Bold font for column headers */
    font-size: 18px; /* Font size for column headers */
  }

  .ag-cell {
    font-size: 16px; /* Font size for cell content */
  }
`;
