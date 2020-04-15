import firebase from "~/plugins/firebase.js"

export default {
  namespaced: true,

  state: {
    users: [{}],
    signined: false,
    singinUser:{}
  },

  getters: {
    users(state) {
      return state.users;
    },
    signined(state) {
      return state.signined;
    },
  },
  
  mutations: {
    // 各フォームの値をVuexストアに渡す
    update(state, { value, keyName }) {
      const user = state.users[0];
      user[keyName] = value;
    },
    // ログイン状態の管理
    signinSession(state, payload){
      if (payload) {
        state.signined = true
      } else {
        state.signined = false
      }
    },

    singinUser(state, payload){
      if (payload) {
        state.singinUser = payload
      } else {
        state.singinUser = {}
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
     console.log('signin')
     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
     .then(value=> {
       this.$router.push('/signinHome')
      //  context.commit('singinUser', value.user)
       context.dispatch('signinSession')
        })
        .catch(error =>  {
          alert(error.message)
        })
      },

      signinSession(context){
        console.log('out')
        firebase.auth().onAuthStateChanged(user => {
          console.log('in')
          console.log(user)
          context.commit('signinSession', user);
          context.commit('singinUser', user);
        });
      },
  

    // users#updateと紐づく
    update(context) {
      const user = context.state.users[0];
      firebase.auth().currentUser.updateProfile({
        displayName: user.name,
        email: user.email,
        password: user.password
      })
      .then(value => {
        console.log(value)
        this.$router.push('/signinHome')
        context.commit('update')
      })
      .catch(error => {
        console.error(error);
      });
    },

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