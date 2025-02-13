import React from 'react'
import { useState } from 'react'
import { product } from '../../datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ModalProduct from '../../components/productModal/ModalProduct';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Products.css'



export default function UserList() {

  const [productData, setProductData] = useState(product)

  const productDelete = productID =>{
    setProductData(productData.filter(user => user.id != productID))
  }


  const columns = [
    {
      field : 'id',
      headerName:'ID',
      width:90,
    },

    {
      field : 'image',
      headerName:'image',
      width:120,

      renderCell: (params)=>{
          return (
            
            <Link to='/' className='link'>
            <div className="userListUser">
              <img src={require('../../image/1600w-5MVEQt0eQ1A.webp')} alt="" className='userListImg' />
              {/* {params.row.username} */}
            </div>
            </Link>
            
          )        
      }
    },

    {
      field : 'Brand',
      headerName:'Brand',
      width:130,       
    },


    {
      field : 'year',
      headerName:'year',
      width:120,
    },

    {
      field : 'available',
      headerName:'available',
      width:110,
    },
    {
      field : 'Buy',
      headerName:'Buy',
      width:140,

      renderCell : (params) =>{
        return (
          <>
          <Link to='/' className='link'>
            <button className='userListEdit'>order registration</button>
          </Link>
          </>
        )
      }
    },
    {
      field : 'Add to cart',
      headerName:'Add to cart',
      width:130,

      renderCell : (params) =>{
        return (
          <ModalProduct/>
        )
      }
    },
    {
      field : 'Delete',
      headerName:'Delete',
      width:80,

      renderCell : (params) =>{
        return (
          <Button onClick={()=>{}}><DeleteForeverIcon className='delete' onClick = {()=>{productDelete(params.row.id)}} /></Button>
        )
      }
    },

  ]

  return (
    <div className='userList'>
      <DataGrid
      rows={productData}
      columns={columns}
      disableRowSelectionOnClick
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 4,
          },
        },
      }}
      />
    </div>
  )
}
