<template>
  <div class="mb-4 w-full flex flex-col">
    <label for="success" class="block mb-2 text-sm font-medium text-black-700"></label>
    <input type="text" v-model="value" id="word"
      class="text-center bg-gray-50 border-2 border-gray-500 text-black-900 dark:placeholder-green-500 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 focus:outline-none"
      placeholder="Enter a word">
  </div>
  <div class="mb-6 w-full flex flex-col">
    <button @click="getAdvice(value)"
      class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded disabled:opacity-50"
      :disabled="loading">Get advice</button>
  </div>
  <div class="mb-6">
    <p :class="value == '' || value == undefined ? 'mt-2 text-sm text-red-600' : 'text-green-600'"><span class="font-medium">{{
      result }}</span></p>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import axios from "axios";


const result = ref("");
const loading = ref(false);


function getAdvice(params) {
  result.value = "";
  loading.value = true;
  if (params == "" || params == undefined) {
    result.value = "please enter one word."
    loading.value = false;
  } else {
    axios.get("https://api.adviceslip.com/advice/search/" + params).then(
      (r) => {
        let data = r.data
        if (data.slips !== undefined) {
          result.value = data.slips[0].advice
        } else if (data.slips === undefined) {
          result.value = r.data.message.text
        }
        loading.value = false;
      },
      (e) => {
        loading.value = false;
      }
    );
  }
}

</script>