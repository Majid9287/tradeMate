// models/Comment.js
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlogPost',
    required: true,
  },
  user: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  replies: [
    {
      user: { type: String, required: true },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now },
      likes: { type: Number, default: 0 },
      dislikes: { type: Number, default: 0 },
    },
  ],
});

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);
