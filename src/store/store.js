import { reactive } from "vue";

export const states = reactive({
    searchWindow: true,
    setSearchWindow(x){
        console.log(x);
        this.searchWindow = false
    }
})