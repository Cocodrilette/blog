import { getUWattPrice } from "@app/lib/uniswap/uniswap-v3-pool-adapter";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const uWattPrice = await getUWattPrice();

  res.status(200).json(uWattPrice);
}
