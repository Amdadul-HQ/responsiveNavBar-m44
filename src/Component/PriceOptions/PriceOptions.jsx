

import { useEffect, useState } from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    const [pricesOptions,setPricesOptions] = useState([])


    useEffect( () => {
        fetch('prices.json')
        .then( res => res.json())
        .then( data => setPricesOptions(data) )
    } ,[])

    return (
        <div className='grid gap-5 gird-col-1 lg:px-0 px-4 lg:grid-cols-3'>
            {
                pricesOptions.map( option => <PriceOption key={option.id} option={option}></PriceOption> )
            }
        </div>
    );
};


export default PriceOptions;