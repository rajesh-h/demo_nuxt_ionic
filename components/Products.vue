<template>
  <div>
    <ion-segment
      v-model="selectedCategory"
      scrollable
      :value="categories[0].category"
      @ionChange="segmentChanged($event)"
    >
      <ion-segment-button
        v-for="cat in categories"
        :key="cat.priority"
        :value="cat.category"
      >
        <ion-label>{{ cat.category }} </ion-label>
      </ion-segment-button>
    </ion-segment>
    <div v-if="selectedCategory === Dinner">
      this is dinner
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedcategory: this.categories[0].category,
    }
  },
  computed: {},
  methods: {
    segmentChanged(e) {
      // eslint-disable-next-line no-console
      console.log('Segment changed', e)
    },
  },
}
</script>

<style></style>
