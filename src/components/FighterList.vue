<template>
<div class="wrapper container">
  <div class="fighters row col-lg">
    <div class="fighter" v-for="fighter in fighters" :key="fighter.id">
      <div class="info">
        <h1 class="row">{{fighter.name.toUpperCase()}}</h1>
        <h2 class="row">{{fighter.origin}}</h2>
        <h2 class="row">{{fighter.description}}</h2>
      </div>
      <div class="image row">
        <img :src="'/images/fighters/'+fighter.image">
      </div>
      <div class="add-fighter">
        <button class="auto" @click="addToCombatants(fighter.id)">Add to Match</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FighterList',
  props: {
    fighters: Array
  },//HERE ON OUT I WROTE
  methods: {
    addToCombatants(id) {
      this.$root.$data.combatants.push(id);
    }
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 5px;
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

.add-fighter {
  display: flex;
}

button {
  height: 100%;
  background: black;
  color: white;
  width: 100%;
  border: none;
  margin-top: -8px;
}

button:hover {
  background-color: #71bf87;
}

button:active {
  background-color: #068a2b;
}

.auto {
  margin-left: auto;
}
</style>
