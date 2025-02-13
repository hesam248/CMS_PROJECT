import React from 'react'
import './TopBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>

        <div className="topleft">
            <span className='logo'>hesam248👑</span>
        </div>

        <div className="topright">
            <div className="topbarIconContainer">
                <NotificationsIcon />
                <span className='topIconBadge'>2</span>
            </div>
            <div className="topbarIconContainer">
                <LanguageIcon />
                <span className='topIconBadge'>2</span>
            </div>
            <div className="topbarIconContainer">
                <SettingsIcon />
            </div>
            <img className='avatar' src="/Unofficial_JavaScript_logo_2.svg.png" alt="" />
        </div>
      </div>
    </div>
  )
}
