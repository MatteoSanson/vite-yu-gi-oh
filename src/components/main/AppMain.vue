<script>
import SelectType from './SelectType.vue';
import ContentMain from './ContentMain.vue';

export default {
    name: 'AppMain',
    components: {
        SelectType,
        ContentMain,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <SelectType />
            <ContentMain />
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../../../src/assets/scss/partials/variables.scss' as *;

main {
    background-color: $bg-main-color;

    .container {
        width: 85%;
        margin: 0 auto;
    }
}
</style>