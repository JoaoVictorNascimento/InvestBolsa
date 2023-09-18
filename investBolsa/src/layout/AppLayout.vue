<template>
    <a-layout class="layout">
        <a-layout-header>
            <div class="logo" />
        </a-layout-header>
        <a-layout-content>
            <div class="content-layout">
                <router-view />
            </div>
        </a-layout-content>
        <a-layout-footer>
            Copyright © 2023 InvestBolsa. 
        </a-layout-footer>
    </a-layout>
</template>

<style scoped lang="scss">
    .content-layout {
        padding: 24px;
        height: 100%;
    }
</style>