<template>
  <v-container pa-0>
   <section id="hero">
      <v-row no-gutters>
        <v-img
          v-bind:src="require('@/static/images/beginner.jpg')"
          height = '500px'
        >
          <v-theme-provider dark>
            <v-container fill-height pa-0>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-center"
                  cols="12"
                  tag="h1"
                >
                  <span
                    class="font-weight-light"
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  >
                    初めての方へ
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
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
      <div class="py-12"></div>
        <v-container class="text-center" pa-0>
          <h2 class="display-2 font-weight-bold mb-3">萩原の町から近く、駐車場あり</h2>
          <v-responsive
            class="mx-auto mb-8"
            width="56"
            >
            <v-divider class="mb-1"></v-divider>
            <v-divider></v-divider>
          </v-responsive>
          <div class="py-12"></div>
         <v-row align="center" justify="center">
         <!-- 星雲会館から近い -->
        <v-col>
          <v-card
            max-width="500"
            min-height="300"
            class="mx-auto"
            >
            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title>星雲会館から徒歩</v-card-title>
            <v-card-text>星雲会館から徒歩５分の高アクセス</v-card-text>
          </v-card>
        </v-col>

        <!-- 駐車場あり -->
        <v-col>
          <v-card
            max-width="500"
            min-height="300"
            class="mx-auto"
            >
            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title>駐車場あり</v-card-title>
            <v-card-text>最大５台止められる駐車場完備</v-card-text>
          </v-card>
        </v-col>
      </v-row>
     </v-container>
    </section>
  </v-container>
</template>