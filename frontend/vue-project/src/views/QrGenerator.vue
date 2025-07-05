<template>
    <div class="container mt-5">
      <h2>Генератор QR-кодов</h2>
      <input v-model="text" class="form-control mt-3" placeholder="Введите текст для QR-кода">
      <button @click="generate" class="btn btn-primary mt-3">Создать</button>
      <div v-if="qr" class="mt-4">
        <img :src="qr" alt="QR Code" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const text = ref('')
  const qr = ref(null)
  
  const generate = async () => {
    const response = await axios.post('http://localhost:3000/api/qr-generate', { text: text.value }, { responseType: 'blob' })
    qr.value = URL.createObjectURL(response.data)
  }
  </script>
  