import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useStockCall from '../../hooks/useStockCall';
import { btnStyle } from '../../styles/globalStyle';



// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

function getRowId(row) {
    console.log(row);
    return row._id;
}

export default function ProductTable() {
    const {products} = useSelector(state => state.stock)
    const {deleteStockData} = useStockCall()

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
          field: 'categoryId',
          headerName: 'Category',
          width: 150,
          editable: true,
          valueGetter: (value) => {
             return value?.name ?? "**No Category**"
        }
    }   ,
        {
          field: 'brandId',
          headerName: 'Brand',
          width: 150,
          editable: true,
          valueGetter: (value) =>  value?.name ?? "**No Brand**",
        },
        {
          field: 'name',
          headerName: 'Name',
          type: 'number',
          width: 110,
          editable: true,
          
        },
        {
          field: 'quantity',
          headerName: 'Stock',
          type: 'number',
          width: 110,
          editable: true,
          
        },
        {
          field: 'actions',
          headerName: 'Actions',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          renderCell: (params) => (
            //   console.log(params);
              <DeleteOutlineIcon
              onClick={()=> deleteStockData("products", params.id)}
              sx={btnStyle}
              />
          )
        },
      ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={getRowId}
        pageSizeOptions={[5,10,25]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}