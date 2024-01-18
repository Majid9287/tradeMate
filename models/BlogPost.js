// models/BlogPost.js
import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    metaTags: [{ type: String }],
    content: { type: String, required: true },
    author: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        imageURL: { type: String, required: true },
    },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    imageURL: { type: String, required: true },
    views: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ['draft', 'scheduled', 'published', 'deleted'],
        default: 'draft',
    },
}, {
    timestamps: true, // This will automatically add createdAt and updatedAt fields
});

export default mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema);
