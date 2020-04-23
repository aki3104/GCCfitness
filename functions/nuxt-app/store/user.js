import firebase from "~/plugins/firebase.js"

export default {
  namespaced: true,

  state: {
    users: [{}],
    signined: false,
    signinUser: {}
  },

  getters: {
    users(state) {
      return state.users;
    },
    signined(state) {
      return state.signined;
    },
    signinUser(state) {
      console.log(state.signinUser)
      return state.signinUser;
    },
  },
  
  mutations: {
    // 各フォームの値をVuexストアに渡す
    update(state, { value, keyName }) {
      const user = state.users[0];
      user[keyName] = value;
    },
    // フォーム画面の初期化処理、ログイン状態の管理,ログインユーザー情報を格納
    signinSession(state, payload){
      if (payload) {
        console.log('session-true')
        state.users = [{}]
        state.signined = true
        state.signinUser = {
          name: payload.displayName,
          email: payload.email,
        }
        console.log(state.signinUser)
      } else {
        console.log('session-false')
        state.signined = false
        state.signinUser = {}
      }
    },

    //stateのuserを削除
    deleteUsers(state) {
      state.users = [{}]
    }
  },

  actions: {
   
    // サインアップを行う
    create(context) {
      // フォーム入力値を参照
      const user = context.state.users[0];
      // email,passwordでプロフィールを作成
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(value=>{
        // プロフィールにユーザー名を追加
        firebase.auth().currentUser.updateProfile({
          displayName: user.name
        })
        .then(() => {
          this.$router.push('/signinHome')
          context.dispatch('signinSession')
        })
      })
      .catch(error => {
        alert(error.message)
      })
    },
    //signinを行う
   signin(context, user) {
     console.log(user)
     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
     .then(value=> {
       this.$router.push('/signinHome')
       context.dispatch('signinSession' ,value)
        })
        .catch(error =>  {
          alert(error.message)
        })
      },

      signinSession(context){
        //ログインユーザーを取得
        firebase.auth().onAuthStateChanged(user => {
          context.commit('signinSession', user);
        });
      },

    // オーセンティケーションの更新
    updateFirebase(context) {
      const user = context.state.users[0];
      console.log(user)
      firebase.auth().currentUser.updateProfile({
        displayName: user.name,
        email: user.email,
        password: user.password
      })
      .then(value => {
        console.log()
        this.$router.push('/signinHome')
        context.commit('signinSession', user);
      })
      .catch(error => {
        console.error(error);
      });
    },
      // サインアウト
    signout(context, payload){
      firebase.auth().signOut()
      .then(()=> {
        context.dispatch('signinSession')
        context.commit('deleteUsers')
        this.$router.push('/')
      })
      .catch(function(error) {
        console.error(error);
      });
    }
  },
};