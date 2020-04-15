<template>
  <v-app>
    <!-- ナビゲーションバー中身 -->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      app
    >
        <v-list v-if='signinedSecction'>
          <v-list-item
            v-for="(item, i) in siginItems"
            :key="i"
            :to="item.to"
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

        <v-list v-else='signinedSecction'>
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

    <!-- ヘッダー -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title"></v-toolbar-title>

      <v-spacer />
      <v-btn
      icon v-if='signinedSecction'
      @click='signout'>
        <v-icon>fa-sign-out-alt</v-icon>
      </v-btn>

    </v-app-bar>

<!-- メイン -->
    <v-content>
      <v-container
       fluid fill-height
       pa-0
       >
        <nuxt />
      </v-container>
    </v-content>

    <!-- footer -->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
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
          to: '/reserve'
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
        },
        {
          icon: 'fa-laptop-house',
          title: 'フィットネスへの入り方',
          to: '/enter'
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
    }
  },
  methods: {
    ...mapActions('user', [
      'signout',
    ]),
  }
}

</script>


<style scoped>

</style>

