<template>
  <v-container class="text-center grey lighten-2" ma-0 pa-0 fluid>
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
          title: "下呂市職員限定",
          text:
            "このジムは下呂市職員限定です。運動しようとしても一人だとなかなか続けられませんよね？そこで職員２、３人で利用していただき、仲間と共に継続したトレーニングすることをおすすめします",
          src: "images/begin1.jpg",
        },
        {
          title: "完全予約制",
          text:
            "このジムは完全予約制になっています。一人で集中してトレーニング・２、３人で楽しくトレーニングなど使い方は様々できます。使いたい放題のネット環境もあるため、ネット見ながら有酸素運動なども快適にできます。",
          src: "images/begin2.jpg",
        },
        {
          title: "高負荷のフリーウエイト対応",
          text:
            "下呂市では高負荷フリーウエイトのトレーニングができるフィットネスジムはありません。このフィットネスジムにはベンチプレスを安全に行えるようパワーケージを導入しています。MAX重量１2０キロまで対応可能です！",
          src: "images/begin3.jpg",
        },
        {
          title: "無人、ネット環境あり",
          text:
            "予約をするとスマートロックを使って鍵をお渡しします。完全無人のため営業時間が長めにしました。自分が都合が良い時間に自由に使うことができます",
          src: "images/begin4.jpg",
        },
      ],
      pageTitle: "４つの特徴",
    };
  },
};
</script>

<style scoped>
</style>