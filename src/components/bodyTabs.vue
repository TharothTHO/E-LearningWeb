<template>
    <div class='wrapper'>
          <tabs :mode="mode">
            <tab title="Week 1">Hello From Week 1</tab>
            <tab title="Week 2">Hello From Week 2</tab>
            <tab title="Week 3">Hello From Week 3</tab>
            <tab title="Week 4">Hello From Week 4</tab>
            <tab title="Week 5">Hello From Week 5</tab>
            <tab title="Week 6">Hello From Week 6</tab>
            <tab title="Week 7">Hello From Week 7</tab>
            <tab title="Week 8">Hello From Week 8</tab>
            <tab title="Week 9">Hello From Week 7</tab>
            <tab title="Week 10">Hello From Week 8</tab>
          </tabs>
    </div>
</template>

<script>
import Tab from './Tab.vue';
import Tabs from './Tabs.vue'
export default {
  components: {Tab , Tabs},
  data () {
    return {
      mode: 'dark'
    }
  },
  methods: {
    changeStyle () {
      if (this.mode === 'dark') {
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    }
  }
}
</script>

<style>
.wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 50px;
    color: #203E61;
  }

</style>