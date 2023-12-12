<script>
export default {
    name: 'SelectType',
}
</script>

<template>
    <div class="selection">
        <select id="selezione" name="selezione">
            <option value="" disabled selected>Seleziona un'opzione</option>
            <option value="opzione1">Opzione 1</option>
            <option value="opzione2">Opzione 2</option>
            <option value="opzione3">Opzione 3</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
.selection {
    padding: 15px;

    #selezione {
        border-radius: 5px;
        border: 1px solid white;
        height: 30px;
    }

}
</style>