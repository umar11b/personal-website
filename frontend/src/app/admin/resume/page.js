"use client";
import { useState } from "react";

export default function ResumeAdmin() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setMessage("");
    } else {
      setMessage("Please select a valid PDF file");
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first");
      return;
    }

    setUploading(true);
    setMessage("Uploading...");

    try {
      // For now, this is a placeholder
      // In a real implementation, you'd upload to your backend
      // which would then trigger the GitHub Actions workflow

      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setMessage(
        "✅ Resume uploaded successfully! It will be deployed automatically."
      );
      setFile(null);
    } catch (error) {
      setMessage("❌ Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-8">
          Resume Management
        </h1>

        <div className="bg-gray-800 rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Upload New Resume</h2>
            <p className="text-gray-300 mb-4">
              Upload your latest resume from Overleaf. It will be automatically
              deployed to your website.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Select PDF File
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-purple-600"
              />
            </div>

            {file && (
              <div className="bg-gray-700 rounded p-3">
                <p className="text-sm">
                  <strong>Selected file:</strong> {file.name}
                </p>
                <p className="text-xs text-gray-400">
                  Size: {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {uploading ? "Uploading..." : "Upload Resume"}
            </button>

            {message && (
              <div
                className={`p-3 rounded ${
                  message.includes("✅")
                    ? "bg-green-900/20 text-green-400"
                    : message.includes("❌")
                    ? "bg-red-900/20 text-red-400"
                    : "bg-blue-900/20 text-blue-400"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recommended Workflow</h2>
          <div className="space-y-3 text-gray-300">
            <p>
              1. <strong>Update in Overleaf:</strong> Make your changes and
              compile to PDF
            </p>
            <p>
              2. <strong>Sync to GitHub:</strong> If connected, commit and push
              from Overleaf
            </p>
            <p>
              3. <strong>Automatic Deployment:</strong> GitHub Actions will
              deploy within minutes
            </p>
            <p>
              4. <strong>Manual Upload:</strong> Or use this interface as a
              backup
            </p>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Current Resume</h2>
          <a
            href="/Umar_Zaman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium"
          >
            View Current Resume
          </a>
        </div>
      </div>
    </div>
  );
}
