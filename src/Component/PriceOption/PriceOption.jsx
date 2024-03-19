import { FaCircleCheck } from "react-icons/fa6";
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {

    const {name,description,price,duration,features,img} = option
    return (
        <div className=' p-6 rounded-2xl border space-y-3 flex flex-col justify-between bg-white'>
            <h3 className='text-2xl text-center  font-semibold'>{name}</h3>
            <div>
                <img className='h-[200px] object-cover w-full rounded-xl' src={img} alt="" />
            </div>
            <p className=' text-base font-medium'>{description}</p>
            <ul>
                <h4 className="text-2xl font-semibold">Features</h4>
                {
                    features.map( (feature,index) => <li className="flex items-center gap-x-3 text-green-600" key={index}><FaCircleCheck></FaCircleCheck> {feature}</li> )
                }
            </ul>
            <h3 className="text-2xl font-bold">{duration}</h3>
            <h1 className="text-5xl font-bold text-[#050715]">{price}</h1>
            <button className="bg-[#5E3AD4] py-5 rounded-xl text-white text-xl font-medium">Subscribe Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object.isRequired
};

export default PriceOption;