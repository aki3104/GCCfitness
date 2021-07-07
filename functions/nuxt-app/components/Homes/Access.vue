<template>
  <v-container class="text-center" pa-0>
    <v-row align="center" justify="center">
      <Title>
        <template #title>
          {{ pageTitle }}
        </template>
      </Title>
    </v-row>
    <v-row align="center" justify="center">
      <Card v-for="(item, i) in items" :key="i">
        <template v-slot>
          <v-img height="250" :src="item.src"> </v-img>
        </template>

        <template #cardTitle>
          {{ item.title }}
        </template>

        <template #cardText class="text-right">
          {{ item.text }}
        </template>
      </Card>
    </v-row>
    <div class="py-12"></div>
  </v-container>
</template>

<script>
export default {
  components: {
    Card: () => import("@/components/Items/TheCard"),
    Title: () => import("@/components/Items/TheTitle"),
  },
  data() {
    return {
      items: [
        {
          title: "場所",
          text: "下呂市萩原町桜洞1611番地５",
          src: "images/begin1.jpg",
        },
        {
          title: "駐車場あり",
          text: "３台は余裕で止めることができます。",
          src: "images/begin2.jpg",
        },
      ],
      pageTitle: "アクセス",
    };
  },
};
</script>

<style scoped>
</style>