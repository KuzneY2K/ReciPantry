<template>
    <section class="row p-0 m-0">
        <div class="col-12 p-0 m-0 px-5">
            <CommunitySearchBar />
        </div>

        <div class="col-2 col-md-4">
            <button class="btn btn-success buttonContainer"><i class="mdi mdi-plus"></i></button>
        </div>
    </section>
</template>

<script>
export default {
    setup() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.buttonContainer {
    position: fixed;

    @media(min-width: 768px) {
        left: 90rem;
        top: 40rem;
    }

    @media(max-width: 768px) {
        left: 20rem;
        top: 38rem;
    }
}
</style>