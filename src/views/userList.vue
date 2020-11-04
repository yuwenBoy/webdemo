<template>
    <div class="box" :style="{background:bankground}">
        123
    </div>
</template>

<script>
    import {
        randomColor
    } from '@/utils/random'
    export default {
        name: 'userList',
        data() {
            return {
                bankground: '#ccc'
            }
        },
        created() {
            setInterval(() => {
                this.bankground = randomColor();
            }, 1000);
        },
        methods: {

        }
    }
</script>
<style scoped>
    .box {
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
</style>