<template>
  <v-container text-xs-center>
    <v-row justify="center">
      <v-col>
        <h1>新規登録</h1>
      </v-col>
    </v-row>

     <v-row justify="center">
      <v-col>
        <v-card
        max-width="344"
        min-height="450"
        class="mx-auto">
          <v-card-text>
            <v-form>
               <v-text-field :value="user.email" @input="updateParams($event, 'staffNumber')" label="職員番号"></v-text-field>
               <v-text-field :value="user.name" @input="updateParams($event, 'name')" label="氏名"></v-text-field>
               <v-text-field :value="user.email" @input="updateParams($event, 'email')" label="メールアドレス"></v-text-field>
               <v-text-field type="password" :value="user.password" @input="updateParams($event, 'password')" label="パスワード"></v-text-field>
               <v-text-field type="password" :value="user.password_confirmation" @input="updateParams($event, 'password_confirmation')" label="パスワード(確認)"></v-text-field>
               <div class="text-center">
                 <!-- 後でusers#createに繋がるactionをuser.jsに作成 -->
                 <v-btn color="info" class="ml-2" @click="create(user, $router.push({ name: 'index' }))">登録</v-btn>
                 <!-- <v-btn @click="$router.push({ name: 'TaskIndex'})">タスク一覧</v-btn> -->
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
                <v-btn :to="{ name: 'index' }" class="mx-auto px-4">ログインする</v-btn>
              </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    name: 'Top',
    computed: {
      ...mapGetters ('user', [
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
        'create',
      ]),
      //store内のステートの情報を取得
      updateParams(event, keyName) {
        this.update({ value: event, keyName })
      },
    }
  }
</script>

<style>
  h1 {
    text-align: center;
  }
</style>