<script>
export default {
    name: 'SingleCard',
    props: ['name', 'type', 'image'],
}
</script>

<template>
    <div class="card">
        <div class="immagine">
            <img :src="image" :alt="name">
        </div>
        <div class="title">
            <h3>
                {{ name }}
            </h3>
        </div>
        <div class="type">
            <p>
                {{ type }}
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.card {
    display: flex;
    flex-direction: column;
    // padding: 0 10px 0 10px;
    width: calc(100% / 5 - 12px);
    background-color: $bg-main-color;
    text-align: center;

    .immagine {
        object-fit: contain;

        img {
            width: 100%;
        }
    }

    .title {
        color: $primary-color;
    }
}
</style>