import { useState } from 'react';
import { tabs } from './Data/tabs'
export default function Tab() {
 let [activeTabs, setActiveTabs] = useState(0);
  let [activeContent, setActiveContent] = useState(tabs[0]);
  let changeTabs = (index) => {
   setActiveTabs(index)
   setActiveContent(tabs[index])
  }
  return (
    <div className='tabsOuter'>
    <h1>Tabs</h1>
    <ul>
      {tabs.map((tabsItem, index) => (
        <li key={index}>
          <button
            onClick={() => changeTabs(index)}
            className={activeTabs === index ? 'activeButton' : ''}
          >
            {tabsItem.title}
          </button>
        </li>
      ))}
    </ul>
    {activeContent !== undefined && (
      <p>{activeContent.description}</p>
    )}
  </div>
  )
}
