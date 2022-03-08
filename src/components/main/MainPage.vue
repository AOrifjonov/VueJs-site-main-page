<script setup>
</script>
<template>
    <div style="height: 180px">
    </div>
    <div class="max-mid-w">
        <h1 class="big-text">
            The <k>Progressive</k> JavaScript FrameWork 
        </h1>
        <p class="description">
            An approachable, performant and versatile framework for building web user interfaces.
        </p>
        <div class="elements">
            <button class="btn-custom bgg text-white">
                <svg class="icon-play" aria-labelledby="simpleicons-play-icon" role="img" viewBox="0 0 100 125" fill="#FFFFFF" data-v-0c05fbd2=""><title id="simpleicons-play-icon" lang="en" data-v-0c05fbd2="">Play icon</title><path d="M50,3.8C24.5,3.8,3.8,24.5,3.8,50S24.5,96.2,50,96.2S96.2,75.5,96.2,50S75.5,3.8,50,3.8z M71.2,53.3l-30.8,18  c-0.6,0.4-1.3,0.5-1.9,0.5c-0.6,0-1.3-0.1-1.9-0.5c-1.2-0.6-1.9-1.9-1.9-3.3V32c0-1.4,0.8-2.7,1.9-3.3c1.2-0.6,2.7-0.6,3.8,0  l30.8,18c1.2,0.6,1.9,1.9,1.9,3.3S72.3,52.7,71.2,53.3z" data-v-0c05fbd2=""></path></svg>
                Why vue
            </button>
            <button>
                Get started
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" data-v-0067efe0=""><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" data-v-0067efe0=""></path></svg>
            </button>
            <button>
                Install
            </button>
        </div>
    </div>
</template>

<style scoped>

.big-text {
    font-size: 76px;
    line-height: 1.25;
    font-weight: 850;
    margin: 0 auto;
    text-align: center;
    color: #213547;
}
.big-text k {
    background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.description {
    margin-top: 2rem;
    font-size: 22px;
    text-align: center;
    color: #929292;
    font-weight: 400;
}

.elements {
    margin-top: 2rem;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

button {
    outline: none;
    border: 1px solid #213547;
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: #929292;
}
.btn-custom svg {
    width: 20px;
    height: 20px;
    margin-left: 0;
}
button svg {
    margin-left: 20px;
    color: #929292!important;
}
</style>

