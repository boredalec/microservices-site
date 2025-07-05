<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Microservices</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="link in links" :key="link.path">
              <router-link :to="link.path" class="nav-link">{{ link.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  const links = [
    { name: 'Главная', path: '/' },
    { name: 'QR-код', path: '/qr' },
    { name: 'Изображения', path: '/convert' },
    { name: 'Финансы', path: '/finance' },
    { name: 'Промокоды', path: '/promo' },
    { name: 'Пароли', path: '/password-check' },
    { name: 'Майнинг', path: '/mining' },
  ]
  </script>
  