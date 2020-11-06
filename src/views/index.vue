<template>
    <div id="main">
        <a-layout>
            <a-layout-header>
                <div class="navigation-inner">
                    <div class="headerNav">
                        <ul>
                            <ul>
                                <li :class="key.id===1?'nav-up-selected-inpage':''" :_t_nav="key.icon" v-for="(key,value) in navList">
                                    <h2><a href="#">{{key.name}}</a></h2>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div class="navigation-down">
                    <div :id="key.id" :_t_nav="key.id" :class="key.name!=''?'nav-down-menu menu-1':'nav-down-menu menu-3 menu-1'" style="display: none;" v-for="(key,value) in navDetailList">
                        <div class="navigation-down-inner" v-if="key.name!=''">
                            <dl :style="{'margin-left':value===0?'235px':'0px'}" v-for="(key,value) in key.children">
                                <dt>{{key.label}}</dt>
                                <dd v-for="(key,value) in key.children">
                                    <a :href="key.href" class="link">{{key.label}}</a>
                                </dd>
                            </dl>
                        </div>
                        <div class="navigation-down-inner" v-else>
                            <dl :style="{'margin-left':value===0?'235px':'0px'}" v-for="(key,value) in key.children">
                                <dd><a :href="key.href" class="link">{{key.label}}</a></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </a-layout-header>
            <a-layout-content>Content</a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
    $(function() {
        var qcloud = {};
        $('[_t_nav]').hover(function() {
            var _nav = $(this).attr('_t_nav');
            clearTimeout(qcloud[_nav + '_timer']);
            qcloud[_nav + '_timer'] = setTimeout(function() {
                $('[_t_nav]').each(function() {
                    $(this)[_nav == $(this).attr('_t_nav') ? 'addClass' : 'removeClass']('nav-up-selected');
                });
                $('#' + _nav).stop(true, true).slideDown(200);
            }, 150);
            console.log('鼠标移入')
        }, function() {
            var _nav = $(this).attr('_t_nav');
            clearTimeout(qcloud[_nav + '_timer']);
            qcloud[_nav + '_timer'] = setTimeout(function() {
                $('[_t_nav]').removeClass('nav-up-selected');
                $('#' + _nav).stop(true, true).slideUp(200);
            }, 150);
            console.log('鼠标离开')
        });
    })
    export default {
        name: 'index',
        data() {
            return {
                navList: [{
                    id: 1,
                    icon: 'home',
                    name: '首页'
                }, {
                    id: 2,
                    icon: 'oa',
                    name: 'OA模块'
                }, {
                    id: 3,
                    icon: 'system',
                    name: '系统设置'
                }, {
                    id: 4,
                    icon: 'cw',
                    name: '财务模块'
                }, {
                    id: 5,
                    icon: 'crm',
                    name: 'CRM模块'
                }],
                navDetailList: [{
                        id: 'crm',
                        name: '',
                        children: [{
                            id: 1,
                            label: '客户列表',
                            href: '#',
                            icon: ''
                        }, {
                            id: 2,
                            label: '新建客户',
                            href: '#',
                            icon: ''
                        }, {
                            id: 3,
                            label: '合同管理',
                            href: '#',
                            icon: ''
                        }]
                    },
                    {
                        id: 'cw',
                        name: '',
                        children: [{
                            id: 1,
                            label: '开票列表',
                            href: '#',
                            icon: ''
                        }]
                    },
                    {
                        id: 'system',
                        name: '系统设置',
                        children: [{
                                id: 1,
                                label: '用户管理',
                                icon: '',
                                children: [{
                                    id: 1,
                                    href: '#',
                                    label: '用户列表'
                                }, {
                                    id: 2,
                                    href: '#',
                                    label: '新增用户'
                                }]
                            },
                            {
                                id: 2,
                                label: '角色管理',
                                icon: '',
                                children: [{
                                    id: 1,
                                    href: '#',
                                    label: '角色列表'
                                }, {
                                    id: 2,
                                    href: '#',
                                    label: '新增角色'
                                }]
                            },
                            {
                                id: 3,
                                label: '模块管理',
                                icon: '',
                                children: [{
                                    id: 1,
                                    href: '#',
                                    label: '模块列表'
                                }, {
                                    id: 2,
                                    href: '#',
                                    label: '新增模块'
                                }]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
<style scope>
    body {
        font-size: 11px;
    }

    li {
        list-style: none
    }

    a:link,
    a:visited {
        text-decoration: none
    }

    #main {
        text-align: center;
    }

    #main .ant-layout-header,
    #main .ant-layout-footer {
        background: #27303f;
        color: #fff;
        z-index: 999;
        height: 60px;
    }

    #main .ant-layout-footer {
        line-height: 1.5;
    }

    #main .ant-layout-content {
        background: #fff;
        color: #000;
        min-height: 804px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navigation-inner {
        margin: 0 auto;
        position: relative;
        width: 980px;
        height: 100%;
    }

    .headerNav {
        height: 100%;
        float: left;
    }

    .headerNav ul {
        float: left;
        height: 60px;
    }

    .headerNav ul ul li {
        float: left;
        height: 100%;
        line-height: 60px;
    }

    .navigation-inner .headerNav .nav-up-selected-inpage {
        background-color: #202833;
    }

    .headerNav .nav-up-selected {
        background: #344157
    }

    .headerNav ul ul li h2 a {
        padding: 0 25px;
        color: #fff;
        display: inline-block;
        height: 60px;
        font-family: "microsoft yahei"
    }

    .navigation-down {
        position: absolute;
        top: 60px;
        left: 0px;
        width: 100%;
    }

    .navigation-down .nav-down-menu {
        width: 100%;
        margin: 0;
        background: #344157;
        position: absolute;
        top: 0px
    }

    .navigation-down .nav-down-menu .navigation-down-inner {
        margin: auto;
        width: 1200px;
        position: relative
    }

    .navigation-down .nav-down-menu dl {
        float: left;
        margin: 18px 80px 18px 0
    }

    .navigation-down .menu-1 dl {
        margin: 20px 80px 25px 0
    }

    .navigation-down .menu-1 dt {
        font: normal 16px "microsoft yahei";
        color: #61789e;
        padding-bottom: 10px;
        border-bottom: 1px solid #61789e;
        margin-bottom: 10px
    }

    .navigation-down .menu-1 dd {
        height: 30px;
    }

    .navigation-down .menu-1 dd a {
        color: #fff;
        font: normal 14px/30px "microsoft yahei"
    }

    .navigation-down .menu-1 dd a:hover {
        color: #60aff6
    }

    .navigation-down .menu-2 dd a,
    .navigation-down .menu-3 dd a {
        color: #fff;
        font: normal 16px "microsoft yahei"
    }
</style>