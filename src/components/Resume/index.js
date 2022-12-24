import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import samplePDF from './DSS22.pdf'

export default function Test() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }

  return (
    <div className="resume-page">
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="resume-page-actions">
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

// New code

//import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
//
//import samplePDF from './DSS22.pdf';
//
//export default function Test() {
//  const [numPages, setNumPages] = useState(null);
//
//  function onDocumentLoadSuccess({ numPages }) {
//    setNumPages(numPages);
//  }
//
//  return (
//    <Document
//      file={samplePDF}
//      onLoadSuccess={onDocumentLoadSuccess}
//    >
//      {Array.from(
//        new Array(numPages),
//        (el, index) => (
//          <Page
//            key={`page_${index + 1}`}
//            pageNumber={index + 1}
//          />
//        ),
//      )}
//    </Document>
//  );
//}
