<template>
<div class="wrapper container">
  <div class="stages row col-lg">
    <div class="stage" v-for="stage in stages" :key="stage.id">
      <div class="info">
        <h1 class="row">{{stage.name.toUpperCase()}}</h1>
        <h2 class="row">{{stage.description}}</h2>
      </div>
      <div class="image">
        <img :src="'/images/stages/'+stage.image">
      </div>
      <div class="description">
        <button class="auto" @click="addToBattle(stage.id)">Select</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'stageList',
  props: {
    stages: Array
  },//HERE ON OUT I WROTE
  methods: {
    addToBattle(id) {
      this.$root.$data.stageSelection = id;
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

.stages {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

.stage .image {
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


.description {
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
