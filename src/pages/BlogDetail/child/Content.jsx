import PropTypes from 'prop-types';
import Modal from '../../../components/molecules/Modal';
import { useEffect, useState } from 'react';
import { instance } from '../../../utils/instance';
import { useParams } from 'react-router-dom';
import { useAuthHeader, useIsAuthenticated } from 'react-auth-kit';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
const Content = ({ data }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const checkAuth = useIsAuthenticated();

  const params = useParams();
  const token = useAuthHeader();

  const deletePost = async () => {
    try {
      await instance
        .delete(`blog/${params.id}`, {
          headers: {
            Authorization: token(),
          },
        })
        .then(() => {
          toast('Delete Success', {
            icon: '👏',
          });
          setTimeout(() => {
            window.location.href = '/blog';
          }, 500);
        });
    } catch (error) {
      toast(error.response.data.message, {
        icon: '❌',
      });
    } finally {
      setDeleteModal(!deleteModal);
    }
  };

  // UPDATE MODAL
  const formik = useFormik({
    initialValues: {
      title: data.title,
      content: '',
      image: '',
    },
    onSubmit: async (values, action) => {
      action.setSubmitting(true);
      try {
        await instance
          .put(`blog/${params.id}`, values, {
            headers: {
              Authorization: token(),
            },
          })
          .then(() => {
            action.resetForm();
            toast('Update Success', {
              icon: '👏',
            });
            setTimeout(() => {
              window.location.reload();
            }, 500);
          });
      } catch (error) {
        toast(error.response.data.message, {
          icon: '❌',
        });
      } finally {
        setUpdateModal(!updateModal);
      }
    },
  });

  useEffect(() => {
    formik.setValues({
      title: data.title,
      content: data.content,
      image: data.image,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div className="mx-48 flex flex-col gap-5 mt-10">
      <div className="grid grid-cols-2">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        {checkAuth() ? (
          <div className="flex gap-3 justify-center">
            {/* DELETE */}
            <Modal
              title={`Delete Blog ${data.title}`}
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
                      Title
                    </label>
                    <input
                      onChange={formik.handleChange}
                      name="title"
                      value={formik.values.title}
                      type="text"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Title"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="content"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Content
                    </label>
                    <input
                      type="text"
                      id="content"
                      onChange={formik.handleChange}
                      name="content"
                      value={formik.values.content}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Content"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      URL Image
                    </label>
                    <input
                      type="url"
                      id="image"
                      onChange={formik.handleChange}
                      name="image"
                      value={formik.values.image}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="URL Image"
                      required
                    />
                  </div>

                  <div className="flex justify-center gap-5">
                    <button
                      type={formik.isSubmitting ? 'button' : 'submit'}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {formik.isSubmitting ? 'Loading...' : 'Submit'}
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
            <button
              onClick={() => setUpdateModal(!updateModal)}
              className="bg-blue-600 py-1 rounded text-white w-fit px-10"
            >
              Update
            </button>
            <button
              onClick={() => {
                setDeleteModal(!deleteModal);
              }}
              className="bg-red-600 py-1 rounded text-white w-fit px-10"
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
      <p className="font-bold">
        Written by {data.author?.name}{' '}
        <span className="ms-10 font-normal text-slate-400">Monday May 20</span>
      </p>
      <hr />
      <p>{data.content}</p>
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.any,
};
export default Content;
