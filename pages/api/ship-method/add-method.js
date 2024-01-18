import ShipMethod from "../../../models/ShipMethod";
import nextConnect from "next-connect";
import connectDb from "../../../middlewhare/mongoos";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.post(async (req, res) => {
  try {
    const { name,
    estimatedDelivery,
    cost,
    freeThreshold } = req.body;
    console.log("meth")
    const newMethod = new ShipMethod({ name, estimatedDelivery, cost, freeThreshold });
    
    const savedMethod = await newMethod.save();
    console.log("meth1")
    res.status(200).json(savedMethod);
  } catch (error) {
    res.status(500).json({ error: `Sorry something happened! ${error.message}` });
  }
});

export default connectDb(apiRoute);


