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
        <SelectType />
        <ContentMain />
    </main>
</template>

<style></style>