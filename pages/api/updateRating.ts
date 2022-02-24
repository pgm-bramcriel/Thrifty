import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let Airtable = require("airtable");
  let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    "app8jXXTYXZkjJXLr"
  );

  const body = req.body;

  if (req.method === "PUT") {
    base("Products").update([
        {
          "id": body.itemId,
          "fields": {
            "vote_count": body.vote_count,
          },
        },
    ],
    function (err: any, records: any) {
        if (err) {
          console.error(err);
          return;
        }

        records.forEach(function (record: any) {
          console.log(record.get("product_name"));
        });
    });

    return res.json(body);
  }
}
