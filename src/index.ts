import { pipeline } from "@xenova/transformers";

const generateEmbeddings = await pipeline(
  "feature-extraction",
  "Xenova/all-MiniLM-L6-v2"
);

let result = await generateEmbeddings("This is a simple test.", {
  pooling: "mean",
  normalize: true,
});
console.log(result);
