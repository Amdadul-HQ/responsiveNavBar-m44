

import Banner from '../Banner/Banner';
import PriceOptions from '../PriceOptions/PriceOptions';
import Linechart from '../Rechart/Linechart.jsx';


const Main = () => {
    return (
        <main className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <PriceOptions></PriceOptions>
            <Linechart></Linechart>
        </main>
    );
};



export default Main;