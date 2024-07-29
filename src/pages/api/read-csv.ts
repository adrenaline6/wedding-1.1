import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { NextApiRequest, NextApiResponse } from "next";
import { CheerMessage } from "@/model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const results: CheerMessage[] = [];
  const filePath = path.join(process.cwd(), "message.csv");

  fs.createReadStream(filePath)
    .pipe(
      csv({
        separator: "~~##~~",
      })
    )
    .on("data", (data) => {
      if (results.length >= 10) {
        results.shift();
      }
      results.push(data);
    })
    .on("end", () => {
      res.status(200).json(results);
    })
    .on("error", (error) => {
      res.status(500).json({ message: "Error reading CSV file", error });
    });
}
