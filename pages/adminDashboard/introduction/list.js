import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminDashboard/AdminLayout";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import withAdminRoute from '../Auth/withAdminAuth';
const CardList = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/introduction/get-all");
        const data = await response.json();
        setCardData(data); // Assuming the API response is an array of objects with a "name" field
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="w-full px-2 py-2 md:py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Introduction List</h2>
          <Link href="/adminDashboard/introduction/create" className="text-indigo-600 hover:text-indigo-900">
              Create New
          </Link>
        </div>

        <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-md overflow-hidden">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                Edit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {cardData.map((card, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : ""}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {card.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/adminDashboard/introduction/update?_id=${card._id}`}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <BiEdit />
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                
                  <Link
                    href={`/introduction/[slug]`}
                              as={`/introduction/${card.name}`
                              }
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <BsArrowRight className="text-indigo-600"/>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};
const AdminProtectedCourseForm = withAdminRoute(CardList);
export default AdminProtectedCourseForm;

