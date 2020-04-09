<template>
  <v-container pa-0>
    <v-row no-gutters>
      <v-theme-provider dark>
        <v-container class="text-center" pa-0>
          <div class="py-12"></div>
          <h2 class="display-2 font-weight-bold mb-3">料金</h2>
          <v-responsive
          class="mx-auto mb-8"
          width="56"
          >
            <v-divider class="mb-1"></v-divider>
            <v-divider></v-divider>
          </v-responsive>
        </v-container>
      </v-theme-provider>
    </v-row>
    <!-- <section id="stats">
      <v-container class="text-center" pa-0>
        <h2 class="display-2 font-weight-bold mb-3">料金</h2>
      </v-container>
      <v-img
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      v-bind:src="require('@/static/images/price.jpg')"
      >
        <v-container fill-height pa-0>
          <v-row class="mx-auto">
            <v-col
            class="white--text text-center"
            cols="12"
            tag="h1"
            >
            <span
              class="font-weight-black"
              :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']"
              >
              3,500円/月
            </span>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section> -->

    <v-row align="center" justify="center">
    </v-row>
     <v-row align="center" justify="center">
       <!-- 完全予約制 -->
      <v-col>
        <v-card
          max-width="344"
          min-height="400"
          class="mx-auto"
          >
          <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>１回の飲み会より安い！</v-card-title>
          <v-card-text>１回の飲み会を我慢して１ヶ月のプライベートジムを使ってみませんか？</v-card-text>
        </v-card>
      </v-col>
       <!-- 仲間と一緒に -->
      <v-col>
        <v-card
          max-width="344"
          min-height="400"
          class="mx-auto"
          >
          <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>通いたい放題</v-card-title>
          <v-card-text>予約さえ取れればいくら通っても大丈夫です。</v-card-text>
        </v-card>
      </v-col>
       <!-- 無人のジム -->
      <v-col>
        <v-card
          max-width="344"
          min-height="400"
          class="mx-auto"
          >
          <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>年会費、登録費</v-card-title>
          <v-card-text>初期費用、年会費はありません。</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
