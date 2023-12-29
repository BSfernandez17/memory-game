import React from 'react';
import { MemoBlock } from '../memoBlock/memoBlock.jsx';

import './Board.css';

export const Board = ({ memoBlocks }) => {
  return (
    <main className='board'>
      {memoBlocks.map((block, i) => (
        <MemoBlock key={`${i}_${block.image}`} memoBlock={block} />
      ))}
    </main>
  );
};
