import PropTypes from "prop-types";
import styles from "./CityList.module.css";
import Spinner from "../component/Spinner";
import CityItem from "./CityItem";

function CityList({ cities, isloading }) {
  if (isloading) return <Spinner />;
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
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,

  isloading: PropTypes.bool,
};

export default CityList;
