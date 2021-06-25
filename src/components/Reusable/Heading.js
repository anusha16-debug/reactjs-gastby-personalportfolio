import React from 'react';

const Heading = ({title}) => {
    return (
        <div className="row">
            <div className="col-12 text-center mb-4">
             <h2 className="display3 text-white text-uppercase"><span className="border-bottom">{title}</span></h2>
            </div>
        </div>
    )
}

export default Heading;