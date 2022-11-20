<script setup>
    import SiteLogo from './SiteLogo.vue'
    import SiteNav from './SiteNav.vue'

    /*window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    })*/

    
</script>

<template>
    <header>
        <SiteLogo/>
        <SiteNav/>
    </header>
</template>

<style lang="scss" scoped>
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        transition: 0.6s;
        z-index: 100000;
        background-color: #fff;
        opacity: 90%;
        font-family: 'Quicksand', 'sans-serif';
        font-weight: 500;
        height: 7rem;
        box-shadow: #ccbfbd 0px 5px 10px -10px;
        

    }
    

</style>