import Image from 'next/image';
import React from 'react';

function NovaLogo() {
  return (
    <div className="flex flex-row-reverse items-end">
      <Image src="icons/nova.svg" alt="Nova Logo" width={40} height={40} />
      <p className="text-[#FC5C04]">ova</p>
      <p className="text-[#FBA363]">Safar</p>
    </div>
  );
}

export default NovaLogo;
