import { ethers } from "ethers";

const poolInfo = {
  pair: "uWatt/USDT",
  address: "0x15455aE10dD0c3F896498B0EaDe476e05A929Ed2",
  abi: [
    "function slot0() external view returns (uint160 sqrtPriceX96, int24 tick, uint16 observationIndex, uint16 observationCardinality, uint16 observationCardinalityNext, uint8 feeProtocol, bool unlocked)",
  ],
};

const rpcUrl = process.env.NEXT_PUBLIC_POLYGON_RPL_URL;
const provider = new ethers.JsonRpcProvider(rpcUrl);

const pool = new ethers.Contract(poolInfo.address, poolInfo.abi, provider);

export async function getUWattPrice(): Promise<any> {
  const slot0 = await pool.slot0();

  const sqrtPriceX96 = BigInt(slot0[0]);
  const sqrtPrice = sqrtPriceX96 / BigInt(2 ** 96);
  const price = sqrtPrice ** BigInt(2);
  // This value `usdtPriceInUWatt`  indicates how many of token 1 you need to buy 1 of token 0
  // 10 ** 12 = 10**18 / 10**6 which is the decimal difference between the two tokens
  const rawUSDTPriceInUWatt = (price * BigInt(10 ** 18)) / BigInt(10 ** 12); // 18 decimals
  const rawUWattPriceInUSDT =
    BigInt(10 ** 36) / rawUSDTPriceInUWatt / BigInt(10 ** 12); // 6 decimals
  const floatUWattPriceInUSDT =
    Number(rawUWattPriceInUSDT) / Number(BigInt(10 ** 6));

  return {
    pair: poolInfo.pair,
    price: floatUWattPriceInUSDT,
    priceRaw: rawUWattPriceInUSDT.toString(),
    provider: "Uniswap V3 Pool",
    poolAddress: poolInfo.address,
  };
}
