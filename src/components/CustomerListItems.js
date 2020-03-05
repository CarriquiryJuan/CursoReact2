import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CustomerListItems = ({name, editActions, delAction, urlPath, dni}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field" > <Link to={`${urlPath}${dni}`} >{name}</Link></div>  
                <div className="field" > <Link to={`${urlPath}${dni}/edit`} >{editActions}</Link></div>  
                <div className="field" > <Link to={`${urlPath}${dni}/del`} >{delAction}</Link></div>  

            </div>  
        </div>
    );
};
CustomerListItems.propTypes = {
    name:PropTypes.string.isRequired,
    editActions: PropTypes.string.isRequired,
    delAction:  PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    
};

export default CustomerListItems;