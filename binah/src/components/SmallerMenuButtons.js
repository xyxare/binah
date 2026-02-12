import './menuButton.css';

const test = () => {
    alert("hi but smaller");
}

const SavedGamesButton = ({label = "Saved Games"}) => {
    return(
    <div>        
        
        <button className = 'menu-button-small menu' onClick = {test}>
        {/* this is triangle code i edited from somewhere */}
        <svg width="100" height="67" style={{ display: 'block' }}>
            {/* bot-left to top-center */}
            <polygon points="0,67 100,0 0,0" fill="#F2B50D" opacity="0.067" />
            {/* vertically flipped */}
            <polygon points="0,0 100,67 0,67" fill="#F2B50D" opacity="0.067" />

        </svg>

            
        <span className = 'menu-text-small menu-text'>
        {label}
        </span>



        </button>

        </div>
    )
};

export default SavedGamesButton;