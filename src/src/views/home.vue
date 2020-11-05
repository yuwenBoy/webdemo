<template>

    <body class="box">
        <header>header</header>
        <div class="box-body">
            <main class="box-content">
                内容
            </main>
            <nav class="box-nav">导航</nav>
            <aside class="box-aside">右侧</aside>
        </div>
        <footer>footer</footer>
    </body>
</template>
<style scoped>
    .box {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    header,
    footer {
        flex: 1;
        background-color: brown;
    }

    .box-body {
        display: flex;
        flex: 1;
    }

    .box-content {
        flex: 1;
        background-color: cadetblue;
    }

    .box-nav,
    .box-aside {
        flex: 0 0 12em;
        background-color: coral;
    }

    .box-nav {
        /* 导航放到最左边 */

        order: -1;
        background-color: cornflowerblue;
    }
</style>