<script>

</script>

<template>
    <div class="container">
        <div class="profile">
            <div class="rubrik">
                <h1>Cecilie Thielsen</h1>
                <h2>Multimediedesigner</h2>
            </div>
            <div class="resume">
                <a href="#contact" class="cv-button">
                    <span>Kontakt mig her</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </a>
            </div>
            <div class="social-links">
                <div class="link">
                    <a href="https://www.linkedin.com/in/cecilie-thielsen-b0747a220/" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" class="bx"/>
                    </a>
                </div>
                <div class="link">
                    <a href="https://www.facebook.com/cecilie.thielsen" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" class="bx"/>
                    </a>
                </div>
                <div class="link">
                    <a href="https://www.instagram.com/cillethielsen/" target="_blank">
                        <font-awesome-icon icon="fa-brands fa-instagram" class="bx"/>
                    </a>
                </div>
            </div>
        </div>
        <img src="@/assets/me4.png" alt="me" class="pic-me">
    </div>    
</template>

<style lang="scss" scoped>
    .container{
        margin-top: 7.5rem;
        padding: 2.5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-width: 3px;
        border-style: solid;
        border-top: none;
        border-image: linear-gradient(to right, transparent, #936f6b, transparent);
        border-image-slice: 1;
    }

    .profile{
        padding: 1rem;
        text-align: left;
        margin: 5rem;
        height: 20rem;
        position: relative;
        

        .rubrik{
            margin-bottom: 2rem;
        }
    }

    .resume{
        padding: 1rem;
        margin-left: -1rem;
    }

    .resume a{
        text-decoration: none;
        color: #000;
    }
    .cv-button {
        position: relative;
        margin: auto;
        padding: 19px 22px;
        transition: all 0.2s ease;

    }
    .cv-button:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        border-radius: 28px;
        background: #d19b95;
        width: 56px;
        height: 56px;
        transition: all 0.3s ease;
    }
    .cv-button span {
        position: relative;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        vertical-align: middle;
        
    }
    .cv-button svg {
        position: relative;
        top: 0;
        margin-left: 10px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: #111;
        stroke-width: 2;
        transform: translateX(-5px);
        transition: all 0.3s ease;
    }
        .cv-button:hover:before {
        width: 100%;
        background: #e8b6b1;;
    }
        .cv-button:hover svg {
        transform: translateX(0);
    }
        .cv-button:active {
        transform: scale(0.96);
    }

    .social-links{
        display: flex;
        justify-content: left;
        position: absolute;
        bottom: 0;
        /*border: 1px dotted #e8b6b1;*/
        border-radius: 10px;
    }

    .link{
        display: flex;
        justify-content: space-between;
        padding: 0;
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

    .pic-me{
        height: 35rem;
        border-radius: 5%;
    }


</style>