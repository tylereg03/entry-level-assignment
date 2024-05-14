# Project Overview

This project involves developing a simple React application that displays a table of user data using the `ag-grid-react` library. The application should be capable of basic operations like searching, inserting, and deleting rows, as well as conditional display of data columns.

## Features to Implement

1. **Search Capability**:
    - Implement a search feature that filters the grid data based on user input do not use the ag-grid built in search system for this.
    - The search should be dynamic, filtering the grid as the user types.
    - Implement a dropdown  that allows users to choose the field (column) they want to search within (e.g., First Name, Last Name, Email), these fields should be filtered from the data object and not hard coded.

2. **Conditional Column Display**:
    - By default, the IP address column should not be visible.
      - On click, the ip address column should toggle between visible and hidden.
      - **Note**: The IP address column does not have to be removed from the grid, using css to hide it is fine.

3. **Row Insertion and Deletion**:
    - Provide UI elements (e.g., buttons) to allow users to add new rows and delete existing rows from the grid.
      - **Note**: No need to develop a form to add a new row, random data works.
    - Ensure that the application's state is updated appropriately to reflect these changes.

4. **Cell Formatting**
    - Format the balance field to display as currency (e.g., $1,000.00).

5. **Styling**:
    - We are not looking for a pixel-perfect design, use styled-components to pass props to change colors, font-sizes, etc.

6. **Typescript**:
   - Use of typescript is not required but is a bonus.

## Development Setup

**Running the Application**:
    The project can be run locally using `npm run dev` after installing dependencies with `npm install`.

## Task Assignment

- Begin by setting up the project structure and installing necessary dependencies.
- Implement the grid display using `AgGridReact` with the initial set of columns.
- Add the search functionality with dynamic input and dropdown to select the search field.
- Implement the functionality for adding and deleting rows, ensuring the grid and state are updated correctly.
- Add the toggle feature for IP address column visibility.
- Style the application, making use of the styled components.
