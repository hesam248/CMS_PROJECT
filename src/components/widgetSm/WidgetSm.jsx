import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newUser } from '../../datas';

import './widgetSm.css'

export default function WidgetSm() {
  
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">new join members</span>
      <ul className="widgetSmList">

        {newUser.map(user =>(
          <li key={user.id} className="widgetSmListItem">
          <img src={require('../../image/1600w-5MVEQt0eQ1A.webp')} alt="" className='widgetSmImg' />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">{user.username}</span>
            <span className="widgetSmUserTitle">{user.title}</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityIcon className='widgetSmIcon' />
          </button>
        </li>
        ))}

      </ul>
    </div>
  )
}
