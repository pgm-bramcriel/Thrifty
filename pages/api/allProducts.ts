import { ContactlessOutlined } from "@material-ui/icons";
import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "./popularProducts";

type response = {
    hotProducts: Array<IProduct>;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<response>
) {
    var Airtable = require("airtable");
    var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
        "app8jXXTYXZkjJXLr"
    );

    if (req.method === "GET") {
        // Process a GET request

        const response = await base("Products").select({}).all();

        const formatedData = response.map((res: any) => {
            return {
                id: res.id,
                productName: res.fields.product_name,
                description: res.fields.description,
                image: res.fields.image,
                price: res.fields.price,
                isHot: !!res.fields.isHot
            };
        });

        return res.json(formatedData);
    }
    if (req.method === "POST") {
        const body = req.body;
        console.log(body);
        base('Products').create([
            {
              "fields": {
                "product_name": body.title,
                "price": body.price,
                "description": body.description,
                "image": "https://storage.googleapis.com/koppen/54eee24b-8a51-4dd9-96ec-575dfe181b22.png",
                "isHot": false,
                "vote_count": 0
              }
            }
          ], function(err: any, records: any) {
            if (err) {
              console.error(err);
              return;
            }
            records.forEach(function (record: any) {
              console.log(record.getId());
            });
        });

        return res.json(body);
    }
  if (req.method === "PUT") {
    const body = req.body;

    const response = await base("Products").select({}).all();

    const formatedData = response.map((res: any) => {
        return {
            id: res.id,
            productName: res.fields.product_name,
            description: res.fields.description,
            image: res.fields.image,
            price: res.fields.price,
            isHot: !!res.fields.isHot,
        };
    });

    const filteredData = formatedData.filter(data => data.id == body.itemId);

    base('Products').update([
      {
        "id": body.itemId,
        "fields": {
          "product_name": body.newTitle ? body.newTitle : filteredData.productName,
          "price": body.newPrice ? body.newPrice : filteredData.price,
          "description": body.newDescription ? body.newDescription : filteredData.description,
        }
      }
    ], function(err: any, records: any) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record: any) {
        console.log(record.get('product_name'));
      });
    });

    return res.json(body);
  }
}
