import "./App.css";

const DOCUMENT_URL = "/pdfs/lesson 20 - pages 1 to 6 appear blank.pdf";

function App() {
  return (
    <div className="App">
      <iframe
        title="PDF"
        src={`/pdfjs-2.5.207-es5-dist/web/viewer.html?file=${DOCUMENT_URL}`}
        width="100%"
        height="700px"
      ></iframe>
    </div>
  );
}

export default App;
