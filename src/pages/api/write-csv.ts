import fs from "fs";
import path from "path";
import { format } from "fast-csv";

import { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";
type ResponseData = {
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { data } = req.body;
  if (!data || !Array.isArray(data)) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }

  const filePath = path.join(process.cwd(), "message.csv");
  const ws = fs.createWriteStream(filePath, { flags: "a", encoding: "utf8" });
  const delimiter = "~~##~~"; // Use a unique delimiter

  const csvStream = format({ headers: false, delimiter });

  csvStream.on("error", (error) => {
    res.status(500).json({ message: "Error writing to CSV file", error });
  });

  csvStream.on("finish", () => {
    res.status(200).json({ message: "Data written successfully" });
  });
  ws.write("\n");

  data.forEach((row) => {
    const item = {
      id: dayjs().valueOf(),
      from: row.from,
      message: row.message,
    };
    csvStream.write(item);
  });

  csvStream.pipe(ws);
  csvStream.end();
}
