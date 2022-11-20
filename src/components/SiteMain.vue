<script setup>
import SiteHome from "./SiteHome.vue";
import SiteEducation from "./SiteEducation.vue";
import SitePortfolio from "./SitePortfolio.vue";
import SiteContact from "./SiteContact.vue";

</script>

<template>
        <section id="home">
            <SiteHome/>
        </section>
        <section id="about">
            <SiteEducation/>
        </section>
        <section id="portfolio">
            <SitePortfolio/>
        </section>
        <section id="contact">
            <SiteContact/>
        </section>
</template>

<style lang="scss" scoped>
    section {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    #about {
        display: flex;
        flex-direction: row;
        
    }


</style>