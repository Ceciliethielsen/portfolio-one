<script>

</script>

<template>
    <nav id="navbar">
        <ul class="nav-list">
            <li class="home active"><a href="#home" class="nav-link">HJEM</a></li>
            <li class="about"><a href="#about" class="nav-link">OM MIG</a></li>
            <li class="portfolio"><a href="#portfolio" class="nav-link">PORTFOLIO</a></li>
            <li class="contact"><a href="#contact" class="nav-link">KONTAKT</a></li>
        </ul>    
    </nav>

</template>

<style lang="css" scoped>

    nav #navbar ul{
        list-style: none;
    }

    nav #navbar ul li{
        display: inline-block;
    }

    nav #navbar ul li a{
        display: inline-block;
        padding: 10px 20px;
        color: #6c5654;
        text-decoration: none;
        letter-spacing: 2px;
        font-size: 1.4rem;

    }
    
    nav #navbar ul li a:hover{
        box-shadow: #6c5654 0px 5px 10px -10px;
        
    }

</style>