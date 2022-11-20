<script setup>
  
</script>
    
<template>
 <div class="column">
    <div class="row">
      <div class="column ep">
        <div class="content">
          <a href="https://ceciliethielsen.dk/projekt-6/" target="_blank">
            <img src="@/assets/wiser1.png" alt="Schneider Electric - Wiser smarthome" class="wiser">
            <h3>Schneider Electric</h3>
          </a>
        </div>
      </div>
      <div class="column ep">
        <div class="content">
          <a href="https://cillecamille.dk/projekt5/html/miljoe-venlig-genbrug-odense.html" target="_blank">
            <img src="@/assets/pulvis-logo.png" alt="Butik Pulvis" class="pulvis">
            <h3>Butik Pulvis</h3>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column pp">
        <div class="content">
          <a href="#">
            <img src="@/assets/logoer1.png" alt="ceciliethielsen.dk" class="logo">
            <h3>Personlig Portfolio</h3>
          </a>
        </div>
      </div>
      <div class="column pp">
        <div class="content">
          <a href="https://www.youtube.com/watch?v=NXaHcMTCTVs" target="_blank">
            <img src="@/assets/ohnothing-logo.png" alt="Ohnothing logo" class="ohnothing">
            <h3>Mini-dokumentar for et <br>upcoming band</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
    
<style lang="scss" scoped>
  .row{
    display: flex;
    flex-direction: row;
  }
  .content{
    width: 25rem;
    display: flex;
    flex-direction: column;
    height: 20rem;
    text-align: center;
    margin: 2rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    border-radius: 5%;
  }
  .content:hover{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }

  .wiser{
    height: 10rem;
    margin-top: 2rem;
    margin-bottom: 3rem
  }

  .pulvis{
    height: 15rem;
  }
  .logo{
    width: 12rem;
  }
  .ohnothing{
    width: 20rem;
    margin: 1rem;
  }
  h3{
    text-align: left;
    margin-left: 2rem;
    color: #936f6b;;
  }
  a{
    text-decoration: none;
  }

</style>