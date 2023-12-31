import React, { useState } from 'react';
import "../css/puzzle.css";

function Square() {
    return (
      <button className="square">
        
      </button>
    );
}


function Board({ selectedSize }) {
    // Extract the numeric value from the string (e.g., "4x4" -> 4)
    const size = parseInt(selectedSize.split('x')[0]);

    // Function to create a single row with the correct number of squares
    const createRow = (rowIndex) => {
        let squares = [];
        for (let i = 0; i < size; i++) {
            squares.push(<Square key={`square-${rowIndex}-${i}`} />);
        }
        return <div className="board-row" key={`row-${rowIndex}`}>{squares}</div>;
    };

    // Create all rows based on the size
    const createBoard = () => {
        let rows = [];
        for (let i = 0; i < size; i++) {
            rows.push(createRow(i));
        }
        return rows;
    };

    return (
        <>
            {createBoard()}
        </>
    );
}


export default Board;