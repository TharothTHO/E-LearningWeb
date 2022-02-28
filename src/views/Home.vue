<template>
  <div class="home">
    <ul>   
      <navigation />
      <bodyTabs />
    </ul>
  </div>
</template>

<script>
import navigation from '../components/navigation.vue';
import bodyTabs from '../components/bodyTabs.vue'
export default {
  name: "Home",
  components: {navigation , bodyTabs},
  data () {
    return {
    }
  }
};
</script>
<style scoped>
.home {
  
}
.logo {
  padding: ;
    width: 150px;
}


</style>
