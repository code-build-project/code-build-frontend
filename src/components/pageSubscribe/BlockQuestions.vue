<template>
    <div class="questions">
        <div class="questions__title">Часто задаваемые вопросы</div>
        <div class="questions__list">
            <subscribe-question />
        </div>
    </div>
</template>

<script>
import SubscribeQuestion from '@/components/pageSubscribe/Question';

export default {
    name: 'BlockQuestions',

    components: {
        SubscribeQuestion
    },
};
</script>

<style lang="scss" scoped>
.questions {
    @extend .flex_row-center-between;
    width: 100%;
    max-width: 1160px;
    min-height: 437px;
    padding: 73px 80px 72px 77px;
    background: $color-white;
    border-radius: 29px;
}

.questions__title {
    width: 200px;
    font-family: 'ObjectSans';
    font-size: 30px;
    line-height: 30px;
    color: $color-black;
}

.questions__list {
    margin-top: 10px;
    border-top: 1px solid $color-silver;
}

@media screen and (max-width: 1160px) {
    .questions {
        flex-direction: column;
        justify-content: flex-start;
        padding: 60px 40px;
    }

    .questions__title {
        width: 100%;
    }

    .questions__list {
        margin-top: 30px;
    }
}

@media screen and (max-width: 575px) {
    .questions {
        padding: 33px 13px;
        border-radius: 10px;
    }

    .questions__title {
        width: 200px;
        font-size: 22px;
        line-height: 22px;
        text-align: center;
    }

    .questions__list {
        margin-top: 15px;
    }
}
</style>