
import PropTypes from 'prop-types';

const Link = ({route}) => {

    const {path,name} = route

    return (
        <li className='md:mr-6 text-white hover:text-[#5E3AD4]  transition-all'><a href={path} >{name}</a></li> 
    );
};

Link.propTypes = {
    route:PropTypes.object.isRequired
};

export default Link;