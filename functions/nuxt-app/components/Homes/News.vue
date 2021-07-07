<template>
  <v-container pa-0 fluid id="begin1" class="grey lighten-4">
    <v-row class="mx-auto py-12 text-left" justify="center">
      <v-card width="800" height="400" flat>
        <div class="overline mb-2">お知らせ</div>
        <v-list-group v-for="(news, i) in propsNewses" :key="i">
          <template v-slot:activator>
            <v-list-item-subtitle>
              {{ news.title }}
            </v-list-item-subtitle>
          </template>

          <v-list-item-content>
            <v-list-item-action-text>
              {{ news.body }}
            </v-list-item-action-text>
          </v-list-item-content>
        </v-list-group>
      </v-card>
    </v-row>
  </v-container>
</template> 
<script>
import axios from "axios";

export default {
  props: ["propsNewses"],
};
</script>

<style scoped>
</style>