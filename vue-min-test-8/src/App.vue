<template>
  <div class="container column">
    <ResumeForm @block-added="addBlock"/>
    <ResumeView :blocks="blocks" />

  </div>
  <div class="container">
    <p>
      <button class="btn primary">Загрузить комментарии</button>
    </p>
    <div class="card">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item">
          <div>
            <p><strong>test@microsoft.com</strong></p>
            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, reiciendis.</small>
          </div>
        </li>
      </ul>
    </div>
    <div class="loader"></div>
  </div>
</template>

<script>
import ResumeForm from "@/components/ResumeForm.vue";
import ResumeView from "@/components/ResumeView.vue";

export default {
  components: {ResumeView, ResumeForm},
  data() {
    return {
      blocks: [],
      comments: [],
      loading: false
    }
  },
  methods: {
    addBlock(block) {
      this.blocks.push(block)
    }
  }
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
