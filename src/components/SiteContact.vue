<script>

</script>

<template>
    <div class="container">
        <h1>Kontakt mig her</h1>
        <div class="contact-container">
            <div class="contact-info">
                <div class="contact-me">
                    <font-awesome-icon icon="fas-regular fa-building-columns" class="bx" />
                    <div class="info">
                        <h2>Campus</h2>
                        <p>Seebladsgade 1<br>5000 Odense C</p>--
                    </div>
                </div>
                <div class="contact-me">
                    <font-awesome-icon icon="fas-regular fa-phone" class="bx"/>
                    <div class="info">
                        <h2>Telefon</h2>
                        <p>+45 29 89 11 64</p>--
                    </div>
                </div>
                <div class="contact-me">
                    <font-awesome-icon icon="far-regular fa-envelope" class="bx"/>
                    <div class="info">
                        <h2>Mail</h2>
                        <p>cecilie.mft@hotmail.com</p>--
                    </div>
                </div>
            </div>
            <div class="pic-container">
                <img src="../assets/portrait3.png" alt="contact-me" class="picture">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        text-align: center;
        width: 100%;
        margin-top: 8rem;
    }
    .contact-container{
        display: flex;
        justify-content: center;
        margin: 2rem;
    }
    .contact-info{
        padding-top: 2rem;
    }
    .pic-container{
        margin-right: -5rem;
    }

    .contact-me{
        display: flex;
        flex-direction: row;
        justify-content: right;
        margin: 2rem;
    }

    .info{
        flex-direction: column;
        width: 11.5rem;
        text-align: left;
        margin-left: 1.5rem;  
    }
    .bx{
        font-size: 2rem;
        margin-top: 0.5rem;
        color: #d19b95;;
    }

    .picture{
        height: 35rem;
    }
    p{
        margin-top: 0.5rem;
    }

   
</style>