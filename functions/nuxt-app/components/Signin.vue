<template>
  <v-container text-xs-center>
    <v-row justify="center">
      <v-text>
        <h1>ログインする</h1>
      </v-text>
    </v-row>

    <v-row justify="center">
      <v-col>
        <v-card
        max-width="344"
        min-height="450"
        class="mx-auto">
          <v-card-text>
            <v-form>
               <v-text-field :value="user.email" @input="updateParams($event, 'cityNumber')" label="市町村番号5ケタ（下呂市）"></v-text-field>
               <v-text-field :value="user.email" @input="updateParams($event, 'staffNumber')" label="職員番号"></v-text-field>
               <v-text-field type="password" :value="user.password" @input="updateParams($event, 'password')" label="パスワード"></v-text-field>
               <div class="text-center">
                 <!-- 後でusers#createに繋がるactionをuser.jsに作成 -->
                <v-btn
                :to="{ name: 'singin' }"
                color="info"
                @click="signin(users[0], $router.push({name: 'signinHome'}))"
                >ログイン</v-btn>
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