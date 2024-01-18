import Course from "../../../models/Course";
import nextConnect from "next-connect";

import connectDb from "../../../middlewhare/mongoos";
const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.post(async (req, res) => {
  try {
    const { id } = req.query;
    const {
      
      chapterNumber,
      chapterTitle,
      videoTitle,
      videoUrl,
      sTitle,
      summaryContent,
      assignmentTitle, 
      assignmentContent,
    } = req.body;
    console.log(
      id,
      videoTitle,
      chapterNumber,
      chapterTitle,
      videoUrl,
      sTitle,
      summaryContent,
      assignmentTitle, 
      assignmentContent,
    );
    // Find the course by ID
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Create a new chapter
    const newChapter = {
      chapter_number: chapterNumber,
      title: chapterTitle,
      videos: [{ title: videoTitle, video_url: videoUrl }],
      summary: [{ title:  sTitle, content:  summaryContent }],
      assignments: [{ title:   assignmentTitle,content:assignmentContent }],
    };

    // Add the new chapter to the course
    course.chapters.push(newChapter);

    // Save the updated course to the database
    const savedCourse = await course.save();

    res.status(200).json(savedCourse);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Sorry something happened! ${error.message}` });
  }
});

export default connectDb(apiRoute);
