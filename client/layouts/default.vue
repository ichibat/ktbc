<template>
  <v-app dark>
    <!-- <ServiceDrawer /> -->
    <ServiceHeader />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <ServiceFooter />
  </v-app>
</template>

<script>
import ServiceHeader from '../components/ServiceHeader'
import ServiceFooter from '../components/ServiceFooter'
// import ServiceDrawer from '../components/ServiceDrawer'
export default {
  components: {
    ServiceHeader,
    ServiceFooter
    // ServiceDrawer
  },
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
