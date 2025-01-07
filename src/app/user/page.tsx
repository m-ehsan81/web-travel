'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';

import { userMenuItems } from './constant';

function Admin() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="flex items-start gap-6 px-[155px] pt-5">
      <aside className="w-[318px] rounded-2xl border border-solid border-[#6C757D] p-4">
        <ul>
          {userMenuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`flex items-center gap-2 ${selectedIndex === index ? 'text-[#FC5C04]' : 'text-[#6C757D]'}`}
                onClick={() => setSelectedIndex(index)}
              >
                <Icon icon={item.icon} fontSize="24" />
                <span className="text-lg">{item.title}</span>
              </button>
              {userMenuItems.length !== index + 1 && (
                <div className="my-4 h-[1px] bg-[#6C757D]" />
              )}
            </li>
          ))}
        </ul>
      </aside>

      {userMenuItems[selectedIndex].content()}
    </div>
  );
}

export default Admin;
