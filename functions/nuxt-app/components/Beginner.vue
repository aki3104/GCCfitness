<template>
  <v-container pa-0>
   <section id="features"
    class="grey lighten-3">
      <v-row no-gutters>
          <v-theme-provider dark>
              <v-container class="text-center" pa-0>
                <div class="py-12"></div>
                <h2 class="display-2 font-weight-bold mb-3">初めての方へ</h2>
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

      <v-row align="center" justify="center">
       <!-- 完全予約制 -->
      <v-col>
        <v-card
          max-width="344"
          min-height="450"
          class="mx-auto"
          >
          <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>完全予約制</v-card-title>
          <v-card-text>完全予約制のため、</v-card-text>
        </v-card>
      </v-col>
       <!-- 仲間と一緒に -->
      <v-col>
        <v-card
          max-width="344"
          min-height="450"
          class="mx-auto"
          >
          <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>仲間と一緒に</v-card-title>
          <v-card-text>一人でも利用可能ですが、基本は２人以上の利用を推奨します。ベンチプレスなどの高負荷トレーニングは慣れてないと危ないので、必ず２人以上で行ってください。今まで筋トレが続かなかった人も仲間がいれば継続してがんばれます。</v-card-text>
        </v-card>
      </v-col>
       <!-- 無人のジム -->
      <v-col>
        <v-card
          max-width="344"
          min-height="450"
          class="mx-auto"
          >
          <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>完全予約制</v-card-title>
          <v-card-text>器具が使いないことは絶対ない！</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    </section>

  </v-container>
</template>