# Embedding Learning

I took this interesting Embedding learning from Great [RabbitHoleSyndrome](https://https://www.youtube.com/watch?v=QdDoFfkVkcw&t=2317s&ab_channel=RabbitHoleSyndrom) channel.

## 📚 Learning Notes

Supper Happy to start my learning journey in Hugging Face. Never used in my previous projects, but always wanted to try it out. This is a great opportunity to use it in Embedding Learning. 🤗

## 1. Hungface inference API approach to generateing embeddings

`npm install @huggingface/inference dotenv`
There are different model you can choose, for example `sentence-transformers/paraphrase-MiniLM-L6-v2`, `ggrn/e5-small-v2`

## Semantic comparison

```typescript
const output1 = await hf.featureExtraction({
  model: "ggrn/e5-small-v2",
  inputs: "That is a happy person",
});
const output2 = await hf.featureExtraction({
  model: "ggrn/e5-small-v2",
  inputs: "That is a sad person",
});

//0.9999999339111838
```

It provides the embeddings to work using the huggingface model from mteb table. It alaso proves the API is producing normalized vectors, because if it wasn't normalized then dotproduct would not be 1.

The true test is going to be comparing two different sentences, that are somewhat similar amd are quite different.

## 2. Transformers.js

check out the [transformers.js](https://huggingface.co/docs/transformers.js/index) documentation.

> State-of-the-art Machine Learning for the web. Run Transformers directly in your browser, with no need for a server. <br>

Install [onnx](https://onnxruntime.ai/) runtime for transformers.js <br>
`npm i @xenova/transformers`

Covert your model to ONNX format. You don't have to wait Xenova has created 🙅‍♀️ Check [Custom usage](https://huggingface.co/docs/transformers.js/custom_usage#convert-your-models-to-onnx) in Transformers.js documentation.
