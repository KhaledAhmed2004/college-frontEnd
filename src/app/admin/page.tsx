"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFilePdf } from "react-icons/fa";

const UploadPage = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allFiles, setAllFiles] = useState([]);

  useEffect(() => {
    getPdfs();
  }, []);

  const getPdfs = async () => {
    try {
      const result = await axios.get(
        "http://localhost:5000/api/v1/upload/get-files"
      );
      setAllFiles(result.data.data);
      console.log(result.data.data);
    } catch (error) {
      console.error("Error fetching files:", error.message);
    }
  };

  const submitPdf = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:5000/api/v1/upload/upload-file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(result);
      getPdfs(); // Refresh the file list after upload
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Upload Form */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Upload Your PDF File
        </h2>
        <form onSubmit={submitPdf}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-600 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-gray-600 font-medium mb-2"
            >
              PDF File
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="application/pdf"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Upload
          </button>
        </form>
      </div>

      {/* Uploaded Files Table */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Uploaded Files</h2>
        {allFiles.length === 0 ? (
          <p className="text-gray-500">No files uploaded yet.</p>
        ) : (
          <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="text-left px-4 py-2">Sl</th>
                <th className="text-left px-4 py-2">Title</th>
                <th className="text-left px-4 py-2">File</th>
              </tr>
            </thead>
            <tbody>
              {allFiles.map((file, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{file.title}</td>
                  <td className="px-4 py-2">
                    <a
                      href={`http://localhost:5000/files/${file.pdf}`}
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

export default UploadPage;
