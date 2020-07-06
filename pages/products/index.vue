<template>
  <ion-split-pane when="sm" content-id="main-content">
    <Menu />
    <div id="main-content" class="ion-page">
      <Header />
      <ion-content class="ion-padding" scroll-y="false" fullscreen>
        <template v-if="$fetchState.pending && !shop.products.length">
          <div class="article-cards-wrapper">
            <ion-list>
              <ion-list-header>
                <ion-label>
                  <ion-skeleton-text
                    animated
                    style="width: 20%;"
                  ></ion-skeleton-text>
                </ion-label>
              </ion-list-header>
              <ion-item v-for="p in 10" :key="p">
                <ion-thumbnail slot="start">
                  <ion-skeleton-text animated></ion-skeleton-text>
                </ion-thumbnail>
                <ion-label>
                  <h3>
                    <ion-skeleton-text
                      animated
                      style="width: 50%;"
                    ></ion-skeleton-text>
                  </h3>
                  <p>
                    <ion-skeleton-text
                      animated
                      style="width: 80%;"
                    ></ion-skeleton-text>
                  </p>
                  <p>
                    <ion-skeleton-text
                      animated
                      style="width: 60%;"
                    ></ion-skeleton-text>
                  </p>
                </ion-label>
              </ion-item>
            </ion-list>
          </div>
        </template>
        <template v-else-if="$fetchState.error">
          Something went wrong !!
          <!-- Replace with some proper eroor component -->
        </template>
        <template v-else>
          <Products :products="shop.products" :categories="shop.categories" />
        </template>
      </ion-content>
    </div>
  </ion-split-pane>
</template>

<script>
import Menu from '~/components/blocks/Menu'
import Header from '~/components/blocks/Header'
import Products from '~/components/Products.vue'
import { shopSlug } from '~/config'

export default {
  components: {
    Menu,
    Header,
    Products,
  },
  async fetch() {
    const response = this.$fireStore.collection('shops').doc(shopSlug)
    await response.get().then((res) => (this.shop = res.data()))
  },
  data() {
    return {
      shop: {
        products: [],
        categories: [],
      },
    }
  },
  methods: {
    sortedCategories() {
      return this.categories.slice().sort(function (a, b) {
        return a.priority > b.priority ? 1 : -1
      })
    },
  },
}
</script>
