<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-toggle>
          <ion-button>
            <ion-icon slot="icon-only" name="menu"></ion-icon>
          </ion-button>
        </ion-menu-toggle>
      </ion-buttons>
      <ion-title>{{ name }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>
<script>
import { shopName } from '~/config'
export default {
  props: {
    name: {
      type: String,
      default: shopName,
    },
  },
}
</script>
