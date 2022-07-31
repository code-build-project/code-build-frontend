<template>
    <div class="page">
        <component
            :is="component[currentComponent]"
            class="page__form"
            :form="form"
            @changeForm="changeForm($event)"
        />
    </div>
</template>

<script>
import FormMain from '@/components/pageReg/FormMain';
import FormConfirm from '@/components/pageReg/FormConfirm';

export default {
    name: 'Registration',

    components: {
        FormMain,
        FormConfirm
    },

    data() {
        return {
            currentComponent: 'main',

            component: {
                main: FormMain,
                confirm: FormConfirm
            },

            form: {
                name: '',
                email: ''
            }
        };
    },

    methods: {
        changeForm(ev) {
            this.form = ev;
            this.currentComponent = 'confirm';
        }
    }
};
</script>

<style lang="scss" scoped>
.page {
    @extend .flex_row-center-center;
    height: 100%;
    padding: 10px 20px;
}

.page__form {
    width: 490px;
    height: 735px;
    border: 2px solid $color-blue;
    border-radius: 8px;
    padding: 75px 58px;
}

@media screen and (max-width: 575px) {
    .page__form {
        width: 330px;
        height: 490px;
        border-width: 1px;
        border-radius: 5px;
        padding: 33px;
    }
}

@media screen and (max-width: 375px) {
    .page__form {
        width: 280px;
        height: 460px;
    }
}

@media screen and (min-width: 576px) and (max-height: 735px), 
       screen and (max-width: 575px) and (max-height: 460px) {
    .page {
        align-items: flex-start;
        overflow-y: auto;
    }   
}
</style>