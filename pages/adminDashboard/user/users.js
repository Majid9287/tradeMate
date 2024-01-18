import React from "react";
import AdminLayout from "../../../components/AdminDashboard/AdminLayout";

import { useState } from "react";
const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("details"); // State to track the active tab
  const logData = [
    {
      method: "POST",
      status: "200",
      path: "/api/purchase",
      event: "Purchase",
      ip: "84.234.243.42",
      date: "2023/10/19 23:33:33",
    },
    {
      method: "POST",
      status: "522",
      path: "/api/purchase",
      event: "Purchase",
      ip: "84.234.243.42",
      date: "2023/10/19 23:33:33",
    },
    {
      method: "DELETE",
      status: "200",
      path: "/api/products/d65654e/remove",
      event: "Cart remove",
      ip: "84.234.243.42",
      date: "2023/10/19 23:28:06",
    },
    {
      method: "GET",
      status: "200",
      path: "/api/products/d65654e/add",
      event: "Cart add",
      ip: "84.234.243.42",
      date: "2023/10/19 23:15:35",
    },
    {
      method: "GET",
      status: "200",
      path: "/api/products/c85727f/add",
      event: "Cart add",
      ip: "84.234.243.42",
      date: "2023/10/19 23:02:13",
    },
    {
      method: "GET",
      status: "200",
      path: "/api/products/c85727f",
      event: "View product",
      ip: "84.234.243.42",
      date: "2023/10/19 22:41:59",
    },
    {
      method: "GET",
      status: "200",
      path: "/api/products",
      event: "Get products",
      ip: "84.234.243.42",
      date: "2023/10/19 22:39:49",
    },
    {
      method: "POST",
      status: "200",
      path: "/api/auth/login",
      event: "Login",
      ip: "84.234.243.42",
      date: "2023/10/19 22:39:24",
    },
  ];
  
  const user = {
    user_id:"1324354657463524134253",
    email: "miron.vitold@devias.io",
    phone: "+55 748 327 439",
    country: "USA",
    state: "New York",
    address1: "New York",
    address2: "House #25",
    paymentMethod: "Credit Card",
    paymentDetails: "**** **** **** **** 4142",
    paid: "2 ($50.00)",
    draft: "1 ($5.00)",
    stateRegion: "2 ($50.00)",
    unpaidDue: "1 ($12.00)",
    refunded: "0 ($0.00)",
    grossIncome: "$1,200.00",
    emails: [
      { type: "Order confirmation", date: "18/10/2023 | 18:02" },
      { type: "Order confirmation", date: "17/10/2023 | 11:47" },
    ],
    dataManagement:
      "Remove this customer’s chart if he requested that, if not, please be aware that what has been deleted can never be brought back",
  };

  return (
    <AdminLayout>
      <div className="h-full bg-gray-100 relative">
        <div className="container mx-auto px-4 relative bg-gray-100 py-24">
        <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              {/* User Image */}
              <img
                src="https://lh3.googleusercontent.com/ogw/AKPQZvxOJWgzKSMRZ61DiYVet0mtOsQEFQPbdNwaeVVf=s32-c-mo"
                alt="User"
                className="w-16 h-16 object-cover"
              />
            </div>

            <div className="ml-4">
              {/* User Email */}
              <div className="text-lg font-semibold">{user.email}</div>

              {/* User ID */}
              <div className="text-gray-600">User ID: {user.user_id}</div>
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-auto">
              Edit
            </button>
          </div>
         
          <div className="flex mt-4">
            <div
              className={`cursor-pointer ${
                activeTab === "details" ? "text-blue-500 border-b-4 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("details")}
            >
              Details
            </div>
            <div
              className={`cursor-pointer px-2 ${
                activeTab === "logs" ? "text-blue-500 border-b-4 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("logs")}
            >
              Logs
            </div>
          </div>

          {/* Horizontal line above "Details" and "Logs" */}
          <hr className=" border-t border-gray-500" />

          {/* Render content based on the active tab */}
          {activeTab === "details" && (
            <>
              <div className="flex flex-col md:flex-row gap-4 pt-8">
                {/* Left Box: Basic Details */}
                <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/3">
                  <div className="text-xl font-semibold mb-4">
                    Basic Details
                  </div>
                  <div className="mb-2">
                    <div className="font-medium">Email</div>
                    <div>{user.email}</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-medium">Phone</div>
                    <div>{user.phone}</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-medium">Country</div>
                    <div>{user.country}</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-medium">State/Region</div>
                    <div>{user.state}</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-medium">Address 1</div>
                    <div>{user.address1}</div>
                  </div>
                </div>

                {/* Middle Box: Emails and Data Management */}
                <div className=" w-full md:w-2/3">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-xl font-semibold mb-4">Emails</div>
                    <div className="mb-2">
                      {/* Dropdown for email type */}
                      <div className="flex items-center space-x-4 mb-2">
                        <label className="font-medium" htmlFor="emailType">
                          Email Type
                        </label>
                        <select
                          id="emailType"
                          className="border rounded px-3 py-2 w-3/4"
                        >
                          <option value="password_reset">Password Reset</option>
                          <option value="verification">Verification</option>
                        </select>
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                        Send Email
                      </button>
                    </div>

                    {/* Table for previous email records */}

                    {/* Table for previous email records */}

                    <div className="text-xl font-semibold mb-2">
                      Previous Emails
                    </div>
                    <table className="table-auto w-full">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="px-4 py-2 w-1/2">Mail Type</th>
                          <th className="px-4 py-2 w-1/2">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.emails.map((email, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 w-1/2">{email.type}</td>
                            <td className="px-4 py-2 w-1/2">{email.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Data Management Section */}
                  <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                    <div className="text-xl font-semibold mb-2">
                      Data Management
                    </div>
                    <div className="text-gray-600">{user.dataManagement}</div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                      Delete User
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === "logs" && <><div className="bg-white p-4 rounded-lg shadow-md mt-4">
  <div className="text-xl font-semibold mb-4">Recent Logs</div>
  <table className="min-w-full">
    <thead>
      <tr className="border-b border-gray-300">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">METHOD</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">STATUS</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">PATH</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">EVENT</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">IP</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">DATE</th>
      </tr>
    </thead>
    <tbody>
      {/* Loop through your log data and generate rows */}
      {logData.map((log, index) => (
        <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <td className="px-6 py-4 text-sm">{log.method}</td>
          <td className="px-6 py-4 text-sm">{log.status}</td>
          <td className="px-6 py-4 text-sm">{log.path}</td>
          <td className="px-6 py-4 text-sm">{log.event}</td>
          <td className="px-6 py-4 text-sm">{log.ip}</td>
          <td className="px-6 py-4 text-sm">{log.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</>}
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserProfilePage;
