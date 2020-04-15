<template>
  <section id="hero">
    <v-row no-gutters>
          <v-img 
            width="100vw"
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            v-bind:src="require('@/static/images/home1.jpg')"
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
                      WELCOME TO
                    </span>
                    <br>
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      GCCフィットネス
                    </span>
                  </v-col>
                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
                
              </v-container>
            </v-theme-provider>
          </v-img>
    </v-row>
 
  </section>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
             src: 'images/home1.jpg',
          },
          {
            src: 'images/home2.jpg',
          },
          {
            src: 'images/home3.jpeg',
          },
        ],
      }
    },
  }
</script>

<style scoped>
</style>>