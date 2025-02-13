import React from 'react'
import { useState } from 'react'
import { userRows } from '../../datas'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './UserList.css'

export default function UserList() {

  const [userDatas, setUserDatas] = useState(userRows)

  const userDelete = userID =>{
    setUserDatas(userDatas.filter(user => user.id != userID))
  }

  const columns = [
    {
      field : 'id',
      headerName:'ID',
      width:90,
    },

    {
      field : 'user',
      headerName:'user',
      width:200,

      renderCell: (params)=>{
          return (
            
            <Link to='/' className='link'>
            <div className="userListUser">
              <img src={require('../../image/1600w-5MVEQt0eQ1A.webp')} alt="" className='userListImg' />
              {params.row.username}
            </div>
            </Link>
            
          )        
      }
    },

    {
      field : 'email',
      headerName:'email',
      width:200,       
    },


    {
      field : 'Status',
      headerName:'Status',
      width:120,
    },

    {
      field : 'transaction',
      headerName:'transactions',
      width:160,
    },
    {
      field : 'action',
      headerName:'Actoin',
      width:160,

      renderCell : (params) =>{
        return (
          <>
          <Link to='/' className='link'>
            <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutlineIcon className='userListDelete' onClick = {()=>{userDelete(params.row.id)}} />
          </>
        )
      }
    }

  ]

  return (
    <div className='userList'>
      <DataGrid
      rows={userDatas}
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
