<template>
  <v-container text-xs-center>
    <v-row justify-center>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field :value="user.name" @input="updateParams($event, 'name')" label="ユーザー名"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field :value="user.email" @input="updateParams($event, 'email')" label="メールアドレス"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field type="password" :value="user.password" @input="updateParams($event, 'password')" label="パスワード"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info" @click = update(user) dark>更新</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions,mapMutations,mapGetters } from 'vuex'

export default {
  components: {
  },
  data() {
    return {
      dialog: false,
      loading: true,
    }
  },
  created () {
  },
    methods: {
      ...mapMutations('user', [
        'update',
      ]),
      //store内のステートの情報を取得
      updateParams(event, keyName) {
        this.update({ value: event, keyName })
      },
    },
    computed: {
      ...mapGetters ('user', [
        'users',
      ]),
      user() {
        return this.users[0]
      }
    },
}
</script>