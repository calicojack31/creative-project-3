<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <StageList :stages="stages" />
  <h1 class="allow-footer"></h1>
</div>
</template>

<script>
import StageList from "../components/StageList.vue"
export default {
  name: 'Home',
  components: {
    StageList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    stages() {
      return this.$root.$data.stages.filter(stage => stage.name.toLowerCase().search(this.searchText) >= 0);
    }
  },
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
