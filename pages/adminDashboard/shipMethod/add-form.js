import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "../../../components/AdminDashboard/AdminLayout";
const AddShipMethodSection = ({isUserLoggedIn, isAdmin}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    estimatedDelivery: "",
    cost: "",
    freeThreshold: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const res = await fetch("/api/ship-method/add-method", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( formData ),
        });
  
        if (res.ok) {
           
                // Redirect to ship methods list after successful addition
              
          toast.success("Method added successfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          router.push("/admin/shipMethod/methods");
        } else {
          throw new Error("Failed to add Method");
        }
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

  return (
    <AdminLayout>
      <div className="px-2 container">
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
        <section className="py-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Ship Method</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="estimatedDelivery" className="block font-medium">
                Estimated Delivery:
              </label>
              <input
                type="text"
                name="estimatedDelivery"
                value={formData.estimatedDelivery}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="cost" className="block font-medium">
                Cost:
              </label>
              <input
                type="number"
                name="cost"
                value={formData.cost}
                onChange={handleChange}
                className="border rounded p-2 w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="freeThreshold" className="block font-medium">
                Free Threshold (free shipping if above total price):
              </label>
              <input
                type="number"
                name="freeThreshold"
                value={formData.freeThreshold}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Ship Method"}
              </button>
            </div>
          </form>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AddShipMethodSection;
