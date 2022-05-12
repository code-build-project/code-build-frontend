<template>
    <div class="footer__wrap">
        <footer class="footer">
            <div class="footer__main">
                <v-icon
                    class="footer__icon-logo"
                    path="img/logo.svg"
                    @click="$router.push('/')"
                />

                <div class="footer__social">
                    <a
                        v-for="(item, index) in $options.socialList"
                        :key="index"
                        :href="item.url"
                        target="_blank"
                    >
                        <v-icon 
                            class="footer__icon-social" 
                            :path="item.path" 
                        />
                    </a>
                </div>

                <div class="footer__nav-wrap">
                    <nav class="footer__nav">
                        <router-link 
                            class="footer__nav-item" 
                            to="/"
                        > 
                            О проекте
                        </router-link>
                        <router-link 
                            class="footer__nav-item"
                            to="/articles"
                        > 
                            Блог
                        </router-link>
                        <router-link
                            class="footer__nav-item"
                            to="/courses"
                        >
                            Видеокурсы
                        </router-link>
                    </nav>

                    <v-icon 
                        class="footer__icon-flag" 
                        path="img/flag.svg" 
                    />
                </div>
            </div>

            <hr class="footer__line" />

            <div class="footer__copyright">
                <div class="footer__copyright-item">
                    <v-icon 
                        class="footer__icon-copyright" 
                        path="img/copyright.svg" 
                    />
                    Все права защищены — 2022 год
                </div>

                <div class="footer__copyright-item">
                    Пишите: help@codebuild.com
                    <v-icon
                        class="footer__icon-copy"
                        path="img/copy.svg"
                        @click="copyToClipboard"
                    />
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
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
    ],

    methods: {
        copyToClipboard() {
            navigator.clipboard.writeText('help@codebuild.com')
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.footer__wrap {
    width: 100%;
    background: #171717;
}

.footer {
    @extend .flex_column;
    max-width: 1160px;
    width: 100%;
    padding: 67px 0;
    margin: 0 auto;
}

.footer__main {
    @extend .flex_row-center-between;
}

.footer__social {
    @extend .flex_row-center-between;
    width: 220px;
}

.footer__nav-wrap {
    @extend .flex_row;
}

.footer__nav {
    @extend .flex_row-center-between;
    width: 340px;
}

.footer__nav-item {
    color: $color-white;
    font-size: 17px;
    line-height: 18px;

    &:hover {
        cursor: pointer;
        color: $color-blue;
    }
}

.footer__line {
    height: 1px;
    border: none;
    margin-top: 50px;
    background-color: #444754;
}

.footer__copyright {
    @extend .flex_row-center-between;
    margin-top: 15px;
}

.footer__copyright-item {
    @extend .flex_row-center;
    font-size: 14px;
    color: #444754;
}

// Иконки
.footer__icon {
    &-logo {
        @extend .flex_row-center-center;
        width: 78px;
        height: 55px;
        border: 2px solid $color-white;
        border-radius: 4.5px;
        fill: $color-white;

        &:hover {
            cursor: pointer;
            fill: #171717;
            background: $color-white;
        }
    }

    &-social {
        @extend .flex_row-center-center;
        width: 44px;
        height: 44px;
        padding: 12px;
        border: 1px solid $color-black;
        border-radius: 9px;
        fill: $color-white;

        &:hover {
            cursor: pointer;
            background: $color-black;
        }
    }

    &-flag {
        width: 28px;
        height: 18px;
        margin-left: 110px;
    }

    &-copyright {
        @extend .flex_row-center-center;
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }

    &-copy {
        @extend .flex_row-center-center;
        width: 28px;
        height: 28px;
        border: 1px solid $color-black;
        border-radius: 6px;
        fill: $color-white;
        margin-left: 12px;
        padding: 7px;

        &:hover {
            cursor: pointer;
            background: $color-black;
        }
    }
}

@media screen and (max-width: 1160px) {
    .footer {
        padding: 67px 20px;
    }

    .footer__nav {
        width: 300px;
    }

    .footer__icon-flag{
        margin-left: 55px;
    }
}

@media screen and (max-width: 799px) {
    .footer__nav {
        display: none;
    }

    .footer__icon-flag{
        margin-left: 0;
    }
}

@media screen and (max-width: 575px) {
    .footer {
        padding: 28px 20px 18px 20px;
    }

    .footer__nav-wrap,
    .footer__icon-flag,
    .footer__icon-copy {
        display: none;
    }

    .footer__line {
        margin-top: 42px;
    }

    .footer__copyright {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer__copyright-item {
        margin-top: 7px;
    }
}

@media screen and (max-width: 375px) {
    .footer__main {
        justify-content: center;
    }
    
    .footer__icon-logo {
        display: none;
    }
}
</style>