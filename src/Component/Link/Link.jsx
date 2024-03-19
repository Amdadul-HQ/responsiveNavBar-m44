
import PropTypes from 'prop-types';

const Link = ({route}) => {

    const {path,name} = route

    return (
        <li className='md:mr-6'><a href={path} >{name}</a></li> 
    );
};

Link.propTypes = {
    route:PropTypes.object.isRequired
};

export default Link;