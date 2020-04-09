<template>
  <v-container pa-0>
    <section id="access">
      <v-row no-gutters>
        <v-theme-provider dark>
          <v-container class="text-center" pa-0>
            <div class="py-12"></div>
            <h2 class="display-2 font-weight-bold mb-3">アクセス</h2>
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
    </section>
  </v-container>
</template>
