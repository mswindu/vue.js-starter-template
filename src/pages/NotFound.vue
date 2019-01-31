<template>
  <VApp id="404">
    <VContainer fluid fill-height>
      <VLayout align-center justify-center>
        <div class="text-md-center">
          <h1>404</h1>
          <h2 class="my-3 headline ">
            Sorry, page not found
          </h2>
          <div>
            <VBtn color="primary" @click="goHome">
              To main
            </VBtn>
          </div>
        </div>
      </VLayout>
    </VContainer>
  </VApp>
</template>

<script>
  export default {
    methods: {
      goHome() {
        this.$router.push({ path: '/' });
      },
    },
  };
</script>
<style scoped lang="css">
  h1 {
    font-size: 150px;
    line-height: 150px;
    font-weight: 700;
    color: #252932;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
  }
</style>
