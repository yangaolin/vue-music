<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    props: {
      propeType: {
        type:Number,
        default;1
      },
      click: {
        type:Boolean,
        default:true
      },
      data: {
        type: {
          
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>