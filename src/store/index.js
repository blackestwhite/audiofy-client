import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    songs:[
      {id: 0,title:"Dela", by:"M.Reza Shajarian", picURL:"data:image/jpeg;base64,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", hlsURL:"https://s2rj.myren.xyz/b/9121010000/000/outputlist.m3u8"},
      {id: 1,title:"Zemestan Ast", by:"M.Reza Shajarian", picURL:"https://musico.ir/wp-content/uploads/2019/08/%DB%8C%D8%B3.jpg", hlsURL:"https://s2rj.myren.xyz/b/9121010000/001/outputlist.m3u8"},
      {id: 2,title:"Doosh Doosh", by:"M.Reza Shajarian", picURL:"https://music-fa.com/wp-content/uploads/2020/10/MohammadReza-Shajaryan-Doosh-Doosh-Music-fa.com_.jpg", hlsURL:"https://s2rj.myren.xyz/b/9121010000/002/outputlist.m3u8"},
      {id: 3,title:"Dar Khial", by:"M.Reza Shajarian", picURL:"https://music-fa.com/wp-content/uploads/2020/10/MohammadReza-Shajaryan-Doosh-Doosh-Music-fa.com_.jpg", hlsURL:"https://s2rj.myren.xyz/b/9121010000/003/outputlist.m3u8"},
      {id: 4,title:"Bebar Ey Baroon", by:"M.Reza Shajarian", picURL:"https://music-fa.com/wp-content/uploads/2020/10/MohammadReza-Shajaryan-Doosh-Doosh-Music-fa.com_.jpg", hlsURL:"https://s2rj.myren.xyz/b/9121010000/004/outputlist.m3u8"},
      {id: 5,title:"Delroba", by:"M.Reza Shajarian", picURL:"https://music-fa.com/wp-content/uploads/2020/10/MohammadReza-Shajaryan-Doosh-Doosh-Music-fa.com_.jpg", hlsURL:"https://s2rj.myren.xyz/b/9121010000/005/outputlist.m3u8"},
    ],
    song: {},
    profile: {}
  },
  mutations: {
    setSong (state, song) {
      state.song = song;
    },

    setProfile(state){
      async function fetchurl(){
        var res = await makeRequest("GET", "http://localhost:4433/api/v1/getProfile")
        res = JSON.parse(res)
        state.profile = res
      }
      fetchurl();
    }
  }
})

function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.withCredentials = true;
      xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
              resolve(xhr.response);
          } else {
              reject({
                  status: this.status,
                  statusText: xhr.statusText
              });
          }
      };
      xhr.onerror = function () {
          reject({
              status: this.status,
              statusText: xhr.statusText
          });
      };
      xhr.send();
  });
}

export default store;