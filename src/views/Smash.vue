<template>
<div class="wrapper" v-if="$root.$data.combatants.length > 1">
  <div class="fighters">
    <div class="fighter" v-for="item in $root.$data.combatants" :key="item"><!--EARLIER THE KEY WAS $ROOT.$DATA.CART[ITEM]-->
      <div class="info">
        <h1 class="row">{{getFighter(item).name.toUpperCase()}}</h1>
        <h2 class="row">{{getFighter(item).country}}</h2>
        <h2 class="row">{{getFighter(item).price}}</h2>
      </div>
      <div class="image row">
        <img :src="'/images/fighters/'+getFighter(item).image">
      </div>
      <div class="remove-fighter">
        <button class="auto" @click="removeFromCombatants($root.$data.combatants.indexOf(item))">Remove</button>
      </div>
    </div>
  </div>
  <div class="wrapper container" v-if="$root.$data.stageSelection != ''">
    <div class="stage">
      <div class="info">
        <h1 class="row">{{getStage($root.$data.stageSelection).name}}</h1>
        <h2 class="row">{{getStage($root.$data.stageSelection).description}}</h2>
      </div>
      <div class="image">
        <img :src="'/images/stages/'+getStage($root.$data.stageSelection).image">
      </div>
    </div>

    <div>
      <button class="auto" id="start-battle" @click="chooseWinner()"><em>FIGHT!</em></button>
      <div id="battle-results">
      </div>
    </div>

  </div>
  <div class="wrapper no-stage" v-else>
  <h1>You must select a stage!</h1>
  </div>
</div>
<div class="wrapper not-enough-fighters" v-else>
  <h1>You must select at least two fighters!</h1>
</div>

</template>

<script>
export default {
  name: 'UserCombatants',
  props: {
    fighters: Array,
    stages: Array
  },
  methods: {
    addToCombatants(id) {
      this.$root.$data.combatants.push(id);
    },
    getFighter(id) {
      for (let i = 0; i < this.$root.$data.fighters.length; i++) {
        if (this.$root.$data.fighters[i].id === id) {
          return this.$root.fighters[i];
        }
      }
    },
    removeFromCombatants(index) {
      this.$root.$data.combatants.splice(index, 1);
    },
    getAmount(id) {
      let numItems = 0;
      for (let i = 0; i < this.$root.$data.combatants.length; i++) {
        if (id == this.getFighter(this.$root.$data.combatants[i]).id) {
          numItems++;
        }
      }
      return numItems;
    },

    chooseWinner() {
      let results = "";
      results += "<h1>";
      let winnerIndex = Math.floor(Math.random() * this.$root.$data.combatants.length);
      results += this.getFighter(this.$root.$data.combatants[winnerIndex]).name;
      results += " won a decisive victory!"
      results += "</h1>";
      document.getElementById("battle-results").innerHTML = results;

    },

    getStage(id) {
      for (let i = 0; i < this.$root.$data.stages.length; i++) {
        if (this.$root.$data.stages[i].id === id) {
          return this.$root.stages[i];
        }
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/*Imporant to get stage to go beneath*/
.wrapper {
  flex-direction: column;
}

.not-enough-fighters {
  padding-bottom: 300px;
}

.amount {
  margin-top: -45px;
  text-align: left;
}

.fighters {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.fighter {
  margin: 10px;
  margin-top: 50px;
  width: 300px;
  border: 2px solid #333;
}

.fighter img {
  border: 2px solid #333;
  height: 375px;
  width: 300px;
  object-fit: cover;
}

.fighter .image {
  display: flex;
  justify-content: center;
  /*margin-bottom: 5px;*/
}

.stage {
  margin: 10px;
  margin-top: 50px;
  width: 400px;
  border: 2px solid #333;
}

.stage img {
  border: 2px solid #333;
  height: 400px;
  width: 400px;
  object-fit: cover;
}

.info {
  background: black;
  color: white;
  padding: 0px 10px;
  height: 80px;
}

.info h1 {
  font-size: 2em;
  justify-content: center;
}

.info h2 {
  font-size: 1em;
  justify-content: center;
  margin-top: -8px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

.price h2 {
  margin-top: -5px;
}

.remove-figher {
  display: flex;
}

button {
  height: 100%;
  background: #bf1b1b;
  color: white;
  width: 100%;
  border: none;
  margin-top: -8px;
  /*border: 5px solid blue;*/
}

button:hover {
  background-color: #c24e4e;
}

button:active {
  background-color: #ff2b2b;
}


#start-battle {
  height: 100px;
  width: 500px;
  margin: 25px;
  background: #2a6942;
  font-size: 3em;
}

#start-battle:hover {
  background: #5d9974;
}

#start-battle:active {
  background: #02c94e;
}


.auto {
  margin-left: auto;
}
</style>
