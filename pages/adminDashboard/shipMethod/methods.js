import { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminDashboard/AdminLayout";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/LoadingSpinner";
const ShipMethodCard = ({ method }) => {
  const router = useRouter();
  return (
  <div className="bg-white shadow-md  text-black rounded-md mb-4">
    <div className="p-4">
      <h3 className="text-lg font-semibold">{method.name}</h3>
      <span className="font-semibold">Delivery-Time:</span>{" "}
      <span className="text-gray-500"> {method.estimatedDelivery}</span>
      <br />
      <span className="font-semibold">Cost:</span>
      <span className="text-gray-500"> {method.cost}</span>
      <br />
      {method.freeThreshold && (
        <>
          <span className="font-semibold">Free Shipping for orders over: </span>{" "}
          <span className="text-gray-500"> {method.freeThreshold}</span>
        </>
      )}
    </div>
    <button onClick={() => router.push(`/admin/shipMethod/update-form?methodId=${method._id}`)} className="w-full bg-blue-500 rounded-b">Update</button>
  </div>
  );
};

const CourseSection = ({ isUserLoggedIn, isAdmin }) => {
  const router = useRouter();
  const [methods, setmethods] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchMethods = async () => {
      try {
        // Fetch methods using the fetch API
        const response = await fetch("/api/ship-method/get-methods");
        const data = await response.json();
        // Update the methods state and set loading to false
        setmethods(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching methods:", error);
        setLoading(false); // Set loading to false even in case of an error
      }
    };

    fetchMethods();
  }, []);

  return (
    <AdminLayout>
      <div className="h-full bg-gray-100 relative">
        <div className="container mx-auto px-4 pt-24 pb-24 ">
          <h1 className="text-3xl font-bold mb-8">Shipping Method</h1>
          <button
            onClick={() => router.push("/adminDashboard/shipMethod/add-form")}
            className="relative px-4 py-2 bg-green-500 text-white rounded mb-4"
          >
            Add New Shipping Method
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {methods.map((method) => (
              <ShipMethodCard key={method._id} method={method} />
            ))}
          </div>
          {loading && <LoadingSpinner />}
        </div>
      </div>
    </AdminLayout>
  );
};

export default CourseSection;
