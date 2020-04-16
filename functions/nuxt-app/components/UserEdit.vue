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
                <v-text-field
                :placeholder="tosigninUser.name"
                @input="updateParams($event, 'name')"
                label="ユーザー名">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                :placeholder="tosigninUser.email"
                @input="updateParams($event, 'email')"
                label="メールアドレス">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                @input="updateParams($event, 'password')"
                type="password"
                label="パスワード">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="info" @click = updateFirebase(user) dark>更新</v-btn>
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
    }
  },
  created () {
  },
  methods: {
    ...mapMutations('user', [
      'update',
    ]),
    ...mapActions('user', [
      'updateFirebase'
    ]),
     updateParams(event, keyName) {
      this.update({ value: event, keyName })
    },
  },
  computed: {
    ...mapGetters ('user', [
     'users', 'signinUser'
    ]),
    user() {
      return this.users[0]
    },
    tosigninUser() {
      return this.signinUser
    },
  },

}
</script>