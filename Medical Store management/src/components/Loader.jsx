
import PropagateLoader	 from "react-spinners/PropagateLoader";
import PropTypes from 'prop-types';
const Loader = ({size, color}) => {
  return (
    <div className="container">
      <div className="row loader">
        <div className="col  d-flex align-items-center justify-content-center">
          <PropagateLoader	 size={size} color={color} />
        </div>
      </div>
    </div>
  );
};
Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Loader.defaultProps = {
  size: 32,
  color: '#218a81',
};


export default Loader;