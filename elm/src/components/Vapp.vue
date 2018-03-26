<template>
  <div id="Vapp">
        <router-view></router-view>
        <Vfooter></Vfooter>
  </div>
</template>

<script>

import Vfooter from './Vfooter'

export default {
  name: 'Vapp',
  data(){
    return{
       
    }
  },
  components:{
    Vfooter
  }

}
</script>

<style>

html,
body,#Vapp{
	   height: 100%;
     width:100%;
}
#Vapp {
	display: flex;
	flex-direction: column;
}


</style>
