import React from 'react'
import { transactions } from '../../datas'
import './widgetLg.css'

export default function WidgetLg() {

    const Button = ({type}) =>{
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }

  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Last transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amont</th>
            <th className="widgetLgTh">Status</th>
        </tr>

            {transactions.map(user =>{
                return <tr className="widgetLgTr">
                <td key={user.id} className="widgetLgUser">
                    <img src={require('../../image/1600w-5MVEQt0eQ1A.webp')} alt=""  className='widgetLgImg'/>
                    <span className='widgetLgName'>{user.costumer}</span>
                </td>
                <td className="widgetLgDate">
                    {user.Date}
                </td>
                <td className="widgetLgAmount">
                    {user.Amount}
                </td>
                <td className="widgetLgStatus">
                    <Button type={user.Status} />
                </td>
            </tr>
            })}

      </table>
    </div>
  )
}
