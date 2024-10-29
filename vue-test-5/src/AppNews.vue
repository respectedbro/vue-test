<template>
  <div class="card">
    <h3>{{ title }}</h3>

    <app-button
        @action="open">{{ isNewsOpen ? 'Close' : 'Open'}}
    </app-button>

    <app-button
        color="danger"
        v-if="wasRead"
        @action="$emit('unmark', id)">Mark unread</app-button>

   <div v-if="isNewsOpen">
     <hr/>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     </p>

     <app-button
         v-if="!wasRead"
         color="primary"
         @action="mark"
         text=""
     >Read News</app-button>

     <app-news-list></app-news-list>

   </div>
  </div>
</template>

<script>
import AppButton from "@/AppButton.vue";
import AppNewsList from "@/AppNewsList.vue";

export default {
  components: {AppButton, AppNewsList},
  // props: ['title'],
  // emits: ['open-news'],
  props: {
    wasRead: Boolean,
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false;
      }
    }
  },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('No param id for emit read-news')
      return false
    },
    unmark: null
  },
  data() {
    return {
      isNewsOpen: this.isOpen
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    // unmark() {
    //   this.$emit('unmark', this.id)
    // }
  }
};
</script>

<style scoped></style>
