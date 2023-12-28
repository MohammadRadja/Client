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
const ContentBlog = ({ data }) => {
  const checkAuth = useIsAuthenticated();

  const params = useParams();
  const token = useAuthHeader();

  // UPDATE MODAL
  const formik = useFormik({
    initialValues: {
      title: data.title,
      goal: "",
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
      title: data.title,
      goal: data.goal,
      date: data.createdAt,
    });
  }, [data]);

  return (
    <div className="max-w-2xl py-6 mx-auto space-y-8 dark:bg-gray-800 dark:text-gray-50">
      <div className="">
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
            }}
          ></div>
          <img
            src={data.image}
            className="absolute rounded-lg left-0 top-0 w-full h-full z-0 object-cover"
            alt="background"
          />
          {/* <div className="p-4 absolute bottom-0 left-0 z-20">
            <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
              {data.title}
            </h2>
          </div> */}
        </div>

        <div className="px-4 lg:px-0 mt-6 text-gray-700 max-w-screen-md mx-auto text-justify text-lg leading-relaxed">
          <p className="pb-6 whitespace-normal">{data.content}</p>
        </div>

      </div>
    </div>
  );
};

ContentBlog.propTypes = {
  data: PropTypes.any,
};
export default ContentBlog;
