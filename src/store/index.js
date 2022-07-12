import { createStore } from 'vuex'

export default createStore({
  state: {
    recordScreen: false,
    recordCamera: false,
    recordMic: false,
    show: false,
    recordings: 
    [
      {
        id: '1',
        image: "https://thumbs.dreamstime.com/b/sun-set-pet-my-named-ram-was-random-pic-our-routine-walks-sunset-time-179708846.jpg",
        title: "Getting it right the first time",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        views: "1,000",
        size: "1.5GB",
        last_modified: "1 day ago",
      },
      {
        id: '2',
        image: "https://image.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg",
        title: "This is the beginning of a new life",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        views: "2,900",
        size: "1GB",
        last_modified: "27 day ago",
      },
      {
        id: '3',
        image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        title: "Thanks be to the Lord",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        views: "40",
        size: "943KB",
        last_modified: "3 months ago",
      },
      {
        id: '4',
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        title: "Sky is the limit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        views: "10,000",
        size: "1.5GB",
        last_modified: "1 year ago",
      },
      {
        id: '5',
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        title: "Shine bright like a star",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        views: "500",
        size: "328KB",
        last_modified: "1 week ago",
      },
      {
        id: '6',
        image: "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg?w=640",
        title: "Freedom is a lie",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        views: "7,000",
        size: "1.5GB",
        last_modified: "3 weeks ago",
      },
      {
        id: '7',
        image: "https://www.computerhope.com/jargon/r/random-dice.jpg",
        title: "Random choices",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        views: "1,000,000",
        size: "924KB",
        last_modified: "24 hours ago",
      },
    ],
  },
  getters: {
  },
  mutations: {
    closeModal(state) {
      state.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },

    openModal(state) {
      state.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    grantPermission(state){
      state.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");

      navigator.mediaDevices.getUserMedia({video: state.recordCamera, audio: state.recordMic})
        .then( stream => {
          window.localStream = stream; // A
          const video = document.querySelector("video");
          video.srcObject = stream; // B
          window.localAudio.autoplay = true; // C
      }).catch( err => {
          console.log("you got an error:" + err)
      });

      if(state.recordScreen == true){
        navigator.mediaDevices.getDisplayMedia({video: state.recordCamera, audio: state.recordMic})
          .then( stream => stream.getTracks())
          .catch(err => { console.error("Error:" + err); return null; });
        }
    },
    stopRecording(state){
      state.recordCamera = false;
    }
  },
  actions: {
    closeModal({ commit }) {
      commit("closeModal");
    },

    openModal({ commit }) {
      commit("openModal");
    },

    grantPermission({ commit }) {
      commit("grantPermission");
    },
    stopRecording({ commit }) {
      commit("stopRecording");
    }
  },
  modules: {
  }
})
