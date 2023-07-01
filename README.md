# Embedding Learning

I took this interesting Embedding learning from Great [RabbitHoleSyndrome](https://https://www.youtube.com/watch?v=QdDoFfkVkcw&t=2317s&ab_channel=RabbitHoleSyndrom) channel.

## 📚 Learning Notes

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
