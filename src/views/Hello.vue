<template>
  <Sidebar />
  <h1>{{ collapsed ? 'closed' : 'open' }}</h1>
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";
import { collapsed, toggleSidebar } from "@/components/sidebar/state";

export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth, collapsed, toggleSidebar };
  }
};
</script>