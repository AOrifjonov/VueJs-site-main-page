import { reactive } from "vue";

export const states = reactive({
    searchWindow: false,
    setWindow(x){
        this.searchWindow = x
    }
})