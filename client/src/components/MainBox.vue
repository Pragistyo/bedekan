<template lang="html">
  <div class="container">
    <div class="col-md-2">
      <Player1 v-if="player.length > 0" :dataplayer="player[0]"/>
    </div>
    <div class="col-md-8">
      <Winner v-if="winner.length === 1" :datapemenang="winner" />
      <Question v-else :unfreeze="unfreeze" :pertanyaan="activeQuestion[0]" @sendscore="sendscore"/>

    </div>
    <div class="col-md-2">
      <Player2 v-if="player.length > 1" :dataplayer="player[1]"/>
    </div>
  </div>
</template>

<script>
import Player1 from '@/components/Player1'
import Player2 from '@/components/Player2'
import Question from '@/components/Question'
import Winner from '@/components/Winner'
import * as firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBru2jO4ZeqnvuTrFIF_ldOPH9C2wE-6kE',
  authDomain: 'tebakan-4453b.firebaseapp.com',
  databaseURL: 'https://tebakan-4453b.firebaseio.com',
  projectId: 'tebakan-4453b',
  storageBucket: 'tebakan-4453b.appspot.com',
  messagingSenderId: '815331228166'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
const activeQuestionRef = db.ref('activeQuestion')
const playerRef = db.ref('room1')
const indexRef = db.ref('index')
const counterRef = db.ref('counter')
const winnerRef = db.ref('winner')

export default {
  data () {
    return {
      questions: [
        // {question: 'ibukota jakarta?', choice: ['jakarta', 'bandung'], answer: 'jakarta'}
      ],
      finish: false,
      freeze: false,
      pemenang: ''
      // randomQuestion: null
    }
  },
  firebase: {
    activeQuestion: activeQuestionRef,
    player: playerRef,
    indexquestion: indexRef,
    counter: counterRef,
    winner: winnerRef
  },
  components: {
    Player1,
    Player2,
    Question,
    Winner
  },
  // watch: {
  //   counter () {
  //     console.log('jalanin watch')
  //     // if (this.counter === 2) {
  //     //   this.setActiveQuestion()
  //     // }
  //   }
  // },
  methods: {
    getQuestions () {
      this.$http.get('/question')
      .then(result => {
        console.log(result)
        this.questions = result.data
        this.setActiveQuestion()
      })
      .catch(err => console.log(err))
    },
    setActiveQuestion () {
      this.unfreeze = true
      var i = this.indexquestion[0]['.value']
      console.log(i)
      console.log(typeof i)
      this.$firebaseRefs.activeQuestion.set({question: this.questions[i]})
      i++
      db.ref('index').set({idx: i})
      db.ref('counter').set({counter: 0})
    },
    getUsername () {
      var person = prompt('Please enter your name', 'Username')
      console.log(person)
      if (person != null) {
        localStorage.setItem('username', person)
        localStorage.setItem('score', 0)
        db.ref('room1/player' + person).set({playername: person, score: 0})
      } else {
        location.reload()
      }
    },
    sendscore (nilai) {
      var scorenow = parseInt(localStorage.getItem('score')) + nilai
      localStorage.setItem('score', scorenow)
      db.ref('room1/player' + localStorage.getItem('username'))
      .set({playername: localStorage.getItem('username'), score: scorenow})
      var counterplayer = this.counter[0]['.value'] + 1
      db.ref('counter').set({counter: counterplayer})
      if (nilai > 0) {
        this.setActiveQuestion()
        if (this.indexquestion[0]['.value'] === this.questions.length) {
          this.getWinner()
          // db.ref('winner').set({winner: })
        }
      }
        // this.freeze = true
      if (this.counter[0]['.value'] === 2) {
        if (this.indexquestion[0]['.value'] === this.questions.length) {
          this.getWinner()
        } else {
          this.setActiveQuestion()
        }
      }
    },
    getWinner () {
      // var pemenang
      if (this.player[0].score > this.player[1].score) {
        this.pemenang = this.player[0].playername
      } else if (this.player[0].score < this.player[1].score) {
        this.pemenang = this.player[1].playername
      } else {
        this.pemenang = 'DRAW'
      }
      // winner[0].['.value']
      db.ref('winner').set({winner: this.pemenang})
      // this.pemenang = this.winner[0]['.value']

      this.finish = true
    },
    setIndexQ () {
      db.ref('index').set({idx: 0})
    }
  },
  created () {
    this.getQuestions()
    this.getUsername()
    this.setIndexQ()
    db.ref('winner').remove()
  },
  computed: {
    //  finish () {
    //    if (this.indexquestion[0]['.value'] == 16 && (this.counter[0]['.value'] == 2 || ))
    //  }
  }

}
</script>

<style lang="css">
</style>
