<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Live news {{ now }}</h2>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>
  </div>
  <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark="unreadNews"
  >
  </app-news>
</template>

<script>
import AppNews from "@/AppNews.vue";

export default {
  components: {AppNews},
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      isOpen: false,
      readRate: 0,
      news: [
        {
          title: "Vue CLI basic news",
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: "Vue 3 working",
          id: 2,
          isOpen: false
        }
      ],
    };
  },
  provide() {
    return {
      title: 'List of all news',
      news: this.news
    }
  },
  methods: {
    openNews(data) {
      this.openRate++
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  }
};
</script>

<style scoped>
h2 {
  color: #902f2f;
}
</style>
