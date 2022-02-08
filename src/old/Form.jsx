import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import styles from './Form.module.css';
// import { propTypes } from 'react-bootstrap/esm/Image';

const Form = ({submitSearch}) => {
    const [location, setLocation] = useState('')
    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;    //if no location or empty string//
        submitSearch(location);  
        console.log('target', e)            // func onSubmit from the Page
    };

    const handleChange = e => {
         console.log('target', e)
         setLocation(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className='form'
                placeholder="Search for location"
                required
                value={location}
                onChange={handleChange}
            />

            <button type="submit" className='btn-1' onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

// Form.propTypes = {
//     submitSearch: propTypes.func.isRequired,
// };

export default Form;