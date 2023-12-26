import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import PropTypes from "prop-types";
const TimeManagementCard = ({ task, deadline, priority, id }) => {
  return (
    <div className="max-w-xs w-[400px] h-[350] p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0 overflow-hidden">
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{task}</h2>
        <span className="text-primary font-bold mb-5 text-center uppercase">{priority}</span>
        <span className="text-gray-600 mb-auto">
          Deadline  :{" "}
          {new Date(deadline).toLocaleDateString("en-GB")}
        </span>
        
        <Link
          to={`/timeManagement/${id}`}
          className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <RiArrowRightLine className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

TimeManagementCard.propTypes = {
  task: PropTypes.string,
  deadline: PropTypes.string,
  priority: PropTypes.string,
  id: PropTypes.number,
};

export default TimeManagementCard;
