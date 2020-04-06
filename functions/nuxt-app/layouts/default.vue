<template>
  <v-app dark>
    <!-- ナビゲーションバー中身 -->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
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
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>

<!-- メイン -->
    <v-content>
      <v-container>
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
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'HOME',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'アクセス',
          to: '/access'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '器具の使い方',
          to: '/howtouse'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'フィットネスへの入り方',
          to: '/enter'
        }
      ],
      right: true,
      title: 'Vuetify.js'
    }
  }
}
</script>
