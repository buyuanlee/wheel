<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ButtonGroup",
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.warn(`button-group的子元素应该全部是button，而你的是${name}`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button-group {
        display: inline-flex;
        vertical-align: top;

        > .u-button {
            border-radius: 0;

            &:not(first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>

