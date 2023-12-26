import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import PropTypes from "prop-types";
const TimeManagementCard = ({ task, deadline, priority, id }) => {
  return (
    <div className="max-w-xs w-[400px] h-[270px] p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0 overflow-hidden">
       <a href="#" className="flex flex-col h-full">
        <h5 className="mb-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {task}
        </h5>
      <div className="flex mb-10 justify-between items-center">
        <div className="flex items-center mb-10">
          <span className="text-gray-800 font-semibold">{priority}</span>
        </div>
        <a className="text-gray-600 mb-10"> Deadline : <span>
          {new Date(deadline).toLocaleDateString("en-GB")}</span>
        </a>
      </div>
      <Link
        to={`/timeManagement/${id}`}
        className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <RiArrowRightLine className="ml-2" />
      </Link>
      </a>
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
