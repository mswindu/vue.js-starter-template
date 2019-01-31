<template>
  <VList
    dense
    expand
  >
    <template v-for="(item) in menus">
      <VListTile
        :key="item.name"
        :to="!item.href ? { name: item.name } : null"
        :href="item.href"
        :disabled="item.disabled"
        :target="item.target"
        ripple="ripple"
        rel="noopener"
      >
        <VListTileAction v-if="item.icon">
          <VIcon>{{ item.icon }}</VIcon>
        </VListTileAction>
        <VListTileContent>
          <VListTileTitle>{{ item.title }}</VListTileTitle>
        </VListTileContent>
        <VListTileAction v-if="item.subAction">
          <VIcon class="success--text">
            {{ item.subAction }}
          </VIcon>
        </VListTileAction>
      </VListTile>
    </template>
  </VList>
</template>

<script>
  import menu from '@/menu/appMenu';

  export default {
    data() {
      return {
        menus: menu,
      };
    },
  };
</script>

<style>
</style>
