import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "../Style/Resume.css";

// ✅ Use .js worker instead of .mjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="resume-container">
      <div className="animated-titles">RESUME </div>

      <div className="pdf-container">
        <Document
          file={`${process.env.PUBLIC_URL}/Resume.pdf`} // ✅ public/Resume.pdf
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
        >
          {/* ✅ Show only first page */}
          <Page pageNumber={1} width={800} />
        </Document>
      </div>

      {/* ✅ Download Button */}
      <div className="pdf-download">
        <a
          href={`${process.env.PUBLIC_URL}/Resume.pdf`}
          download="Piyush_Resume.pdf"
          className="download-btn"
        >
          ⬇ Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
