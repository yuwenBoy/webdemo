<template>

    <div class="box">
        <header>
            <router-link to="/home">主页</router-link>
            <router-link to="/news">新闻</router-link>
            <router-link to="/userList">用户列表</router-link>
            <router-link to="/userAdd">新增用户</router-link>
        </header>
        <main class="box-content">
            <div id="mainSnakLine" class="main-snakLine">
                <div class="snakLine" v-for="(row,index) in snckData">
                    <div class="begin-circle" v-if="index == 0"></div>
                    <ul class="main-box">
                        <li v-for="col in row" @click="alert(col.GXH);" :class="getWczt(col.WCZTDM)">
                            {{col.GXH}}
                        </li>
                    </ul>
                    <div class="end-circle" v-if="index+1 == rowNum"></div>
                </div>
            </div>
        </main>
        <footer>footer</footer>
    </div>
</template>
<script>
    import '../assets/css/snackLine.css'
    export default {
        name: 'home',
        data() {
            return {
                colNum: 0,
                rowNum: 0,
                data: [{
                        GXH: '123456789877899',
                        WCZTDM: 1 //瀹屾垚鐘舵€佷唬鐮侊細0-鏃犻渶澶勭悊 1-宸插畬鎴� 2-鏈畬鎴� 3-鏈紑濮�
                    },
                    {
                        GXH: '2',
                        WCZTDM: 2
                    },
                    {
                        GXH: '3',
                        WCZTDM: 2
                    },
                    {
                        GXH: '4',
                        WCZTDM: 3
                    },
                    {
                        GXH: '5'
                    },
                    {
                        GXH: '6'
                    },
                    {
                        GXH: '7'
                    },
                    {
                        GXH: '8'
                    },
                    {
                        GXH: '9'
                    },
                    {
                        GXH: '10'
                    },
                    {
                        GXH: '11'
                    },
                    {
                        GXH: '12'
                    },
                    {
                        GXH: '13'
                    },
                    {
                        GXH: '14'
                    },
                    {
                        GXH: '15'
                    },
                    {
                        GXH: '16'
                    },
                    {
                        GXH: '17'
                    },
                    {
                        GXH: '18'
                    },
                    {
                        GXH: '19'
                    }
                ],
                snckData: []
            }
        },
        mounted() {
            var that = this;
            that.initSnckLine();
            window.onresize = function() {
                that.initSnckLine();
            }
        },
        methods: {
            initSnckLine: function() {
                this.calColNum();

                if (this.colNum > 0 && this.data.length > 0) {
                    this.calRowNum();
                }
            },

            /**
             * 璁＄畻涓€琛屾樉绀虹殑鍒楁暟
             */
            calColNum: function() {
                this.colNum = Math.floor(($('.main-snakLine').width() - 158) / 140);
            },

            /**
             * 璁＄畻闇€瑕佸灏戣鏄剧ず瀹�
             */
            calRowNum: function() {
                var length = this.data.length;
                if (this.colNum > length) {
                    this.rowNum = 1;
                } else {
                    this.rowNum = Math.floor(length / this.colNum);

                    if (length % this.colNum > 0) {
                        this.rowNum++;
                    }
                }

                this.initsSnckData();
            },
            /**
             * 鍒濆鍖栬泧褰㈠睍绀烘暟鎹�
             * 寰楀埌涓€涓簩浣嶆暟缁�
             */
            initsSnckData: function() {
                var that = this;
                var newArr = [];
                if (this.rowNum == 1) {
                    newArr.push(that.data);
                } else {
                    for (var i = 0; i <= that.data.length; i += that.colNum) {
                        var arr = that.data.slice(i, i + that.colNum);
                        newArr.push(arr);
                    }
                }

                if (newArr.length > 0) {
                    newArr.forEach(function(item, index) {
                        newArr[index] = that.getRowData(item, index);
                    });
                }

                that.snckData = newArr;
                console.log(newArr)
            },
            getRowData: function(data, index) {
                return (index % 2) == 0 ? data : data.reverse();
            },
            getWczt: function(ztdm) {
                var className = '';
                switch (ztdm) {
                    case 1: //宸插畬鎴�
                        className = 'green';
                        break;
                    case 2: //鏈畬鎴�
                        className = 'yellow'
                        break;
                    case 3: //鏈紑濮�
                        className = 'red'
                        break;
                }

                return className;
            }
        }
    }
</script>
<style>
    body {
        margin: 0 auto !important;
    }

    .box {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        width: 100%;
    }

    header,
    footer {
        height: 70px;
        background-color: #000;
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
    }

    .box-body {
        display: flex;
        flex: 1;
    }

    .box-content {
        flex: 1;
        background-color: white;
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