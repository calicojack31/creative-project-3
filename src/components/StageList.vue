<template>
<div class="wrapper container">
  <div class="stages row">
    <div class="stage" v-for="stage in stages" :key="stage.id">
      <div class="info">
        <h1>{{stage.name}}</h1>
        <p>{{stage.country}}</p>
      </div>
      <div class="image">
        <img :src="'/images/stages/'+stage.image">
      </div>
      <div class="price"><!--Change name-->
        <!--<h2>{{stage.price}}</h2>-->
        <!-- GOING TO TRY TO ADD EVENT HANDLER HERE -->
        <!--NEED TO CHANGE THE NAME OF CART-->
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
      //this.$root.$data.cart.push(id);
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

/*
img {
  max-width: 100%;
  max-height: 100%;
}
*/

.stage .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
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

button {
  height: 100%;
  width: 100%;
  background: #000;
  color: white;
  border: none;
  display: inline-block;
}

.auto {
  margin-left: auto;
}
</style>
