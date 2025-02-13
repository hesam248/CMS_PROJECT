import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './SideBar.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
           <h3 className="sidebarTitle">Dashboard</h3> 
           <ul className="sidebarList">
             <Link to='/' className='link'>
                <li className="sidebarListItem active">
                    <HomeIcon className='sidebarIcon' />
                    Home
                </li>
                </Link>
                <li className="sidebarListItem">
                    <TimelineIcon className='sidebarIcon' />
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUpIcon className='sidebarIcon' />
                    Sales
                </li>
           </ul>
        </div>
        <div className="sidebarMenu">
           <h3 className="sidebarTitle">Quick Menu</h3> 
           <ul className="sidebarList">
            <Link to='/users' className='link'>
                <li className="sidebarListItem ">
                    <PermIdentityIcon className='sidebarIcon' />
                    Users
                </li>
                </Link>
                <Link to='/newuser' className='link'>
                <li className="sidebarListItem">
                    <PersonAddOutlinedIcon className='sidebarIcon' />
                    New User
                </li>
                </Link>
                <Link to='Products' className='link'>
                <li className="sidebarListItem">
                    <StorefrontIcon className='sidebarIcon' />
                    Products
                </li>
                </Link>
                <li className="sidebarListItem">
                    <AttachMoneyIcon className='sidebarIcon' />
                    Transactions
                </li>
                <li className="sidebarListItem">
                    <ReportGmailerrorredOutlinedIcon className='sidebarIcon' />
                    Riports
                </li>
           </ul>
        </div>
        <div className="sidebarMenu">
           <h3 className="sidebarTitle">Notifications</h3> 
           <ul className="sidebarList">
                <li className="sidebarListItem ">
                    <EmailOutlinedIcon className='sidebarIcon' />
                    Mail
                </li>
                <li className="sidebarListItem">
                    <FeedbackOutlinedIcon className='sidebarIcon' />
                    feedback
                </li>
                <li className="sidebarListItem">
                    <MessageOutlinedIcon className='sidebarIcon' />
                    message
                </li>
           </ul>
        </div>
        <div className="sidebarMenu">
           <h3 className="sidebarTitle">staff</h3> 
           <ul className="sidebarList">
                <li className="sidebarListItem">
                    <ManageAccountsOutlinedIcon className='sidebarIcon' />
                    Manage
                </li>
                <li className="sidebarListItem">
                    <ContentPasteSearchOutlinedIcon className='sidebarIcon' />
                    Content
                </li>
                 <li className="sidebarListItem">
                     <InfoOutlinedIcon className='sidebarIcon' />
                    Info
                </li>
           </ul>
        </div>
      </div>
    </div>
  )
}
