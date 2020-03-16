<template>
<div id="app">
  <div id="menu">
    <div id="brand" class="row">
      <router-link to="/">
        <img src="/images/smash-logo-transparent.png">
      </router-link>
    </div>
    <div id="options" class="row">
      <router-link to="/fighters">
        <div class="menu-item col-sm">
          <img src="/images/head-icon.png">
          <p>Fighters</p>
        </div>
      </router-link>
      <router-link to="/stages">
        <div class="menu-item col-sm">
          <img src="/images/stages-icon.png">
          <p>Stages</p>
        </div>
      </router-link>
      <router-link to="/smash">
        <div class="menu-item col-sm">
          <img src="/images/smash-ball.png">
          <p>Smash</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />


<h1 class="allow-footer"></h1>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <h5 class="footer-heading">Nintendo, please don't sue me.</h5>
          <p class="footer-text">I'm a huge fan of Nintendo and the Super Smash Bros. games, and I made this website for a school project. It was an educational labor of love, which I think falls under
             at least two fair use clauses. Lawyers, correct me if I'm wrong (I probably am). Sakurai, I love you. <a href="https://github.com/calicojack31/creative-project-3.git">GitHub Repository Here</a>
          </p>
        </div>
      </div>
    </div>
  </footer>

<!--
  <footer>
    <div>
      <div>
        <div>
        <h5 class="footer-heading">Nintendo, please don't sue me.</h5>
        <p class="footer-text">I'm a huge fan of Nintendo and the Super Smash Bros. games, and I made this website for a school project. It was an educational labor of love, which I think falls under
           at least two fair use clauses. Lawyers, correct me if I'm wrong (I probably am). Sakurai, I love you.
        </p>
          <div>
            <a href="https://github.com/calicojack31/creative-project-2.git">GitHub Repository Here</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
-->

</div>







</template>

<style>


@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

p,
h1,
h2,
h3,
h4,
h5 {
  font-family: 'Oswald', sans-serif;
  margin-left: 100px;
  margin-right: 100px;
}

.allow-footer {
  padding-bottom: 220px;
}

.fa-search {
  background-color: white;
}/*Hear so the magnifying glass portion is not transparent*/

* {
  box-sizing: border-box;
}

html {
  position: relative;
  min-height: 100%;
  /*margin-left: 100px;
  margin-right: 100px;*/
}

/*
body {
  margin-left: 50px;
  margin-right: 50px;
}*/

footer {
  position: absolute;
  bottom: 0;/*it being -130 fixes it*/
  width: 100%;
  /*height: 130px;*/
  text-align: center;
  margin-top: 10px;
}


/*
#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}
*/

#menu {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

#menu a {
  color: #0018d1;
}

#brand {
  /*grid-area: brand;*/
  /*display: flex;*/
  justify-content: center;
}

#brand img {
  height: 250px;
  justify-content: center;
}

#options {
  /*grid-area: side;*/
  display: flex;
  justify-content: center;
  margin-top: -40px;
}

#options img {
  width: 50px;
  text-align: center;
  justify-content: center;
}

.menu-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

/*
body {
  background-image: url("/images/take-three.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
*/

a {
  color: #0018d1;
}

html::after {
  content: "";
  background: url(/images/take-three.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  opacity: 0.25;
top: 0;
left: 0;
bottom: 0;
right: 0;
position: absolute;
z-index: -1;
}

</style>
