import { useFormik } from "formik";
import { useAuthHeader } from "react-auth-kit";
import { instance } from "../../../utils/instance";
import { format } from "date-fns";
import { useState } from "react";

const AddFinancialRecord = () => {
  const authHeader = useAuthHeader();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    },
    onSubmit: async (values, action) => {
      action.setSubmitting(true);
      try {
        const formattedDeadline = format(new Date(values.date), "dd-MM-yyyy");

        await instance.post(
          "financialRecord",
          {
          title: values.title,
            description: values.description,
            category: values.category,
            amount: values.amount,
            date: formattedDeadline,
          },
          {
            headers: {
              Authorization: authHeader(),
            },
          }
        );

        action.resetForm();
        window.location.href = "/financialRecord";
      } catch (error) {
        console.log(error);
      } finally {
        action.setSubmitting(false);
      }
    },
  });

  return (
    <div>
      {/* Modal toggle */}
      <button
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Add Financial Record
      </button>

      {/* Main modal */}
      {showModal && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  Create New Financial Record
                </h3>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form onSubmit={formik.handleSubmit} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.title}
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Title"
                      required
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.category}
                      type="text"
                      name="category"
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Title"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="amount"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Jumlah Pengeluaran
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.amount}
                      type="number"
                      name="amount"
                      id="amount"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Amount"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tanggal Pengeluaran
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.date}
                      type="date"
                      name="date"
                      id="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="goal"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      type="text"
                      name="description"
                      rows={3}
                      id="description"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Description"
                      required
                    />
                  </div>
                </div>
                <button
                  type={formik.isSubmitting ? "button" : "submit"}
                  className="text-white inline-flex mt-2 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <span>
                    {formik.isSubmitting
                      ? "Loading..."
                      : "Add new Financial Record"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFinancialRecord;
