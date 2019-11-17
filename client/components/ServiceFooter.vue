<template>
  <v-footer :fixed="fixed" app>
    <span>&copy; 2019</span>
  </v-footer>
</template>

<script>
export default {
  name: 'ServiceFooter',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'KTバランスチャート'
    }
  }
}
</script>

<style></style>
