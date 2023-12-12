<script>
import LogoHeader from './LogoHeader.vue';
import TitleHeader from './TitleHeader.vue';

export default {
    name: 'AppHeader',
    components: {
        LogoHeader,
        TitleHeader,
    }
}
</script>

<template>
    <header>
        <LogoHeader />
        <TitleHeader />
    </header>
</template>

<style></style>