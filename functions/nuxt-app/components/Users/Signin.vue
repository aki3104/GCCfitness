<template>
  <v-container text-xs-center>
    <v-row justify="center">
      <h1>ログイン</h1>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card
        max-width="344"
        min-height="250"
        class="mx-auto">
          <v-card-text>
            <v-form>
              <v-text-field
                :value="user.email"
                @input="updateParams($event, 'email')"
                prepend-icon='fa-envelope'
                label="メールアドレス"
              >
              </v-text-field>
              <v-text-field
                type="password"
                :value="user.password"
                @input="updateParams($event, 'password')"
                prepend-icon='fa-key'
                label="パスワード"
              >
                </v-text-field>
                
                <div class="text-center mb-5">
                <!-- 後でusers#createに繋がるactionをuser.jsに作成 -->
                <v-btn color="info" @click="signin(user)">ログイン</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'signin',
  computed: {
    ...mapGetters('user', [
      'users',
    ]),
    user() {
      return this.users[0]
    }
  },
  methods: {
    ...mapMutations('user', [
      'update',
    ]),
    ...mapActions('user', [
      'signin',
    ]),
    updateParams(event, keyName) {
      this.update({ value: event, keyName })
    },
  },
}
</script>