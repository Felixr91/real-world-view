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
import axios from 'axios'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    axios
      .get('http://localhost:3000/events') 
      .then(response => {
        this.events = response.data // <--- set the events data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>



<style>

</style>