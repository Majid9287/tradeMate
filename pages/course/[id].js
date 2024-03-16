import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import youtubeVideoId from "youtube-video-id";
import { FaRegFileVideo } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import { MdOutlineSummarize } from "react-icons/md";
import styles1 from "@/styles/Color.module.css";
import styles from "@/styles/Styles.module.css";
// ... (imports)

function ProductForm() {
  const router = useRouter();
  const id = router.query.id;
  const [course, setCourse] = useState(null);

  const [selectedChapter, setSelectedChapter] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(""); // Set default to "video"
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  console.log("url", videoUrl);
  const handleMaterialClick = (materialType, chapterId) => {
    setSelectedMaterial(materialType);
  
    // If the chapterId is provided, update the selected chapter
    if (chapterId) {
      setSelectedChapter(chapterId);
      const selectedChapterData = course.chapters.find(chapter => chapter._id === chapterId);
  
      // Load the appropriate content based on the selected material type
      switch (materialType) {
        case "video":
          setVideoUrl(selectedChapterData.videos[0]?.video_url);
          break;
        case "summary":
          // Load summary content
          break;
        case "assignment":
          // Load assignment content
          break;
        default:
          break;
      }
    }
  };
  

  useEffect(() => {
    // Extract video ID from the entered URL
    const extractVideoId = (url) => {
      const id = youtubeVideoId(url);
      return id ? id : null;
    };

    // Set the video ID when a valid URL is entered
    if (videoUrl) {
      const id = extractVideoId(videoUrl);
      setVideoId(id);
    }
  }, [videoUrl]);

  useEffect(() => {
    if (course) {
      // Set the default selected chapter to the first chapter
      setSelectedChapter(course.chapters[0]?._id);
  
      // Check for the availability of each type of material in the selected chapter
      const selectedChapterData = course.chapters.find((chapter) => chapter._id == selectedChapter);
      if (selectedChapterData) {
        if (selectedChapterData.videos.length > 0) {
          setSelectedMaterial("video");
          setVideoUrl(selectedChapterData.videos[0]?.video_url);
        } else if (selectedChapterData.summary.length > 0) {
          setSelectedMaterial("summary");
        } else if (selectedChapterData.assignments.length > 0) {
          setSelectedMaterial("assignment");
        }
      }
    }
  }, [course]);
  

  useEffect(() => {
    // Fetch data for the specific entry to be updated
    const fetchData = async () => {
      const { id } = router.query;

      if (id) {
        try {
          const response = await fetch(`/api/course/get-by-id?id=${id}`);
          const data = await response.json();
          console.log(data.course);
          if (data) {
            setCourse(data.course);
            setSelectedChapter(course.chapters[0]?._id);
  
            // Check for the availability of each type of material in the selected chapter
            const selectedChapterData = course.chapters.find((chapter) => chapter._id ==selectedChapter);
            if (selectedChapterData) {
              if (selectedChapterData.videos.length > 0) {
                setSelectedMaterial("video");
                setVideoUrl(selectedChapterData.videos[0]?.video_url);
              } else if (selectedChapterData.summary.length > 0) {
                setSelectedMaterial("summary");
              } else if (selectedChapterData.assignments.length > 0) {
                setSelectedMaterial("assignment");
              }
            }
          } else {
            console.error("not found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [router.query]);
  return (
    <div className={`min-h-screen bg-gray-700 relative`}>
      <div className="container mx-auto md:backdrop relative ">
        <div className="flex flex-col md:flex-row px-2">
          <div className="md:w-3/4 w-full bg-gray-300 ">
            <div className="p-4 py-24 md:min-h-screen">
              {selectedChapter && selectedMaterial && (
                <>
                  {selectedMaterial === "video" && videoId && (
                    <iframe
                      width="100%"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="Video"
                      className="video-iframe h-[100%] md:h-[500px]"
                      allowFullScreen
                    ></iframe>
                  )}
                  {selectedMaterial === "summary" && (
                    <div
                      className={styles.list}
                      dangerouslySetInnerHTML={{
                        __html: course.chapters.find(
                          (chapter) => chapter._id === selectedChapter
                        )?.summary[0]?.content,
                      }}
                    />
                  )}
                  {selectedMaterial === "assignment" && (
                    <div
                      className={styles.list}
                      dangerouslySetInnerHTML={{
                        __html: course.chapters.find(
                          (chapter) => chapter._id === selectedChapter
                        )?.assignments[0]?.content,
                      }}
                    ></div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="md:w-1/4 w-full md:m-2">
          {course
  ? course.chapters.map((chapter) => (
      <div key={chapter._id} className="my-2 bg-gray-200">
        <span
          className="p-4 text-2xl font-bold flex content-center text-center justify-between"
          onClick={() => setSelectedChapter(chapter._id)}
        >
          {chapter.title}
          {selectedChapter === chapter._id ? (
            <IoChevronUp className="mt-2" />
          ) : (
            <IoChevronDown className="mt-2" />
          )}
        </span>
        {selectedChapter === chapter._id && (
          <div className="px-4 md:text-2xl pb-4">
            {chapter.videos.length > 0 && (
              <div
                className="flex border-t-2 border-black"
                onClick={() => handleMaterialClick("video", chapter._id)}
              >
                <FaRegFileVideo className="mt-1" />{" "}
                <span>{chapter.videos[0].title}</span>
              </div>
            )}
            {chapter.summary.length > 0 && (
              <div
                className="flex border-y-2 border-black"
                onClick={() => handleMaterialClick("summary", chapter._id)}
              >
                <MdOutlineSummarize className="mt-1" />{" "}
                {chapter.summary[0]?.title}
              </div>
            )}
            {chapter.assignments.length > 0 && (
              <div
                className="flex border-b-2 border-black"
                onClick={() => handleMaterialClick("assignment", chapter._id)}
              >
                <MdAssignment className="mt-1" />{" "}
                {chapter.assignments[0]?.title}
              </div>
            )}
          </div>
        )}
      </div>
    ))
  : ""}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
