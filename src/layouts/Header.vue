<template>
    <header class="header">
        <v-icon 
            class="header__logo" 
            path="img/logo.svg" 
            @click="$router.push('/')" 
        />

        <nav class="header__nav">
            <router-link 
                class="header__nav-item" 
                to="/"
            > 
                О проекте
            </router-link>
            <router-link 
                class="header__nav-item" 
                to="/articles"
            > 
                Блог
            </router-link>
            <router-link 
                class="header__nav-item"
                to="/courses"
            > 
                Видеокурсы
            </router-link>
        </nav>

        <div class="header__menu">
            <v-transition>
                <menu-default v-if="!user.id" />

                <menu-user v-else />
            </v-transition>

            <menu-burger class="header__burger" />
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';
import VIcon from '@/components/common/VIcon';
import MenuUser from '@/components/header/MenuUser';
import MenuBurger from '@/components/header/MenuBurger';
import MenuDefault from '@/components/header/MenuDefault';
import VTransition from '@/components/common/VTransition';

export default {
    name: 'Header',

    components: {
        VIcon,
        MenuUser,
        MenuBurger,
        MenuDefault,
        VTransition
    },

    computed: {
        ...mapState({
            user: state => state.user,
        })
    }
};
</script>

<style lang="scss" scoped>
.header {
    @extend .flex_row-center-start;
    max-width: 1160px;
    width: 100%;
    padding: 32px 0;
    font-size: 18px;
    color: $color-black;
}

.header__logo {
    @extend .flex_row-center-center;
    width: 78px;
    height: 55px;
    border: 2px solid $color-blue;
    border-radius: 4.5px;
    fill: $color-blue;
    transition: linear 0.2s;

    @media screen and (min-width: 1160px) {
        &:hover {
            cursor: pointer;
            fill: $color-white;
            background: $color-blue;
        }
    }
}

.header__nav {
    @extend .flex_row-center-between;
    width: 360px;
    margin-left: 220px;
}

.header__nav-item {
    color: $color-black;

    @media screen and (min-width: 1160px) {
        &:hover {
            cursor: pointer;
            color: $color-blue;
        }
    }
}

.router-link-exact-active {
    color: $color-blue;
}

.header__menu {
    @extend .flex_row;
    margin-left: auto;
}

.header__burger {
    display: none;
}

@media screen and (max-width: 1160px) {
    .header {
        padding: 20px;
    }

    .header__nav {
        display: none;
    }

    .header__burger {
        display: block;
        margin-left: 25px;
    }
}
</style>