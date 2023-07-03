import React from 'react';
import BranchMenu from './BranchMenu';
import { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContextProvider';

const Branch = () => {

    const foodList = useContext(FoodContext)

    return (
        <div>
            {
                foodList.map(
                    (item , index) => <BranchMenu key={index} foods={item} />
                    )
            }
        </div>
    );
};

export default Branch;