import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './style.css';
import { AgGridColumn } from 'ag-grid-react/lib/shared/agGridColumn';
import { columnDefs, defaultColDef, rowStyle, getRowStyle } from './data';
import { ContainAgGrid } from './style';
import Icons from './Icons';

const Table = () => {
  const [rowData, setRowData] = useState([
    {
      PRODUCTID: 'Michael Phelps',
      headerClass: 'country-header',
      PRODUCTNAME: 23,
      PRODUCTPRICE: 'United States',
      CATEGORY: 2008,
      ACTION: <Icons />,
    },
    {
      PRODUCTID: 'Michael Phelps',
      headerClass: 'country-header',
      PRODUCTNAME: 23,
      PRODUCTPRICE: 'United States',
      CATEGORY: 2008,
      ACTION: <Icons />,
    },
  ]);

  return (
    <>
      <ContainAgGrid className="ag-theme-balham">
        <AgGridReact
          reactUi
          getRowStyle={getRowStyle}
          rowStyle={rowStyle}
          rowHeight={62}
          defaultColDef={defaultColDef}
          rowData={rowData}
          columnDefs={columnDefs}
        >
          <AgGridColumn field="action">
            <Icons />
          </AgGridColumn>
        </AgGridReact>
      </ContainAgGrid>
    </>
  );
};

export default Table;
