import './menuButton.css'
import { useNavigate } from "react-router";
import React from 'react';

const test = () => {
    alert("hi");
}

const PlayButton = ({label = "Play", destination = "Record"}) => {
    let navigate = useNavigate();
    const routeChange = () => {

        navigate(destination, { replace: true });
    }

    return(
        
      
        
        <button className = 'menu-button-big menu' onClick = {routeChange}>
        {/* this is triangle code i edited from somewhere */}
        <svg width="220" height="115" style={{ display: 'block' }}>
            {/* bot-left to top-center */}
            <polygon points="-4,115 220,0 0,0" fill="#F2B50D" opacity="0.067" />
            {/* vertically flipped */}
            <polygon points="0,0 220,115 -4,115" fill="#F2B50D" opacity="0.067" />

        </svg>

            
        <span className = 'menu-text-big menu-text'>
        {label}
        </span>



        </button>


        
    );
};

export default PlayButton;