// import React from "react";
// import { FaFilePdf } from "react-icons/fa"; // Import the PDF icon

// const NoticBoardScection = () => {
//   const notices = [
//     { id: 1, title: "Holiday Announcement", date: "2025-01-01", download: "#" },
//     { id: 2, title: "Exam Schedule", date: "2025-01-05", download: "#" },
//     { id: 3, title: "New Admission Notice", date: "2025-01-10", download: "#" },
//     { id: 4, title: "New Admission Notice", date: "2025-01-10", download: "#" },
//     { id: 5, title: "New Admission Notice", date: "2025-01-10", download: "#" },
//     { id: 6, title: "New Admission Notice", date: "2025-01-10", download: "#" },
//   ];

//   return (
//     <div className="border border-gray-300 h-auto p-6 my-6 rounded-lg">
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Notice Board</h2>
//         <div className="mb-6">
//           <div className="flex gap-2">
//             <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
//               Office Notice
//             </button>
//             <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
//               No Objection
//             </button>
//             <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
//               Student Notice
//             </button>
//           </div>
//         </div>
//         <div>
//           <table className="min-w-full bg-white rounded-lg">
//             <thead className="bg-gray-700 text-white">
//               <tr>
//                 <th className="text-left px-4 py-2">Sl</th>
//                 <th className="text-left px-4 py-2">Title</th>
//                 <th className="text-left px-4 py-2">Date</th>
//                 <th className="text-left px-4 py-2">Download</th>
//               </tr>
//             </thead>
//             <tbody>
//               {notices.map((notice, index) => (
//                 <tr
//                   key={notice.id}
//                   className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
//                 >
//                   <td className="px-4 py-2">{index + 1}</td>
//                   <td className="px-4 py-2">{notice.title}</td>
//                   <td className="px-4 py-2">{notice.date}</td>
//                   <td className="px-4 py-2">
//                     <a
//                       href={notice.download}
//                       className="flex items-center text-blue-500 underline"
//                     >
//                       <FaFilePdf className="mr-2 text-red-500" />
//                       Download
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoticBoardScection;

"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFilePdf } from "react-icons/fa";

// Define the structure of a notice object
interface NoticeData {
  title: string;
  pdf: string;
  date: string; // Include the date field
}

const NoticBoardScection = () => {
  const [notices, setNotices] = useState<NoticeData[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch notices from the API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/upload/get-files"
        );
        setNotices(response.data.data); // Assuming the API returns an array of notices
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Notice Board Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Notice Board</h2>

        <div className="mb-6">
          <div className="flex gap-2">
            <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
              Office Notice
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
              No Objection
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">
              Student Notice
            </button>
          </div>
        </div>

        {/* Notices Table */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="text-left px-4 py-2">Sl</th>
                <th className="text-left px-4 py-2">Title</th>
                <th className="text-left px-4 py-2">Date</th>
                <th className="text-left px-4 py-2">File</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{notice.title}</td>
                  <td className="px-4 py-2">
                    {new Date(notice.date).toLocaleDateString()}{" "}
                    {/* Format the date */}
                  </td>
                  <td className="px-4 py-2">
                    <a
                      href={`http://localhost:5000/files/${notice.pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 underline"
                    >
                      <FaFilePdf className="mr-2 text-red-500" />
                      View PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default NoticBoardScection;
