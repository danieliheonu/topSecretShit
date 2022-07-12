<template>
    <div class="section">
        <Aside />
        <Main />
    </div>
</template>

<script>
import Aside from '../components/AsideSection.vue'
import Main from '../components/MainSection.vue'

export default {
    name: "Section",
    components: {
        Aside,
        Main,
    }
}
</script>

<style>
.section {
    display: flex;
    width: 100%;
    min-height: 80vh;
    background: white;
}
</style>