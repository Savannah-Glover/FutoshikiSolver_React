import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function CustomDropdown({ title, options, onSelect }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {options.map((option, index) => (
                    <Dropdown.Item key={index} onClick={() => onSelect(option)}>
                        {option}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

function Navbar({ selectedSize, setSelectedSize, puzzleSizes }) {
    const puzzles4x4 = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    const [selectPuzzle, setSelectPuzzle] = useState(puzzles4x4[0]);

    const handleSelectSize = (size) => {
        setSelectedSize(size);
    };

    const handleSelectPuzzle = (option) => {
        setSelectPuzzle(option);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ms-2">
            <a className="navbar-brand">Select Puzzle</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <CustomDropdown 
                            title="Puzzle Size" 
                            options={puzzleSizes} 
                            onSelect={handleSelectSize} 
                        />
                    </li>
                    <li className="ms-2">
                        <CustomDropdown 
                            title="Select Puzzle" 
                            options={puzzles4x4} 
                            onSelect={handleSelectPuzzle} 
                        />
                    </li>
                    
                    {/* Add more <Dropdown /> instances here with different props */}
                </ul>
            </div>
            <div>
                Selected Size: {selectedSize} {/* Display the selected size */}
            </div>
        </nav>
    );
}



export default Navbar;