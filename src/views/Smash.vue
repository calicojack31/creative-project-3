<template>
<div class="wrapper" v-if="$root.$data.combatants.length > 1">
  <div class="fighters">
    <div class="fighter" v-for="item in $root.$data.combatants" :key="item"><!--EARLIER THE KEY WAS $ROOT.$DATA.CART[ITEM]-->
      <div class="info">
        <h1>{{getFighter(item).name}}</h1>
        <p>{{getFighter(item).country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/fighters/'+getFighter(item).image">
      </div>
      <div class="price">
        <h2>{{getFighter(item).price}}</h2>
        <button class="auto" @click="removeFromCombatants($root.$data.combatants.indexOf(item))">Remove</button>
      </div>
      <div class="amount">
        <h3>{{getAmount(item)}} in combatants</h3>
      </div>
    </div>
  </div>
  <div class="wrapper" v-if="$root.$data.stageSelection != ''">
    <div class="stage">
      <div class="info">
        <h1>{{getStage($root.$data.stageSelection).name}}</h1>
        <p>{{getStage($root.$data.stageSelection).country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/stages/'+getStage($root.$data.stageSelection).image">
      </div>
    </div>

    <div>
      <button class="auto" id="start-battle" @click="chooseWinner()">Fight!</button>
      <div id="battle-results">
      </div>
      <h1 class="allow-footer"></h1>
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

.allow-footer {
  padding-bottom: 170px;
}


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
  width: 200px;
}

.fighter img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.fighter .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
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
  background: #617a6b;
  color: #000;
  border: 2px solid #333;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
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

button {
  height: 50px;
  background: #a60202;
  color: white;
  border: none;
}

#start-battle {
  height: 100px;
  width: 500px;
  margin: 25px;
  background: green;
  border: 5px solid red;
}

.auto {
  margin-left: auto;
}
</style>
