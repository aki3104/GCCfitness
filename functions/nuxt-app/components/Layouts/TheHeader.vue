<template>
  <section>
    <!-- ヘッダー -->
    <v-app-bar
      :clipped-left="clipped"
      :fixed="true"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>GCC</v-toolbar-title>

      <v-spacer />
      <v-btn
      icon v-if='signinedSecction'
      @click='signout'>
        <v-icon>fa-sign-out-alt</v-icon>
      </v-btn>

    </v-app-bar>
  <!-- ナビゲーションバー中身 -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
    >
      <v-list v-if='signinedSecction'>
        <v-list-item
          v-for="(item, i) in siginItems"
          :key="i"
          :to="item.to"
          :href="item.href"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list v-else>
        <v-list-item
          :to="beforeSignin[0].to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon small>{{ beforeSignin[0].icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ beforeSignin[0].title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
import { mapGetters,mapActions,mapMutations } from 'vuex'

export default {

  data () {
    return {
      drawer: false,
      clipped: true,
      siginItems: [
        {
          icon: 'fa-home',
          title: 'HOME',
          to: 'signinHome'
        },
        {
          icon: 'fa-user-circle',
          title: 'プロフィール',
          to: '/userEdit'
        },
        {
          icon: 'fa-calendar-alt',
          title: '予約する',
          href: "https://reserva.be/gccfit/reserve?mode=service_staff&search_evt_no=ebeJwzNrA0MAUAAwQBAg"
        },
        {
          icon: 'fa-map-marked-alt',
          title: 'アクセス',
          to: '/access'
        },
        {
          icon: 'fa-biking',
          title: '器具の使い方',
          to: '/howtouse'
        }
      ],
      beforeSignin: [
        {
          icon: 'mdi-apps',
          title: 'ログイン',
          to: '/'
        }
        ],
      right: true,
      title: 'GCCフィットネス'
    }
  },
  computed: {
    ...mapGetters ('user', [
      'signined',
    ]),
    signinedSecction() {
      return this.signined;
    },
    // drawerSecction: {
    //   get(){
    //     console.log('get')
    //     return this.sessionSideMenu;
    //   },
    //   set(){
    //     console.log('set')
    //     this.drawerSideMenu()
    //   }
    // },
    ...mapGetters ('session', [
      'sessionSideMenu',
    ]),

  },
  methods: {
    ...mapActions('user', [
      'signout',
    ]),
    // ...mapMutations('session', [
    //   console.log('setside'),
    //   'drawerSideMenu',
    // ]),
  }
}

</script>