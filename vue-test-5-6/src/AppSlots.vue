<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>

    </div>

    <app-list>
      <template #default="{idx, iter}">
        <span style="color: #c25205">
          <strong>{{ idx + 1 }}</strong>
          Item: {{ iter }}
        </span>
      </template>
    </app-list>

    <app-block>
      <p>Это самый важный текст лдя этого блока</p>

      <template #header> <!-- v-slot или #  -->
        <h3>This is title</h3>
      </template>

      <template v-slot:footer>
        <hr/>
        <small>This is footer</small>
      </template>

    </app-block>
  </div>

</template>

<script>
import AppBlock from "@/AppBlock.vue";
import AppList from "@/AppList.vue";

export default {
  components: {AppBlock, AppList}
};
</script>

<style scoped>

</style>
