import type { NextApiRequest, NextApiResponse } from "next";

export interface IProduct {
  id: string;
  productName: string;
  price: number;
  description: string;
  image: string;
  isHot: boolean;
};

type response = {
  hotProducts: Array<IProduct>
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<response>
) {
  var Airtable = require('airtable');
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('app8jXXTYXZkjJXLr');

  if (req.method === "GET") {
    // Process a GET request

    const response = await base('Products').select({
      filterByFormula: "{isHot}",
      maxRecords: 4,

    }).all()

    const formatedData = response.map((res:any) => {
      return {
        id: res.id,
        productName: res.fields.product_name,
        description: res.fields.description,
        image: res.fields.image,
        price: res.fields.price,
        isHot: !!res.fields.isHot,
      }
    });

    return res.json(formatedData);

  }
}
