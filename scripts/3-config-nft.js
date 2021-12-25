import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xCC37821fBAcaBB310F86bFE1b71EdaDB5d27003D",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The investor rights",
        description: "This NFT will give you access to InvestoDAO!",
        image: readFileSync("scripts/assets/Investo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()