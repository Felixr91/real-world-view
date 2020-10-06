<template>
  <div>


    <h1>Event Listings</h1>
    <EventCard/>
    <BaseIcon name='activity'/>
    <BaseInput/>

    

  </div>
</template>



<script>

import EventCard from '@/components/EventCard.vue'

// BELOW local registering of EventCard it as a component of EventList.vue
// This is great but if we wanted EventCard.vue to be registered in more than one componenent we would have to import in every component that needed it. 
// To do that you have to register it Globally. Base components are shared throughout your app frequently - things like base icons or base buttons.
export default {
  components: {
    EventCard
  }
}

</script>




<style>

</style>