import React, { useState } from 'react';
import './StarRating.scss'
import { FaStar } from "react-icons/fa"

const StarRating = (props) => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    return(
        <div {...props}>
            {[ ...Array(5) ].map( (star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i} className='label'>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                            />
                        <FaStar 
                            size={40} 
                            color={ratingValue <= (hover || rating) ? "#E4C000" : "#00000040"} 
                            style={{ cursor: `pointer` }} 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            />
                    </label>
                )
            })}
        </div>
    )
  };
export default StarRating