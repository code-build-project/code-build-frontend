<template>
    <a class="like">
        <v-icon
            class="like__icon"
            :class="componentClasses"
            path="img/heart.svg"
            @click.stop.native="debounceOnLike"
        />
    </a>
</template>

<script>
// Components
import VIcon from '@/components/common/VIcon';

// Helpers
import { debounce } from 'lodash';

// Mixins
import window from '@/mixins/window';

export default {
    name: 'VLike',

    components: {
        VIcon
    },

    mixins: [window],

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

    data() {
        return {
            isMobileAnimation: false,
            debounceOnLike: debounce(this.onLike, 500),
        }
    },

    computed: {
        componentClasses() {
            return [
                'type-' + this.type,
                {
                    'like__icon_active': this.isLike,
                    'like_mobile-animate': this.isMobileAnimation
                }
            ]
        }
    },

    methods: {
        onLike() {
            let payload = {
                id: this.contentId,
                field: this.fieldName
            };

            if (this.fieldName === 'lessons') {
                payload.courseId = this.courseId;
            }

            this.startMobileAnimation();

            if (this.isLike) {
                this.deleteLike(payload);
            } else this.addLike(payload);
        },

        addLike(payload) {
            this.$store.dispatch('likes/addLike', payload).then(() => {
                this.$emit('change', true);
            });
        },

        deleteLike(payload) {
            this.$store.dispatch('likes/deleteLike', payload).then(() => {
                this.$emit('change', false);
            });
        },

        startMobileAnimation() {
            if (!this.isDesktop) {
                this.isMobileAnimation = true;
                setTimeout(() => this.isMobileAnimation = false, 400);
            }
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
    stroke: $color-silver;

    &.like__icon_active {
        fill: $color-pink;
    }
}

.like_mobile-animate {
    animation: anim 0.4s ease forwards;
}

@keyframes anim {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.7);
    }
    100% {
        transform: scale(1);
    }
}
</style>