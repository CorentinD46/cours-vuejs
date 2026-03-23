<script lang="js" setup>
import TagItem from '../tag/TagItem.vue';

defineProps(['tags']);
</script>

<template>
<ul class="tags">
    <TagItem class="tag" v-for="tag in tags" :key="`tag-${tag}`">{{ tag }}</TagItem>
</ul>
</template>

<style lang="css" scoped>
.tags {
  display: flex;
  flex-direction: row-reverse;
  gap: 10px;

  flex-grow: 1;
}
</style>