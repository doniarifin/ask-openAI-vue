<template>
  <div class="askai w-full bg-gray-100 p-4 rounded-md ">
    <div class="mb-4 w-full flex flex-col text-[#408EC6]">
      <h1 class="text-3xl">
        Ask AI
      </h1>
    </div>
    <div class="mb-4 w-full flex flex-col">
      <label for="success" class="block mb-2 text-sm font-medium text-black-700"></label>
      <input type="text" v-model="input" id="word"
        class="text-center bg-gray-50 border-2 border-gray-500 text-black-900 dark:placeholder-gray-500 dark:text-black text-sm rounded-lg block w-full p-2.5 focus:outline-none"
        placeholder="Ask me about" @keyup.enter="getAdvice(input)">
    </div>
    <div class="mb-6 w-full flex flex-col">
      <button @click="getAdvice(input)"
        class="text-white bg-[#1E2761] hover:bg-[#717DCB] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center rounded disabled:opacity-50"
        :disabled="loading">Submit</button>
    </div>
    <div class="mb-6 text-justify border-2 border-[#7A2048] p-2 bg-[#408EC6] rounded-lg">
      <p><span class="font-medium text-white">{{
        result }}</span></p>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

const result = ref("ask me something, dude..");
const input = ref("");
const loading = ref(false);

function getAdvice(item) {
  let apiKey = import.meta.env.VITE_OPEN_API_KEY
  if (apiKey == "") {
    apiKey = "c13e90c5a9614632a4e32f01c03308ed"
  };
  let headers = {
    headers: { Authorization: `Bearer ` + apiKey },
  }
  let params = {
    model: "mistralai/Mistral-7B-Instruct-v0.2",
    messages: [
        {
            role: "user",
            content: item,
        }
    ]
  };

  result.value = "please wait bro..";
  loading.value = true;
  if (item == "" || item == undefined) {
    result.value = "please ask something."
    loading.value = false;
  } else {
    axios.post("https://api.aimlapi.com/chat/completions", params, headers).then(
      (r) => {
        let data = r.data;
        if (data.choices !== undefined) {
          result.value = data.choices[0].message.content
        } else if (data.slips === undefined) {
          result.value = r.data.message.text
        };
        loading.value = false;
      },
      (e) => {
        console.log(e);
        result.value = e.message + ", please try again later, bro..";
        loading.value = false;
      }
    );
  }
}

</script>
<style>
.askai {
  max-width: 720px;
  margin: auto;
}
</style>