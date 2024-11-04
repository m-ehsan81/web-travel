'use client';
import React, { useState } from 'react';
import { CustomTabsProps } from './type';

function CustomTabs(props: CustomTabsProps) {
  const { tabs } = props;

  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  const clickHandler = (id: number) => {
    setCurrentTab(id);
  };

  return (
    <div>
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${tab.id === currentTab ? 'border-b-2 border-b-[#FC5C04] opacity-100' : 'opacity-60'} pb-2 text-2xl leading-8 text-white`}
            onClick={() => clickHandler(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div key={tab.id}>{tab.id === currentTab && tab.content}</div>
      ))}
    </div>
  );
}

export default CustomTabs;
