<template>
    <a class="like">
        <v-icon
            class="like__icon"
            :class="'stroke-' + stroke"
            path="img/heart.svg"
            :fill="isLike ? '#EE3465' : 'transparent'"
            @click="onLike"
        />
    </a>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';

// Helpers
import { debounce } from 'lodash';

export default {
    name: 'VLike',

    components: {
        VIcon
    },

    model: {
        prop: 'isLike',
        event: 'change'
    },

    props: {
        // Id контента
        contentId: {
            type: [String, Number],
            default: ''
        },

        // Название раздела контента
        fieldName: {
            type: String,
            default: ''
        },

        // Флаг автивности лайка
        isLike: {
            type: Boolean,
            default: false
        },

        // Цвет бордера лайка
        stroke: {
            type: String,
            default: 'primary'
        }
    },

    methods: {
        onLike: debounce(function() {
            const payload = {
                id: this.contentId,
                field: this.fieldName
            };

            if (this.isLike) {
                this.deleteLike(payload);
            } else this.addLike(payload);
        }, 500),

        addLike(payload) {
            this.$store.dispatch('likes/addLike', payload).then(() => {
                this.$emit('change', true);
            });
        },

        deleteLike(payload) {
            this.$store.dispatch('likes/deleteLike', payload).then(() => {
                this.$emit('change', false);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.like {
    display: flex;
    transition: all 0.1s ease;

    &:active {
        transform: scale(0.7);
    }
}

.like__icon {
    fill: transparent;
    cursor: pointer;
}

// Strokes
.stroke-primary {
    stroke: $color-white;
}

.stroke-secondary {
    stroke: #dedede;
}
</style>