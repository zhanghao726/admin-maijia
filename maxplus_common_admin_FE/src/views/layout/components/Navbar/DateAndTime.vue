<template>
    <div class="date-and">
        <span class="date">{{date}}</span>
        <span class="time">{{time}}</span>
    </div>
</template>

<script>
    import {lessthan10by0} from '@/utils/common';

    export default {
        name: 'DateAndTime',
        data() {
            return {
                date: '',
                time: ''
            }
        },
        mounted() {
            let $this = this;
            // 定时更改时间
            setInterval(function () {
                let myDate = new Date();
                $this.date = "";
                $this.date = myDate.getFullYear() + "-" + parseInt(myDate.getMonth() + 1) + "-" + myDate.getDay();
                $this.time = "";
                $this.time = myDate.getHours() + ":" + lessthan10by0(myDate.getMinutes()) + ":" + lessthan10by0(myDate.getSeconds());
            }, 1000);
        },
        methods: {}
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
