<template>
    <!-- STUB modal button -->
    <button v-if="showButton" type="button" class="btn btn-outline p-0 m-0 dark" data-bs-toggle="modal"
        :data-bs-target="`#${id}`">
        <slot name="button">
            open {{ id }} modal
        </slot>
    </button>
    <!-- STUB modal body -->
    <div class="modal fade" :id="id" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
        aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </slot>
                </div>
                <div class="modal-body text-dark">
                    <slot name="body">

                    </slot>
                </div>
                <div class="modal-body text-dark">
                    <slot name="footer">

                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: { id: { type: String, required: true }, showButton: { type: Boolean, default: true } },
    setup() {
        return {};
    },
};
</script>


<style></style>