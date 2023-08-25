<template>
  <body>
    <nav class="sidebar close">
      <header>
        <div class="image-text">
          <span class="image">
            <img src="@/assets/logo.png" alt="logo" />
          </span>
          <div class="text header-text">
            <span class="name">Sidebar Menu</span>
            <span class="profession">by...Peterng</span>
          </div>
        </div>
        <i class="bx bx-chevron-right toggle"></i>
      </header>
      <div class="menu-bar">
        <div class="menu">
          <li class="search-box">
            <i class="bx bx-search icon"></i>
            <input type="search" placeholder="Search..." />
          </li>
          <!-- <ul class="menu-links"> -->
          <li class="nav-link">
            <router-link to="/">
              <i class="bx bx-home-alt icon" title="Dashboard"></i>
              <span class="text nav-text">Dashboard</span>
            </router-link>
          </li>
          <li class="nav-link">
            <router-link to="/Revenue">
              <i class="bx bx-bar-chart-alt-2 icon" title="Revenue"></i>
              <span class="text nav-text">Revenue</span>
            </router-link>
          </li>
          <li class="nav-link">
            <router-link to="/Notification">
              <i class="bx bx-bell icon" title="Notification"></i>
              <span class="text nav-text">Notification</span>
            </router-link>
          </li>
          <li class="nav-link">
            <a href="#">
              <i class="bx bx-pie-chart-alt icon" title="Analytics"></i>
              <span class="text nav-text">Analytics</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#">
              <i class="bx bx-heart icon" title="Like"></i>
              <span class="text nav-text">Like</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#">
              <i class="bx bx-wallet icon" title="Wallet"></i>
              <span class="text nav-text">Wallet</span>
            </a>
          </li>
          <!-- </ul> -->
        </div>
        <div class="bottom-content">
          <li class="">
            <a href="#">
              <i class="bx bx-log-out icon" title="Logout"></i>
              <span class="text nav-text">Logout</span>
            </a>
          </li>
          <li class="mode">
            <div class="moon-sun">
              <i class="bx bx-moon icon moon"></i>
              <i class="bx bx-sun icon sun"></i>
            </div>
            <span class="mode-text text">Dark Mode</span>
            <div class="toggle-switch">
              <span class="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
    <section class="home">
      <div class="text">
        <router-view />
      </div>
    </section>
  </body>
</template>

<script>
import "@/css/style.css";
import script from "@/js/script.js"
export default {
  mounted() {
    script.script();
  },
};
</script>

<style></style>
