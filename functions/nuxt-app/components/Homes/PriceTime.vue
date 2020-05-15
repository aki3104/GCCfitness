<template>
  <v-container 
    class="text-center grey lighten-3"
    ma-0
    pa-0
    fluid
  >
    <v-row align="center" justify="center">
      <Title>
        <template #title>
          {{ pageTitle }}
        </template>
      </Title>
    </v-row>
    <v-container>
      <v-row align="center" justify="center">
        <Card
          v-for="(item, i) in items"
          :key="i"
        >
          <template v-slot>
            <v-theme-provider dark>
              <div class="py-10 text-center">
                <v-avatar
                  color="primary"
                  size="88"
                >
                  <v-icon large>
                    {{ item.icon }}
                  </v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>
          </template>

          <template #cardTitle>
            {{ item.title }}
          </template>

          <template #cardText> 
            <div class="mb-3" v-for="n in 3" :key="n">
              {{ item.text[n-1] }}
            </div>
          </template>
          <template #cardBtn>
            <v-row align="center" justify="center">
              <ReBtn />
            </v-row>
          </template>

        </Card>
      </v-row>
    </v-container>
    <div class="py-12"></div>
  </v-container>
</template>

<script>
  export default {
    components: {
      Card: () => import('@/components/Items/TheCard'),
      Title: () => import('@/components/Items/TheTitle'),
      ReBtn: () => import('@/components/Items/TheReBtn')
    },
    data () {
      return {
        items: [
          {
            title: '利用料: 900／1時間',
            text: ['年会費、登録料は無料！', 
                    '3人で利用すれば 300円／１時間',
                    '※代表者がお支払いください'],
            icon: 'fa-money-bill-wave',
            
          },
          {
            title: '営業日：不定休',
            text: ['基本は無休', 
                  'お盆、年末年始、メンタナンスで休業します',
                  '休日は公式Line、サイト内で連絡します'],
            icon: 'fa-calendar-alt',
          },
          {
            title: '時間: 5時〜24時',
            text: ['営業時間は長めです', 
                  '予約は１時間単位で行えます',
                  '短時間で集中トレーニングがおすすめです'],
            icon: 'fa-user-clock',
          },
        ],
        pageTitle: '営業時間と料金'
      }
    },
  }
</script>

<style scoped>
</style>