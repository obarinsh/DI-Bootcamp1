import React from 'react'
import logo from './logo.svg';
import './Exercise.css';

function Exercise() {
    // const headingStyle = {
    //     color: 'red',
    //     backgroundColor: 'lightblue'
    // }

    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };
    return (
        <div>
            <h1 style={style_header}>This is a red</h1>
            <p className='para'>This is paragraph</p>
            <a href='#'>This is a link</a>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <button type="submit">Submit</button>
            </form>
            <img src={logo} alt="logo" />
        </div >
    );
}

export default Exercise;