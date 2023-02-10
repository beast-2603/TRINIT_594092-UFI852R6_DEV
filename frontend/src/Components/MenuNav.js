import React from 'react'
import {Link} from 'react-router-dom';
const LINKS =[
    {to:"/About",text:"About"},
    {to:"/Contact",text:"Contact"},
    {to:"/Service",text:"Service"},
    {to:"/Profile",text:"Profile"}
 

]

const MenuNav = () => {
  return (
    <div>
        <ul>
            {
                LINKS.map(item=>(   <li key={item.to}>
                    <Link to={item.to}>{item.text}</Link>
                        </li>))
            }
         
        </ul>
    </div>
  )
}

export default MenuNav
