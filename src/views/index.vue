<template>
	<div class="containerView-main">
		<router-view class="views"></router-view>
		<v-tabbar></v-tabbar>
	</div>
</template>

<script>
import vTabbar from '../components/tabbar/tabbar.vue';
export default {
  name: 'index',
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  	getUserData() {

  	}
  },
  components: {
    vTabbar
  }
}
</script>
