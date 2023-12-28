import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ActivityCard = ({ title, goal, id }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const truncatedGoal = truncateText(goal, 105);
  return (
    <div className="max-w-xs w-[400px] h-[350] p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0 overflow-hidden">
      <div className="flex flex-col h-full">
        <h2 className="text-center mb-2 text-xl font-bold tracking-tight text-secondary dark:text-white">
          {title}
        </h2>
        <span className="mb-3 font-normal text-tertiary dark:text-gray-400 overflow-hidden h-full">
          {truncatedGoal}
        </span>
        <Link
          to={`/activity/${id}`}
          className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <RiArrowRightLine className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  title: PropTypes.string,
  goal: PropTypes.string,
  id: PropTypes.number,
};

export default ActivityCard;
