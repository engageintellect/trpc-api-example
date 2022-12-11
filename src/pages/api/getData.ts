import type { NextApiRequest, NextApiResponse } from "next";


const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

const GetData = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();

  res.json(data)
};


export default GetData;

