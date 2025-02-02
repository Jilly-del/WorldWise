import PropTypes from "prop-types";
import styles from "./CountryList.module.css";
import Spinner from "../component/Spinner";
import CountryItem from "./CountryItem";
import Message from "../component/Message";

function CountryList({ cities, isloading }) {
  if (isloading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first City" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      country: PropTypes.string,
    })
  ),

  isloading: PropTypes.bool,
};

export default CountryList;
