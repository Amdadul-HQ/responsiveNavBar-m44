
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {

    const {name,description,price,duration,features,img} = option
    return (
        <div className=' p-6 rounded-2xl border space-y-3'>
            <h3 className='text-2xl text-center  font-semibold'>{name}</h3>
            <div>
                <img className='h-[200px] object-cover w-full rounded-xl' src={img} alt="" />
            </div>
            <p className='text-gray-500 text-xl font-medium'>{description}</p>
            <ul>
                <h4>Features</h4>
                {
                    features.map( (feature,index) => <li key={index}>{feature}</li> )
                }
            </ul>
            <h3>{duration}</h3>
            <h1>{price}</h1>
            <button>Subscribe Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object.isRequired
};

export default PriceOption;