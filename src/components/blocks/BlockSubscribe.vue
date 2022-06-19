<template>
    <div class="subscribe__wrap">
        <div class="subscribe">
            <div class="subscribe__main">
                <h1 class="subscribe__title">Подпишись на нас</h1>

                <h2 class="subscribe__subtitle">
                    Присоединяйся к сообществу программистов, узнавай много нового из мира IT и будь
                    в курсе всех событий!
                </h2>
            </div>

            <div class="subscribe__social">
                <a
                    v-for="(item, index) in $options.socialList"
                    :key="index"
                    :href="item.url"
                    target="_blank"
                >
                    <v-icon 
                        class="subscribe__icon-social" 
                        :path="item.path" 
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
    name: 'BlockSubscribe',

    components: {
        VIcon
    },

    socialList: [
        {
            url: 'https://example.ru',
            path: 'img/youtube.svg'
        },
        {
            url: 'https://vk.com/shkiper195',
            path: 'img/vk.svg'
        },
        {
            url: 'https://instagram.com/code__build',
            path: 'img/insta.svg'
        },
        {
            url: 'https://t.me/codebuild',
            path: 'img/telegram.svg'
        }
    ]
};
</script>

<style lang="scss" scoped>
.subscribe__wrap {
    @extend .flex_row-center-center;
    width: 100%;
    background: $color-blue;
}

.subscribe {
    @extend .flex_row-center-between;
    width: 1160px;
    height: 315px;
}

.subscribe__main {
    @extend .flex_column;
}

.subscribe__title {
    font-family: 'ObjectSans';
    font-size: 40px;
    letter-spacing: -0.01em;
    color: $color-white;
}

.subscribe__subtitle {
    width: 470px;
    font-size: 20px;
    line-height: 31px;
    letter-spacing: -0.025em;
    color: $color-white;
}

.subscribe__social {
    @extend .flex_row-center-between;
    width: 532px;
}

// Иконки
.subscribe__icon {
    &-social {
        @extend .flex_row-center-center;
        width: 100px;
        height: 100px;
        padding: 32px;
        border: 2px solid #3a7afe;
        border-radius: 21px;
        fill: $color-white;

        &:hover {
            cursor: pointer;
            background: #3a7afe;
        }
    }
}

@media screen and (max-width: 575px) {
    .subscribe {
        flex-direction: column;
        justify-content: flex-start;
        width: 320px;
        height: 298px;
    }

    .subscribe__title {
        font-size: 19px;
        letter-spacing: -1px;
        margin-top: 45px;
        text-align: center;
    }

    .subscribe__subtitle {
        width: 250px;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0;
        margin-top: 22px;
        text-align: center;
    }

    .subscribe__social {
        width: 270px;
        margin-top: 35px;
    }

    .subscribe__icon-social {
        width: 60px;
        height: 60px;
        padding: 17px;
        border: 1.2px solid #3a7afe;
        border-radius: 12px;
    }
}
</style>