<script>
    export default{

    }

</script>

<template>
    <div class="container">
        <div class="about-me">
            <div class="text-about">
                <div class="text-om-mig">
                    <h1>Om Mig</h1>
                    <p>Velkommen!
                        <br><br>
                        Mit navn er Cecilie, jeg er 24 år gammel og bor på fyn. <br><br>
                        Jeg er på tredje semester af multimediedesign-uddannelsen, hvor jeg har lært at udvikle brugerflader og arbejde i HTML, CSS og JS. 
                        <br><br>
                        Jeg er pt igang med at forbedre mine færdigheder indenfor PHP, Vue, React, SCSS, MySQL mm. 
                        <br><br>
                        Derudover er jeg meget interesseret i designdelen af, at udvikle hjemmesider, og er i den forbindelse også kyndig indenfor UX Design, hvor jeg i den forbindelse har arbejdet en del med Adobe-programmerne. 
                        <br><br>
                        Herudover er jeg også bekendt med SEO-optimering af hjemmesider.
                    </p>
                </div>
            </div>
            <div class="uddannelse">
                <div class="rubrik">
                    <font-awesome-icon icon="fas-thin fa-graduation-cap" class="bx" />
                    <h1>Uddannelse</h1>
                </div>
                <div class="mmd">
                    <font-awesome-icon icon="fas-light fa-arrow-right-long" class="bx1" />
                    <div class="info">
                        <h3>Multimediedesigner</h3>
                        <p>UCL Erhvervsakademi og Professionshøjskole</p>
                        <div class="date">
                            <p>aug 2021 - jun 2023</p>
                        </div>
                        <br>-----
                    </div>
                </div><br>
                <div class="mmd">
                    <font-awesome-icon icon="fas-light fa-arrow-right-long" class="bx1" />
                    <div class="info">
                        <h3>STX, Sproglig studentereksamen</h3>
                        <p>Vestfyns Gymnasium</p>
                        <div class="date">
                            <p>aug 2014 - jun 2017</p>
                        </div>
                        <br>-----
                    </div>
                </div><br>
                <div class="mmd">
                    <font-awesome-icon icon="fas-light fa-arrow-right-long" class="bx1" />
                    <div class="info">
                        <h3>9. Klasse</h3>
                        <p>Den Rytmiske Efterskole i Baaring</p>
                        <div class="date">
                            <p>aug 2013 - jun 2014</p>
                        </div>
                        <br>-----
                    </div>
                </div>
            </div>
        </div>
    </div>
            
</template>

<style lang="scss" scoped>

    .about-me{
        display: flex;
        margin: 2rem;
        justify-content: center;
        margin-left: 8rem;
        margin-top: 8rem;
    }

    .text-about{
        width: 50%;
        margin-top: -0.9rem;
    }
    .text-om-mig{
        margin: 1rem;
    }

    .text-om-mig p{
        text-align: left;
        font-size:1.3rem;
        padding-left: 5px;
    }

    h1{
        padding-bottom: 3rem;
    }

    .uddannelse{
        width: 50%;
        margin: 1rem;
        padding: 1rem;
        border-width: 3px;
        border-style: solid;
        border-top: none;
        border-image: linear-gradient(to bottom, transparent, #936f6b, transparent);
        border-image-slice: 1;
        border-right: none;
        padding-top: 0;
        margin-top: 0;
        
    }

    .rubrik{
        display: flex;
    }
    .bx{
        font-size: 2.5rem;
        margin-top: 0.4rem;
        margin-right: 1.3rem;
        color: #d19b95;
    }

    .mmd{
        display: flex;
        flex-direction: row;
    }

    .bx1{
        font-size: 1.6rem;
        color: #d19b95;
        padding-right: 1rem;
        margin-top: 0.2rem;
    }

    .uddannelse p{
        font-size: 1.2rem;
        margin-top: 0.3rem;
    }

    .date{
        font-size: 1rem;
        margin-top: 0.1rem;
    }
</style>