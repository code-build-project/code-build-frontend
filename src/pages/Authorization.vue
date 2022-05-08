<template>
    <div class="page">
        <component 
            :is="forms[currentForm]" 
            class="page__form" 
            @changeForm="currentForm = $event" 
        />
    </div>
</template>

<script>
import FormMain from '@/components/pageAuth/FormMain';
import FormRecovery from '@/components/pageAuth/FormRecovery';

export default {
    name: 'Authorization',

    components: {
        FormMain,
        FormRecovery
    },

    data() {
        return {
            forms: {
                main: FormMain,
                recovery: FormRecovery
            },
            
            currentForm: 'main'
        };
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
        width: 280px;
        height: 460px;
        border-width: 1px;
        border-radius: 5px;
        padding: 39px 33px;
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