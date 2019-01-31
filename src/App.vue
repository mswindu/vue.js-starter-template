<template>
  <VApp
    id="inspire"
    class="app"
  >
    <template v-if="!$route.meta.public">
      <AppNavigation class="app--drawer" />
      <AppToolbar class="app--toolbar" />
      <VContent>
        <div class="page-wrapper">
          <RouterView />
        </div>
        <VFooter
          height="auto"
          class="white pa-3 app--footer"
        >
          <VSpacer />
          <span class="caption">
            Make with love &copy; {{ new Date().getFullYear() }}
          </span>
        </VFooter>
      </VContent>
    </template>
    <template v-else>
      <Transition>
        <KeepAlive>
          <RouterView />
        </KeepAlive>
      </Transition>
    </template>
  </VApp>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation';
  import AppToolbar from '@/components/AppToolbar';

  export default {
    components: {
      AppNavigation,
      AppToolbar,
    },
  };
</script>

<style lang="stylus" scoped>
  .page-wrapper
    min-height:calc(100vh - 64px - 50px);
</style>
