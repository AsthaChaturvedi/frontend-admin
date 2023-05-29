import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
import { userData } from "../../dummyData";
import "../product/product.css";
export default function ProductList() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  
console.log();
  useEffect(() => {
    getProducts(dispatch);
    console.log("products:", products);
  }, [dispatch]);
  const handleDelete = (id) => {
    deleteProduct(dispatch, id);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (  
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        ); 
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(row) => row._id}
        checkboxSelection
      />
    </div>
  );
}
// id: 1,
// name: "Apple Airpods",
// img: "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
// stock: 123,
// status: "active",
// price: "$120.00",

// import "../userList/userList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { productRows, userRows } from "../../dummyData";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function ProductList() {
//   const [data, setData] = useState(productRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };
//   // const product = {
//   //   unitno:12,
//   //   vendor:"Apple",
//   //   aval:true,
//   //   size:90,
//   //   colour:'red',
//   //   material:"Cotton",
//   //   quantity:90,
//   //   discrption:'this is the best product',
//   //   category:"Casual",
//   //   brand:"Sara",
//   //   product_type:"Casual"
//   // }
//   const columns = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="userListUser">
//             <img className="userListImg" src={params.row.img} alt="" />
//             {params.row.name}
//           </div>
//         );
//       },
//     },
//     { field: "stock", headerName: "Stock", width: 200 },
//     {
//       field: "price",
//       headerName: "price",
//       width: 120,
//     },
//     { field: "vendor", headerName: "Vendor", width: 200 },
//     { field: "material", headerName: "Material", width: 200 },
//     { field: "category", headerName: "Category", width: 200 },
//     { field: "discrption", headerName: "Discrption", width: 200 },
//     { field: "product_type", headerName: "Product Type", width: 200 },

//     // {
//     //   field: "transaction",
//     //   headerName: "Transaction Volume",
//     //   width: 160,
//     // },
//     // {
//     //   field: "action",
//     //   headerName: "Action",
//     //   width: 150,
//     //   renderCell: (params) => {
//     //     return (
//     //       <>
//     //         <Link to={"/user/" + params.row.id}>
//     //           <button className="userListEdit">Edit</button>
//     //         </Link>
//     //         <DeleteOutline
//     //           className="userListDelete"
//     //           onClick={() => handleDelete(params.row.id)}
//     //         />
//     //       </>
//     //     );
//     //   },
//     // },
//   ];

//   return (
//     <div className="userList">
//       <DataGrid
//         rows={data}
//         disableSelectionOnClick
//         columns={columns}
//         pageSize={8}
//         checkboxSelection
//       />
//     </div>
//   );
// }

