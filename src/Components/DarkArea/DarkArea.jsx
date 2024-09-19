import React from 'react';
import { FaBus, FaRecycle } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import './DarkArea.css';

const blockData = [
  { icon: <FaBus />, heading: 'Free Shipping', text: 'Above 5 dollar' },
  { icon: <MdContacts />, heading: 'Certified Organic', text: '100% Organic' },
  { icon: <CiDollar />, heading: 'Huge Saving', text: 'At low Price' },
  { icon: <FaRecycle />, heading: 'Easy Return', text: 'No Question Asked' }
];

const DarkArea = () => {
  return (
    <div className='DarkArea-Main'>
      {blockData.map((block, index) => (
        <div className='blocks' key={index}>
          <div className='image-heading'>
            {block.icon}
            <h3>{block.heading}</h3>
          </div>
          <div className='Darktext'>
            <p>{block.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DarkArea;
