<template>
    <div 
        v-click-outside="onClickOutside"
        class="menu" 
    >
        <v-icon 
            v-if="!isDropdown"
            class="menu__icon-burger"
            path="img/burger.svg"
            @click="isDropdown = true"
        />

        <v-icon 
            v-else
            class="menu__icon-close" 
            path="img/close.svg" 
            @click="isDropdown = false"
        />

        <ul v-if="isDropdown" class="menu__dropdown">
            <li class="menu__dropdown-item" @click="setRoute('/')">
                О проекте
                <v-icon class="menu__icon-mail" path="img/mailSmile.svg" />
            </li>

            <li class="menu__dropdown-item" @click="setRoute('/articles')">
                Блог
                <v-icon class="menu__icon-document" path="img/document.svg" />
            </li>
            
            <li class="menu__dropdown-item" @click="setRoute('/courses')">
                Видеокурсы
                <v-icon class="menu__icon-video" path="img/video.svg" />
            </li>

            <v-button
                class="menu__button"
                type="active"
                @click="setRoute('subscribe')"
            >
                <v-icon 
                    class="menu__icon-premium" 
                    path="img/premium.svg" 
                />
                Купить премиум
            </v-button>
        </ul>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';
import VButton from '@/components/common/VButton';

export default {
    name: 'MenuBurger',

    components: {
        VIcon,
        VButton
    },

    data() {
        return {
            isDropdown: false
        };
    },

    methods: {
        setRoute(route) {
            this.$router.push(`${route}`);
            this.onClickOutside();
        },

        onClickOutside() {
            this.isDropdown = false;
        },
    }
};
</script>

<style lang="scss" scoped>
.menu {
    position: relative;
    font-size: 18px;
    color: $color-black;
}

.menu__dropdown {
    @extend .flex_column-start-center;
    position: absolute;
    z-index: 2;
    width: 260px;
    top: 80px;
    right: 10px;
    background: $color-white;
    box-shadow: 0px 0px 17px rgba(163, 163, 163, 0.24);
    border-radius: 8px;
    padding: 9px 28px 28px 28px;
}

.menu__dropdown-item {
    @extend .flex_row-center-between;
    width: 100%;
    height: 56px;
    border-top: 1px solid $color-white-dark;

    &:first-child { 
        border-top: none;
    }
}

.menu__button {
    width: 204px;
    height: 55px;
    margin-top: 15px;
    font-size: 16px;
}

// Иконки
.menu__icon {
    &-burger {
        width: 36px;
        height: 36px;
    }

    &-close {
        width: 36px;
        height: 36px;
        stroke: $color-black;
        padding: 8px;
    }

    &-mail {
        width: 18px;
        height: 19px;
        fill: transparent;
    }

    &-document {
        width: 14px;
        height: 18px;
        fill: transparent;
        margin-right: 2px;
    }

    &-video {
        width: 18px;
        height: 18px;
        fill: transparent;
        stroke: $color-gray;
    }

    &-premium {
        width: 17px;
        height: 17px;
        fill: $color-white;
        margin-right: 9px;
    }
}
</style>