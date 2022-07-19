<template>
    <div class="breadcrumbs">
        <div 
            v-for="(link, index) in links"
            :key="index"
            class="breadcrumbs__item"
        >
            <router-link
                v-if="link.path"
                class="breadcrumbs__link" 
                :to="link.path"
            >
                {{ link.title }}
            </router-link>

            <span
                v-else
                class="breadcrumbs__link"
            >
                {{ link.title }}
            </span>

            <v-icon
                class="breadcrumbs__icon" 
                path="img/arrow.svg" 
            />
        </div>
    </div>
</template>

<script>
import VIcon from '@/components/common/VIcon';

export default {
    name: 'VBreadCrumbs',

    components: {
        VIcon
    },

    props: {
        // Данные для хлебных крошек
        links: {
            type: Array,
            default: () => []
        },
    },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
    @extend .flex_row;
    font-size: 16px;
    line-height: 27px;
    color: $color-white;
}

.breadcrumbs__item {
    @extend .flex_row-center-center;

    &:not(:first-child) {
        margin-left: 20px;
    }

    &:last-child {
        .breadcrumbs__icon {
            display: none;
        }

        .breadcrumbs__link {
            &:hover {
                cursor: default;
                color: $color-white;
            }
        }
    }
}

.breadcrumbs__link {
    &:hover {
        cursor: pointer;
        color: $color-navy;
    }
}

.breadcrumbs__icon {
    width: 20px;
    height: 20px;
    margin-left: 20px;
    stroke: $color-white;
    stroke-width: 1.5px;
}
</style>