<template>
    <div>
        <header>
            <button @click="back">返回上一级</button>
        </header>
        <div class="box" :style="{background:bankground}">
            123
        </div>
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
            back() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
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