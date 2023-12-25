import PropTypes from "prop-types";
import Modal from "../../../components/molecules/Modal";
import { instance } from "../../../utils/instance";
import { useAuthHeader, useIsAuthenticated } from "react-auth-kit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { RiEditBoxFill } from "react-icons/ri";
import { BsTrash2Fill } from "react-icons/bs";
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
        .delete(`timeManagement/${params.id}`, {
          headers: {
            Authorization: token(),
          },
        })
        .then(() => {
          toast("Delete Success", {
            icon: "👏",
          });
          setTimeout(() => {
            window.location.href = "/timeManagement";
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
      task: data.task,
      deadline: "",
      priority: "",
    },
    onSubmit: async (values, action) => {
      action.setSubmitting(true);
      try {
        await instance
          .put(`timeManagement/${params.id}`, values, {
            headers: {
              Authorization: token(),
            },
          })
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
        });
      } finally {
        setUpdateModal(!updateModal);
      }
    },
  });

  useEffect(() => {
    formik.setValues({
      task: data.task,
      deadline: data.deadline,
      priority: data.priority,
    });
  }, [data]);
  return (
    <div className="max-w-2xl px-6 py-4 mx-auto space-y-6">
      <article className="space-y-8 text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracki md:text-5xl">
            {data.task}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
            <div className="flex items-center md:space-x-2">
              <p className="text-l text-blue-600">
                Daeadline • {data.deadline}
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-blue-600 text-gray-50"
              >
                {data.priority}
              </a>
            </div>
          </div>
        </div>
      </article>
      <div className="flex items-center space-x-4">
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

      {/* DELETE */}
      <Modal
        title={`Delete Blog ${data.task}`}
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
        title={`Update Blog ${data.title}`}
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
                Task
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.task}
                type="text"
                name="task"
                id="task"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Deadline
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.deadline}
                type="date"
                name="deadline"
                id="deadline"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Select date"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Priority
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.priority}
                type="text"
                name="priority"
                id="priority"
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

      {/* <div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Nunc id magna mollis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Duis molestie, neque eget pretium lobortis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Mauris nec urna volutpat, aliquam lectus sit amet
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

ContentTimeManagement.propTypes = {
  data: PropTypes.any,
};

export default ContentTimeManagement;
