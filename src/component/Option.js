import React from 'react'
import './Option.css';
import {Link} from 'react-router-dom';

const Option = (props) => {
    return (
        <Link to={props.getLink} >
            <div className='text-center div'>
                <h1 className='h1'>{props.getName}</h1>
            </div>
        </Link>
    )
}

export default Option;