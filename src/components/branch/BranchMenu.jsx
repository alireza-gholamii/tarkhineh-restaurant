import React from 'react';
import BranchFood from './BranchFood';

const BranchMenu = ({ foods }) => {
    return (
        <div>
            <div>
                <h5>{foods[0]}</h5>
            </div>
            <div>
                {
                    foods[1].map(
                        (item , index) =>
                                <BranchFood key={index} foodData={item} />
                    )
                }
            </div>
        </div>
    );
};

export default BranchMenu;