import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import PropTypes from "prop-types";
const FinancialRecordCard = ({
  title,
  category,
  amount,
  date,
  description,
  id,
}) => {
  return (
    <div className="max-w-xs w-[400px] h-[350] p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0 overflow-hidden">
      <a href="#" className="flex flex-col h-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{title}</h2>
        <span className="text-primary uppercase font-bold mb-5 text-center">{category}</span>
        <span className="text-gray-600 mb-2">
        Expense Date : {" "}
          {new Date(date).toLocaleDateString("en-GB")}
        </span>
        <p className="text-gray-600 mb-2">
        Total Spending : Rp. {amount},00
        </p>
        <p className="mb-3 font-normal text-black-700 dark:text-gray-400 overflow-hidden h-full">
          {description}
        </p>

        <Link
          to={`/financialRecord/${id}`}
          className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <RiArrowRightLine className="ml-2" />
        </Link>
      </a>
    </div>
  );
};

FinancialRecordCard.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default FinancialRecordCard;
