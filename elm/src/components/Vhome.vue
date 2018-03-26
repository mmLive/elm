<template>
  <div id="home">
          <Vheader></Vheader>
          <Vmain></Vmain>
  </div>
</template>

<script>

import Vheader from './Vhome/Vheader'
import Vmain from './Vhome/Vmain'

export default {
  name: 'Vhome',
  data () {
    return {
     
    }
  },
  components:{
    Vheader,
    Vmain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
     flex: 1;
     display: flex;
    flex-direction: column;
}

</style>
