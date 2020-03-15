<template>
  <!--might need wrapper here-->
  <!--
<div id="menu">
  <div id="brand" class="row">
    <a href="/" class="router-link-active">
      <img src="/images/smash-logo-transparent.png">
    </a>
  </div>
  <div id="options" class="row">
    <a href="/fighters" class="router-link-exact-active router-link-active">
      <div class="menu-item col-sm">
        <img src="/images/head-icon.png">
        <p>Fighters</p>
      </div>
    </a>
    <a href="/stages" class="">
      <div class="menu-item col-sm">
        <img src="/images/stages-icon.png">
        <p>Stages</p>
      </div>
    </a>
    <a href="/smash" class="">
      <div class="menu-item col-sm">
        <img src="/images/smash-ball.png">
        <p>Smash</p>
      </div>
    </a>
  </div>
</div>
-->
<!--
data-v-fae5bece=""
-->

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
</style>
