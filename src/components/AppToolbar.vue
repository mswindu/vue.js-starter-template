<template>
  <VToolbar
    color="primary"
    dark
    fixed
    height="64"
    extension-height="48"
    app
    class="elevation-0"
  >
    <VToolbarTitle class="ml-0 pl-3">
      <VToolbarSideIcon @click.stop="toggleSidebar" />
    </VToolbarTitle>
  </VToolbar>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: mapActions('app', ['toggleSidebar']),
  };
</script>

<style>
</style>
