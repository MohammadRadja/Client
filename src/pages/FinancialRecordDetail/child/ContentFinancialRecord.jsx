import PropTypes from "prop-types";
import Modal from "../../../components/molecules/Modal";
import { instance } from "../../../utils/instance";
import { useAuthHeader, useIsAuthenticated } from "react-auth-kit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { RiEditBoxFill } from "react-icons/ri";
import { BsTrash2Fill } from "react-icons/bs";
import { useFormik } from "formik";
import { data } from "autoprefixer";
const ContentTimeManagement = ({ data }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const checkAuth = useIsAuthenticated();

  const params = useParams();
  const token = useAuthHeader();

  const deletePost = async () => {
    try {
      await instance
        .delete(`financialRecord/${params.id}`, {
          headers: {
            Authorization: token(),
          },
        })
        .then(() => {
          toast("Delete Success", {
            icon: "👏",
          });
          setTimeout(() => {
            window.location.href = "/financialRecord";
          }, 500);
        });
    } catch (error) {
      toast(error.response.data.message, {
        icon: "❌",
      });
    } finally {
      setDeleteModal(!deleteModal);
    }
  };

  // UPDATE MODAL
  const formik = useFormik({
    initialValues: {
      title: data.title,
      description: "",
      category: "",
      amount: "",
      date: "",
    },
    onSubmit: async (values, action) => {
      action.setSubmitting(true);

      // Format the date before sending the request
      const formattedDate = new Date(values.date).toISOString();

      try {
        await instance
          .put(
            `financialRecord/${params.id}`,
            { ...values, date: formattedDate },
            {
              headers: {
                Authorization: token(),
              },
            }
          )
          .then(() => {
            action.resetForm();
            toast("Update Success", {
              icon: "👏",
            });
            setTimeout(() => {
              window.location.reload();
            }, 500);
          });
      } catch (error) {
        toast(error.response.data.message, {
          icon: "❌",
          console: error,
        });
      } finally {
        setUpdateModal(!updateModal);
      }
    },
  });

  useEffect(() => {
    formik.setValues({
      title: data.title,
      descripton: data.descripton,
      category: data.category,
      amount: data.amount,
      date: data.date,
    });
  }, [data]);
  return (
    <div className="max-w-2xl px-6 py-4 mx-auto space-y-6">
      <article className="space-y-8 text-gray-900">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold md:tracki md:text-5xl text-center">
            {data.title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
            <div className="flex items-center md:space-x-2">
              <p className="text-m">
                Tanggal Pengeluaran:{" "}
                {new Date(data.date).toLocaleDateString("en-GB")}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-m md:mt-0">
              Total Pengeluaran: Rp. {data.amount}
            </p>
          </div>
        </div>
      </article>
      <div>
        <div className="flex flex-wrap justify-center py-2 gap-2 border-t border-dashed border-gray-600">
          <span className="text-gray-800 font-bold mb-10">
          {data.category}
          </span>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Deskirpsi Pengeluaran </h4>
          <p className="text-gray-900 text-justify">{data.description}</p>
        </div>
        <div className="flex items-center space-x-4 mt-10">
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white focus:outline-none">
            <RiEditBoxFill
              className="w-5 h-5"
              onClick={() => setUpdateModal(!updateModal)}
            />
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white focus:outline-none">
            <BsTrash2Fill
              className="w-5 h-5"
              onClick={() => setDeleteModal(!deleteModal)}
            />
          </button>
        </div>
      </div>

      {/* DELETE */}
      <Modal
        title={`Delete  ${data.title}`}
        handleModal={() => setDeleteModal(!deleteModal)}
        isOpen={deleteModal}
      >
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Apakah anda yakin ingin menghapus post ini?
          </p>
        </div>
        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={deletePost}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Ya
          </button>
          <button
            type="button"
            onClick={() => setDeleteModal(!deleteModal)}
            className="inline-flex justify-center rounded-md border border-transparent bg-red-500 text-white px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Tidak
          </button>
        </div>
      </Modal>

      {/* UPDATE */}
      <Modal
        title={`Update ${data.title}`}
        handleModal={() => setUpdateModal(!updateModal)}
        isOpen={updateModal}
      >
        <div className="mt-2">
          <form onSubmit={formik.handleSubmit} className="  mx-auto">
            <div className="mb-5">
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
                placeholder="Type product name"
                required
              />
            </div>
            <div className="mb-5">
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
                placeholder="Type product name"
                required
              />
            </div>
            <div className="mb-5">
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
                placeholder="Type product name"
                required
              />
            </div>
            <div className="mb-5">
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
                placeholder="Select date"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                onChange={formik.handleChange}
                value={formik.values.description}
                type="text"
                rows={3}
                name="description"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>

            <div className="flex justify-center gap-5">
              <button
                type={formik.isSubmitting ? "button" : "submit"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {formik.isSubmitting ? "Loading..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={() => setUpdateModal(!updateModal)}
                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 text-white px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

ContentTimeManagement.propTypes = {
  data: PropTypes.any,
};

export default ContentTimeManagement;
