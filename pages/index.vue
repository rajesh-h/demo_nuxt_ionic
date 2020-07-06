<template>
  <ion-split-pane when="sm" content-id="main-content">
    <Menu />
    <div id="main-content" class="ion-page">
      <Header />
      <ion-content class="ion-padding" fullscreen>
        <ion-button @click="goToProducts">Products</ion-button>
      </ion-content>
    </div>
  </ion-split-pane>
</template>

<script>
import Menu from '~/components/blocks/Menu'
import Header from '~/components/blocks/Header'
export default {
  components: { Menu, Header },

  data() {
    return {}
  },
  methods: {
    goToProducts() {
      this.$router.push({
        name: 'products',
      })
    },
  },
}
</script>
