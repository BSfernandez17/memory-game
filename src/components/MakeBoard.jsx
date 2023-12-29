import React, { useEffect, useState } from "react";
import { Board } from './board/Board';
import src1 from '../images/alex.png';
import src2 from '../images/barbora.png';
import src3 from '../images/levan.png';
import src4 from '../images/matt.png';
import src5 from '../images/Oleg.png';
import src6 from '../images/todd.png';

const images = [
    {
        src: src1,
        name: 'alex'
    },
    {
        src: src2,
        name: 'barbora'
    },
    {
        src: src3,
        name: 'levan'
    },
    {
        src: src4,
        name: 'matt'
    },
    {
        src: src5,
        name: 'Oleg'
    },
    {
        src: src6,
        name: 'todd'
    }
];

const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export const MakeBoard = () => {
    const [shuffleMemoBlock, setShuffleMemoBlock] = useState([]);

    useEffect(() => {
        const shuffleMemoList = shuffleArray([...images, ...images]);
        setShuffleMemoBlock(shuffleMemoList.map((image, i) => ({ index: i, image, flipped: false }) ));
    }, []);

    return (
        <Board memoBlocks={shuffleMemoBlock}></Board>
    );
};
