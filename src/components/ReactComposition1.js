import React from 'react'
import Tabs from './Tabs'

function ReactComposition1() {
    const tabs = [
        {
            title:"Tab 1"
        },
        {
            title:"Tab 2"
        },
        {
            title:"Tab 3"
        },
    ]
  return (
    <div>
        <Tabs tabs={tabs} />
    </div>
  )
}

export default ReactComposition1