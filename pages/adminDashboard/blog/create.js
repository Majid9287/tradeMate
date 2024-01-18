import { useState } from "react";
import "node_modules/react-quill/dist/quill.snow.css";
import React from "react";
import dynamic from "next/dynamic";
const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
import "react-quill/dist/quill.snow.css";
import AdminLayout from "../../../components/AdminDashboard/AdminLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-tagsinput/react-tagsinput.css"; // Import the styles
import TagsInput from "react-tagsinput";
import withAdminRoute from '../Auth/withAdminAuth';
function CourseForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [enrollment, setEnrollment] = useState("open");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleRemovePhoto = () => {
    setCoverPhoto(null);
  };

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(URL.createObjectURL(file));
  };
  const handleTagChange = (tags) => {
    setTags(tags);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("description", description);
    formData.append("enrollment", enrollment);
    formData.append("price", price);
    formData.append("file", photo);

    try {
      const res = await fetch("/api/course/addcourse", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setName("");
      setPrice("");
      setEnrollment("");
      setDuration("");
      setDescription("");
      setPhoto(null);
      toast.success("Course add successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <AdminLayout>
      <div className="h-full bg-gray-100 relative">
        <div className="container mx-auto px-4 relative bg-gray-100 py-24">
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          
          <h1 className="text-3xl font-bold mb-4">Create a New Post</h1>{" "}
          {/* Add this line */}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="bg-white p-4 my-4 rounded-lg shadow-sm flex flex-col md:flex-row">
              {/* Left Side (Heading) */}
              <div className="mb-4 md:w-1/3 md:mb-0">
                <h2 className="text-xl font-semibold">Category</h2>
              </div>
              {/* Right Side (Inputs) */}
              <div className="md:w-2/3 md:ml-4">
                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Select Category
                  </label><div className="flex">
                  <select
                    id="category"
                    className="border rounded px-3 py-2 w-full"
                  >
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                  <button
                      className="bg-blue-500 text-white px-4 ml-2 rounded"
                      type="button"
                    >
                      Create New
                    </button></div>
                </div>
                <div className="  mb-4">
                  <label
                    htmlFor="subcategory"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Select Subcategory
                  </label>
                  <div className="flex">
                    <select
                      id="subcategory"
                      className="border rounded px-3 py-2 w-full"
                    >
                      <option value="subcategory1">Subcategory 1</option>
                      <option value="subcategory2">Subcategory 2</option>
                      <option value="subcategory3">Subcategory 3</option>
                    </select>
                    <button
                      className="bg-blue-500 text-white px-4 ml-2 rounded"
                      type="button"
                    >
                      Create New
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 my-2 rounded-lg shadow-sm flex flex-col md:flex-row">
              {/* Left Side (Heading) */}
              <div className="mb-4 md:w-1/3 md:mb-0">
                <h2 className="text-xl font-semibold">Basic details</h2>
              </div>
              {/* Right Side (Inputs) */}
              <div className="md:w-2/3 md:ml-4">
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Post Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="border rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Short Description
                  </label>
                  <textarea
                    id="description"
                    className="border rounded px-3 py-2 w-full h-12"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 my-4 rounded-lg shadow-sm flex flex-col md:flex-row">
              {/* Left Side (Heading) */}
              <div className="mb-4 md:w-1/3 md:mb-0">
                <h2 className="text-xl font-semibold">Post Cover</h2>
              </div>
              {/* Right Side (Inputs) */}
              <div className="md:w-2/3 md:ml-4">
                <div className="mb-4">
                  {coverPhoto ? (
                    <div className="relative">
                      <div className="w-full h-full">
                        <img
                          src={coverPhoto}
                          alt="Cover"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <button
                        onClick={handleRemovePhoto}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full"
                      >
                        Remove Photo
                      </button>
                    </div>
                  ) : (
                    <label htmlFor="upload-photo" className="cursor-pointer">
                      <div className="border border-dashed border-gray-400 p-24 text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 15h-2v2a2 2 0 0 1-2 2h-5v-2h5v-2h-5v-2h3a2 2 0 0 1 2 2v2h2v-5h-2v-2a2 2 0 0 1-2-2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2h7V4h-5a2 2 0 0 1-2-2 2 2 0 0 1 2-2h10a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-7v2h7v5h-2v2a2 2 0 0 1-2 2z" />
                        </svg>
                        <p>Upload Photo</p>
                      </div>
                      <input
                        type="file"
                        id="upload-photo"
                        className="hidden"
                        accept="image/*"
                        onChange={handleUploadPhoto}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-white p-4 my-4 rounded-lg shadow-sm flex flex-col md:flex-row">
              {/* Left Side (Heading) */}
              <div className="mb-4 md:w-1/3 md:mb-0">
                <h2 className="text-xl font-semibold">Content</h2>
              </div>
              {/* Right Side (Inputs) */}
              <div className="md:w-2/3 md:ml-4">
                <QuillNoSSRWrapper
                  modules={modules}
                  value={description}
                  onChange={(content, delta, source, editor) => {
                    setDescription(editor.getHTML());
                  }}
                  theme="snow"
                />
              </div>
            </div>

            <div className="bg-white p-4 my-4 rounded-lg shadow-sm flex flex-col md:flex-row">
              {/* Left Side (Heading) */}
              <div className="mb-4 md:w-1/3 md:mb-0">
                <h2 className="text-xl font-semibold">Meta</h2>
              </div>
              {/* Right Side (Inputs) */}
              <div className="md:w-2/3 md:ml-4">
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    SEO Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="border rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    SEO Description
                  </label>
                  <textarea
                    id="description"
                    className="border rounded px-3 py-2 w-full h-12"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    SEO Tags
                  </label>
                  <TagsInput
                    value={tags}
                    onChange={handleTagChange}
                    inputProps={{ placeholder: "etc #IT" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Save as Draft
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Schedule Post
              </button>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm7-2.647l3 2.647C19.865 17.824 21 15.042 21 12h-4a7.96 7.96 0 01-2 5.291zM14 4.515V0h-4v4.515A8.003 8.003 0 0112 4c1.657 0 3 1.343 3 3h-2c0-.552-.448-1-1-1s-1 .448-1 1h-2c0-1.657 1.343-3 3-3a3.96 3.96 0 012.586 1H14z"
                    ></path>
                  </svg>
                ) : (
                  "Post"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
export default CourseForm;
