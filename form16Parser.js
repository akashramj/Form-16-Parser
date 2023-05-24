const fs = require("fs");
const PDFParser = require("pdf-parse");

const extractPdfContent = async (filePath) => {
  try {
    // Read the PDF file
    const data = fs.readFileSync(filePath);

    // Parse the PDF
    const pdf = await PDFParser(data);

    // Extract the text content
    const paragraphs = pdf.text
      .split("\n")
      .filter((para) => para.trim() !== "");

    // Convert paragraphs into JSON format
    const jsonData = paragraphs.map((para, index) => ({
      page: index + 1,
      content: para,
    }));

    // Output the JSON data
    console.log(JSON.stringify(jsonData, null, 2));
    const jsonString = JSON.stringify(jsonData, null, 2);
    fs.writeFile("./output.json", jsonString, () => {});
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Usage
const filePath = "./form16Source.pdf";
extractPdfContent(filePath);
