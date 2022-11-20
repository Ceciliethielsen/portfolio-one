<script setup>
import PortfolioItems from "./PortfolioItems.vue";

</script>

<template>
    <div class="main-container">
        <h1>Portfolio</h1>
        <div class="portfolio-items">
            <PortfolioItems/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-container{
        height: 100%;
        width: 100%;
    }

    h1{
        text-align: center;
        margin-top: 8rem;
    }

    .container2{
        height: 90%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .portfolio-items{
        display: flex;
        flex-direction: row ;
        width: 100%;
        justify-content: space-around;
    }

    h2{
        text-align: center;
    }


</style>