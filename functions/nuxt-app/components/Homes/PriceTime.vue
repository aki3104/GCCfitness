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
            {{ item.text }}
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
    },
    data () {
      return {
         items: [
           {
             title: '利用料: 3,500／月',
             text: '年会費、登録料などはかからず、月々使用料3,500円で使用することができます。１回飲み会を我慢する代わりに１ヶ月のジムを体験してみませんか',
             icon: 'fa-money-bill-wave',
           },
          {
            title: '営業日：不定休',
            text: '休日は予約カレンダー、公式ラインでお知らせします。',
            icon: 'fa-calendar-alt',
          },
          {
            title: '時間: 5時〜24時',
            text: '無人ということもあり、営業時間は長めです。自分の都合が良い時間に予約いただけたらと思います',
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