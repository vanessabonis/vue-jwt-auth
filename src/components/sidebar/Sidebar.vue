<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div></div>
      </span>
      <span v-else></span>
    </h1>

    <SidebarLink to="/" icon="fa-solid fa-house">Home</SidebarLink>
    <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/analise" icon="fas fa-chart-bar">Analise</SidebarLink>
    <SidebarLink to="/cadastro" icon="fas fa-pen">Cadastro</SidebarLink>
    <SidebarLink to="/cobranca" icon="fas fa-book">Cobrança</SidebarLink>

    <span class="collapse-icon" @click="toggleSidebar">
      
    </span>

    <div class="logout" @click="logout">

    </div>
    <div class="mesa" @click="mesa">
      
    </div>
  </div>
</template>

<script>
import SidebarLink from "./SidebarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from './state';

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<style>
:root {
  --sidebar-bg-color: #105270;
  --sidebar-item-hover: #649eb9;
  --sidebar-item-active: #011d2b;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: white;

  transition: 0.2s linear;
}
</style>



