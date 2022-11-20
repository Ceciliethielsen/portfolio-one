<script setup>

</script>

<template>
    <div class="footer-container">
            <a href="#" class="domaine">
                <h2>ceciliethielsen.dk</h2>
            </a>
            <div class="socialmedia">
                <ul class="socials">
                    <a href="https://www.facebook.com/cecilie.thielsen" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="bx"/>
                    </a>
                    <a href="https://www.linkedin.com/in/cecilie-thielsen-b0747a220/" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" class="bx"/>
                    </a>
                    <a href="https://www.instagram.com/cillethielsen/" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-instagram" class="bx"/>
                    </a>
                </ul>
            </div>
            <div class="copyright">
                <p>Copyright &copy; 2022, All Rights Reserved By Cecilie Thielsen</p>
            </div>
        </div>

</template>

<style lang="scss" scoped>
    .footer-container{
    padding: 2.5rem;
    background-color: #f0e8e8;
    text-align: center;
    }

    .domaine{
        text-decoration: none;
    }
    .socialmedia{
        display: flex;
        justify-content: center;
    }
    .socials{
        display: flex;
        width: 13rem;
        justify-content: space-between;
        padding: 0;
        padding-top: 1rem;
        padding-bottom: 1rem;
        
    }
    .bx{
        font-size: 2rem;
        margin: 1rem;
        width: 2rem;
    }

    .fa-facebook-f{
        color: #6c5654;
        border-radius: 20%;
        padding-top: 2px;
        padding-right: 1px;
        width: 2.1rem;
    }

    .fa-linkedin-in{
        color: #6c5654;
        border-radius: 20%;
        padding-top: 3px;
        width: 2.2rem;
    }
    
    .fa-instagram{
        color: #6c5654;
        border-radius: 25%;
        padding-top: 0.5px;
        font-size: 2.2rem;
        
    }

    .fa-facebook-f:hover{
        background-color: #4267B2;
        color: #fff;
        border: none;
    }

    .fa-linkedin-in:hover{
        background-color: #0072b1;
        color: white;
        border: none;
    }

    .fa-instagram:hover{
        background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
        color: white;
        border: none;
        width: 2.2rem;
    }
</style>