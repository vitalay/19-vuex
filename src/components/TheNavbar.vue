<template>
  
    <header class="header">
        <strong>Счетчик {{ counter }}</strong>
    </header>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.state.counter
        }
    }

}
</script>

<style scoped>

</style>