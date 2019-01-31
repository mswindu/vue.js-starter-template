<template>
  <VNavigationDrawer
    id="appDrawer"
    v-model="drawer"
    :temporary="true"
    fixed
    app
    width="260"
  >
    <VToolbar color="primary darken-1" dark class="elevation-0">
      <VToolbarTitle class="ml-0 pl-3">
        <span class="hidden-sm-and-down">
          Application
        </span>
      </VToolbarTitle>
    </VToolbar>
    <VuePerfectScrollbar
      :settings="scrollSettings"
      class="drawer-menu--scroll"
    >
      <AppMenuList />
    </VuePerfectScrollbar>
  </VNavigationDrawer>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  import AppMenuList from '@/components/AppMenuList';

  export default {
    components: {
      VuePerfectScrollbar,
      AppMenuList,
    },
    data() {
      return {
        scrollSettings: {
          maxScrollbarLength: 160,
        },
      };
    },
    computed: {
      ...mapState('app', ['sidebar']),
      drawer: {
        get() {
          return this.sidebar.opened;
        },
        set(val) {
          this.drawerSidebar(val);
        },
      },
    },
    methods: mapActions('app', ['drawerSidebar']),
  };
</script>

<style>
</style>
