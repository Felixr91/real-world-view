<template>
      <div>
        <h1>Events Listing</h1>
        <!-- :event > we need to send in each event that we iterate as a prop to our Eventcard component-->
        <EventCard v-for="event in events" :key="event.id" :event="event"/>
      </div>
</template>


<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      // reactive property
      events: []
    }
  },
  created() {
      EventService.getEvents()
      .then(response => {
        console.log(response.data)
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