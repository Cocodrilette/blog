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
  const abjPrice = (price * BigInt(1e18)) / BigInt(10 ** 12);

  const usdtPrice = (BigInt(1e6) * abjPrice) / BigInt(1e6); // in uWatt
  const uWattPrice = BigInt(1e36) / usdtPrice; // in USDT

  return {
    pair: poolInfo.pair,
    price: parseFloat(
      parseFloat(ethers.formatUnits(uWattPrice, 18)).toFixed(4)
    ),
    priceRaw: Number(uWattPrice / BigInt(1e12)),
    provider: "Uniswap V3 Pool",
    poolAddress: poolInfo.address,
  };
}
