'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

import { adminMenuItems } from './constant';

function Admin() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <div className="mt-[88px] flex items-start gap-6 px-[155px]">
      <aside className="w-[318px] rounded-2xl border border-solid border-[#6C757D] p-4">
        <ul>
          {adminMenuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`flex items-center gap-2 ${selectedIndex === index ? 'text-[#FC5C04]' : 'text-[#6C757D]'}`}
                onClick={() => setSelectedIndex(index)}
              >
                <Icon icon={item.icon} fontSize="24" />
                <span className="text-lg">{item.title}</span>
              </button>
              {adminMenuItems.length !== index + 1 && (
                <div className="my-4 h-[1px] bg-[#6C757D]" />
              )}
            </li>
          ))}
        </ul>
      </aside>

      {adminMenuItems[selectedIndex].content()}
    </div>
  );
}

export default Admin;
