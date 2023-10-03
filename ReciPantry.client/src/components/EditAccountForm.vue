<template>
    <form @submit.prevent="editAccount">
        <div class="container">
            <section class="row">
                <div class="col-6 fs-2">
                    <label for="accountName">Name:</label>
                    <input v-model="editable.name" class="form-control fs-3" maxlength="100" placeholder="Name?"
                        type="text">
                </div>
                <div class="col-6 fs-2">
                    <label for="accountPic">Picture:</label>
                    <input v-model="editable.picture" class="form-control fs-3" maxlength="1000" placeholder="Picture URL?"
                        type="url">
                </div>
                <div class="my-2 col-12">
                    <img class="preview" :src="editable.picture" alt="">
                </div>
                <div class="col-12 text-end mt-4">
                    <button class="btn btn-outline-success fs-2">Save Changes <i class="mdi mdi-content-save"></i></button>
                </div>
            </section>
        </div>
    </form>
</template>

<script>
import { computed, watchEffect, ref } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';

export default {
    setup() {
        const editable = ref({})

        watchEffect(() => {
            AppState.account

        })
        return {
            editable,
            account: computed(() => AppState.account),

            async editAccount() {
                try {
                    await accountService.editAccount(editable.value)
                    Pop.success('Account Updated!')
                    editable.value = {}
                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
};
</script>


<style lang="scss" scoped>
.preview {
    max-height: 15vh;
    object-fit: contain;
}
</style>