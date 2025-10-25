import formidable from "formidable";
import fs from "fs";
import axios from "axios";
import FormData from "form-data";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Error parsing form data" });
    }

    if (!files.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    try {
      const file = files.file;
      const formData = new FormData();
      formData.append("file", fs.createReadStream(file.filepath), file.originalFilename);

      // Forward file to local server
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: formData.getHeaders(),
      });

      res.status(200).json({
        message: "File forwarded successfully",
        serverResponse: response.data,
      });
    } catch (error) {
      console.error("Error forwarding file:", error);
      res.status(500).json({ message: "Error forwarding file" });
    }
  });
};

export default handler;
