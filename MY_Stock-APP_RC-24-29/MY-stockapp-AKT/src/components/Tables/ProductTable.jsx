import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import * as React from "react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../services/stocks";
import { btnStyle } from "../../styles/globalStyle";
import DataTable from "../Commons/DataTable";
import Loading from "../Commons/Loading";
import EditIcon from "@mui/icons-material/Edit"; 
import { GridActionsCellItem } from "@mui/x-data-grid";


export default function ProductTable({ handleOpen, setInitialState }) {
  const { data: products, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "categoryId",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      editable: false,
      flex: 2,
      valueGetter: (value) => {
        // console.log(value)
        return value?.name ?? "-No Category-";
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 150,
      flex: 2,
      headerAlign: "center",
      align: "center",
      valueGetter: (value) => value?.name ?? "-No Brand-",
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      width: 110,
      headerAlign: "center",
      align: "center",
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      minWidth: 40,
      flex: 1,
      renderCell: ({row: {_id,categoryId,brandId,name,quantity,actions}}) => (
        <>
        <GridActionsCellItem
        key={'edit'}
          icon={<EditIcon />}
          label="Edit"
          onClick={() => {
            handleOpen();
            setInitialState({_id, categoryId, brandId, name,quantity, actions}); 
          }}
          sx={btnStyle}
        />
        <GridActionsCellItem
          icon={<DeleteOutlineIcon />}
          label="Delete"
          onClick={() => deleteProduct(_id)} // Make sure to pass params.id correctly
          sx={btnStyle}
        />
      </>
        // console.log(params)
        // <DeleteOutlineIcon
        //   onClick={() => deleteProduct(params.id)}
        //   sx={btnStyle}
        // />
      ),
    },
  ];
  if (isLoading) return <Loading />;
  return <DataTable rows={products} columns={columns} />;
}
