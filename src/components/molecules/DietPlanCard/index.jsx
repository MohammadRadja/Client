import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import PropTypes from "prop-types";
const DietPlanCard = ({
  mealType,
  foodItem,
  calories,
  createdAt,
  description,
  id,
}) => {
  return (
    <div className="max-w-xs w-[400px] h-[350] p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0 overflow-hidden">
      <div className="flex flex-col h-full">
        <h2 className="text-xl font-bold text-secondary mb-2 text-center">
          {foodItem}
        </h2>
        <span className="text-primary uppercase font-bold mb-5 text-center">
          {mealType}
        </span>
        <span className="text-tertiary mb-2">
          Consumption Date : {new Date(createdAt).toLocaleDateString("en-GB")}
        </span>
        <p className="text-tertiary mb-2">Total Calories : {calories} kkal</p>
        <p className="mb-3 font-normal text-tertiary dark:text-gray-400 overflow-hidden h-full">
          {description}
        </p>

        <Link
          to={`/dietPlan/${id}`}
          className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <RiArrowRightLine className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

DietPlanCard.propTypes = {
  mealType: PropTypes.string,
  foodItem: PropTypes.string,
  calories: PropTypes.number,
  createdAt: PropTypes.string,
  id: PropTypes.number,
};

export default DietPlanCard;
