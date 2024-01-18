import { useState } from "react";
import React from "react";
import AdminLayout from "../../../components/AdminDashboard/AdminLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-tagsinput/react-tagsinput.css"; // Import the styles

import withAdminRoute from '../Auth/withAdminAuth';
function CourseForm() {

    const [loading, setLoading] = useState(false);


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

                    <h1 className="text-3xl font-bold mb-4">Create Category & Subcategory</h1>{" "}
                    {/* Add this line */}
                    <form encType="multipart/form-data">
                        <div className="bg-white p-4 my-4 rounded-lg shadow-sm flex flex-col md:flex-row">
                            {/* Left Side (Heading) */}
                            <div className="mb-4 md:w-1/3 md:mb-0">
                                <h2 className="text-xl font-semibold">Add Subcategory</h2>
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
                                    </div>
                                </div>
                                <div className="  mb-4">
                                    <label
                                        htmlFor="subcategory"
                                        className="block text-gray-700 font-medium mb-1"
                                    >
                                        Write Subcategory
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            id="title"
                                            className="border rounded px-3 py-2 w-full"
                                        />


                                    </div>
                                </div>
                                <div className="  mb-4">
                                    <label
                                        htmlFor="subcategory"
                                        className="block text-gray-700 font-medium mb-1"
                                    >
                                        Subcategory Description
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            id="title"
                                            className="border rounded px-3 py-2 w-full"
                                        />

                                    </div>
                                </div>
                                <div className="  mb-4 flex justify-end">

                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
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
                                            "Save"
                                        )}
                                    </button>


                                </div>
                            </div>

                        </div>
                        </form>

                        <form encType="multipart/form-data">
                        <div className="bg-white p-4 my-2 rounded-lg shadow-sm flex flex-col md:flex-row">
                            {/* Left Side (Heading) */}
                            <div className="mb-4 md:w-1/3 md:mb-0">
                                <h2 className="text-xl font-semibold">New Category & Subcategories</h2>
                            </div>
                            {/* Right Side (Inputs) */}
                            <div className="md:w-2/3 md:ml-4">
                                <div className="mb-4">
                                    <label
                                        htmlFor="title"
                                        className="block text-gray-700 font-medium mb-1"
                                    >
                                        Category
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
                                        Subcategories
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        className="border rounded px-3 py-2 w-full"
                                    />
                                </div>
                                <div className="  mb-4">
                                    <label
                                        htmlFor="subcategory"
                                        className="block text-gray-700 font-medium mb-1"
                                    >
                                        Subcategory Description
                                    </label>
                                    <div className="flex">
                                        <input
                                            type="text"
                                            id="title"
                                            className="border rounded px-3 py-2 w-full"
                                        />

                                    </div>
                                </div><div className="mb-4 flex justify-end">
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
                                            "Create New"
                                        )}
                                    </button> </div>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
const AdminProtectedCourseForm = withAdminRoute(CourseForm);
export default AdminProtectedCourseForm;
