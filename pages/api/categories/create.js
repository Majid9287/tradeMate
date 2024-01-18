// pages/api/categories/create.js
import Category from '../../../models/Category';
import nextConnect from 'next-connect';
import connectDb from "../../../middlewhare/mongoos";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry, something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(connectDb);

apiRoute.post(async (req, res) => {
  try {
    const { name, subcategories } = req.body;

    // Create an array of subcategories with objects containing additional properties
    const subcategoryObjects = subcategories.map((subcategory) => ({
      name: subcategory.name,
      description: subcategory.description
    }));

    const newCategory = new Category({
      name,
      subcategories: subcategoryObjects,
    });

    const savedCategory = await newCategory.save();

    res.status(200).json(savedCategory);
  } catch (error) {
    res.status(500).json({ error: `Sorry, something happened! ${error.message}` });
  }
});

export default apiRoute;
