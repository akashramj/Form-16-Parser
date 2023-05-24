const textract = require("textract");

const extractDocContent = (filePath) => {
  textract.fromFileWithPath(
    filePath,
    { preserveLineBreaks: true },
    (error, text) => {
      if (error) {
        console.error("Error:", error.message);
      } else {
        // Process the extracted text
        const paragraphs = text
          .split("\n")
          .filter((para) => para.trim() !== "");

        // Convert paragraphs into JSON format
        const jsonData = paragraphs.map((para) => ({ content: para }));

        // Output the JSON data
        console.log(JSON.stringify(jsonData, null, 2));

        // Length of JSON
        let jsonSize = Object.keys(jsonData).length;
        // console.log(jsonSize);
      }
    }
  );
};

// Usage
const filePath = "./form16Source.pdf";
extractDocContent(filePath);
