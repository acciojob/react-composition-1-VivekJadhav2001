import React, { useState } from 'react'

function Tabs({tabs}) {
    const [itemName, setItemName] = useState("Tab 1")
  return (
    <div>
        <ul>
            {tabs.map((item)=>(
                <li onClick={()=>setItemName(item.title)}>{item.title}</li>
            ))}
        </ul>

        <p>This is the content for {itemName}.</p>
    </div>
  )
}

export default Tabs