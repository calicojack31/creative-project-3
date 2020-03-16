<template>

<div class="welcome-text">
  <h1>Welcome to Super Smash Brothers Vue!</h1>
  <h3>Select willing combatants from the Fighters page,
    a battleground from the Stages page,
    and then hop on over to the Smash page to see who comes out victorious!
    Outcomes are determined randomly, and you'll just have to imagine the battle.</h3>
  </div>

</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.welcome-text {
align-content: center;
text-align: center;
}

</style>
