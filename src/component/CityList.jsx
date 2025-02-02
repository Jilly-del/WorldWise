import PropTypes from "prop-types";
import styles from "./CityList.module.css";
import Spinner from "../component/Spinner";
import CityItem from "./CityItem";
import Message from "../component/Message";

function CityList({ cities, isloading }) {
  if (isloading) return <Spinner />;
  if (!cities.length) return <Message message="Add your first City" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      country: PropTypes.string,
    })
  ),

  isloading: PropTypes.bool,
};

export default CityList;
