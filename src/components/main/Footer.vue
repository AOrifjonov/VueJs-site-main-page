<script>
import {states} from '../../store/store.js'
export default {
    data() {
        return {
            states
        }
    }
}
</script>
<template>
    <div :class="states.day ? 'night footer' : 'footer'">
        <div class="max-sm-w">
            <p class="text-center mt-4">
                Subscribe to our weekly newsletter.
            </p>
            <div class="subscribe">
                <div class="input">
                    <input placeholder="Email adress" type="email">
                    <button class="bgg text-white">SUBSCRIBE</button>
                </div>
            </div>
            <p class="text-center mt-4 discuss">
                You can read the previous issues and listen to our podcast at news.vuejs.org. <br>
                You may also go social at Twitter, or join our home at Discord.
            </p>
        </div>
    </div>
    <footer :class="states.day ? 'second-footer night' : 'second-footer'">
        <div class="max-sm-w p-3 text-center">
            <p class="mt-1">
                Released under the <b>MIT License</b>. <br>
                Copyright © 2014-2022 Evan You
            </p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin-top: 5rem;
    background: #f9f9f9;
    padding: 15px;
    border-bottom: 1px solid #c0c0c0;
}
.subscribe {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.input {
    border: 1px solid rgb(207, 207, 207);
    padding: 2px 2px;
    width: 60%;
    border-radius: 5px;
    min-width: 400px;
    max-width: 400px;
}
.input:hover {
    border-color: green;
}

input {
    margin-right: 10px;
    outline: none;
    width: 280px;
    background: none;
    border: none;
    padding: 8px 10px;
    font-size: 18px;
}

button {
    width: 100px;
    outline: none;
    border: none;
    padding: 6px 10px;
    border-radius: 3px;
}
p {
    color: #707070;
    font-weight: 500;
    font-size: 17px;
}
.discuss {
    font-size: 14px;
    margin-bottom: 4rem;
}
.second-footer {
    background: #f9f9f9;
}
.second-footer p {
    font-size: 13px;
}
</style>