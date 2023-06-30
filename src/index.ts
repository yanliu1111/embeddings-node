import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HF_TOKEN);

const output = await hf.featureExtraction({
  model: "ggrn/e5-small-v2",
  inputs: "That is a happy person",
});
console.log(output);
