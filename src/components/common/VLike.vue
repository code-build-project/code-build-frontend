<template>
    <a class="like">
        <v-icon
            class="like__icon"
            :class="componentClasses"
            path="img/heart.svg"
            @click.stop.native="onLike"
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
        // Id курса (нужно только для lessons)
        courseId: {
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
        // Тип стиля лайка
        type: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'secondary'].includes(value);
            }
        }
    },

    computed: {
        componentClasses() {
            return [
                'type-' + this.type,
                {
                    'like__icon_active': this.isLike
                }
            ]
        }
    },

    methods: {
        onLike: debounce(function() {
            let payload = {
                id: this.contentId,
                field: this.fieldName
            };

            if (this.fieldName === 'lessons') {
                payload.courseId = this.courseId;
            }

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
    transition: all 0.2s ease-in;
}

// Types
.type-primary {
    stroke: $color-white;

    &.like__icon_active {
        fill: $color-white;
    }
}

.type-secondary {
    stroke: #dedede;

    &.like__icon_active {
        fill: $color-pink;
    }
}
</style>