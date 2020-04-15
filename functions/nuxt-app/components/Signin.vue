<template>
  <v-container text-xs-center>
    <v-row justify="center">
      <v-col>
        <h1>ログイン</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col>
        <v-card
        max-width="344"
        min-height="375"
        class="mx-auto">
          <v-card-text>
            <v-form>
               <v-text-field
               :value="user.email"
               @input="updateParams($event, 'email')"
               prepend-icon='fa-envelope'
               label="メールアドレス">
               </v-text-field>
               <v-text-field
               type="password"
               :value="user.password"
               @input="updateParams($event, 'password')"
               prepend-icon='fa-key'
               label="パスワード">
               </v-text-field>
               <div class="text-center">
                 <!-- 後でusers#createに繋がるactionをuser.jsに作成 -->
                <v-btn color="info" @click="signin(user)">ログイン</v-btn>
               </div>
            </v-form>

              <v-card-actions>
                <v-divider/>
              </v-card-actions>
              
              <v-card-text
                class="text-center"
              >
                会員登録はお済みですか？
              </v-card-text>
              <v-card-actions>
                <v-btn :to="{ name: 'signup' }" class="mx-auto px-4">新規登録する</v-btn>
              </v-card-actions>
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