<template>
    <div class="hot-match">
        <div class="hot-match" v-html="matchList">
        </div>
        <div v-if="matchList.length === 0">
            <div class="no-data">暂无数据</div>
        </div>
    </div>
</template>
<script>
    import {httpUrl} from '../../config/api.js'
    export default {
        data() {
            return {
                matchList: ''
            }
        },
        created() {
             this.$http.get(httpUrl.match_url).then((res) => {
                var res_data = res.data;
                var data = res_data.data;
                var length = data.length;
                var tr1 = ""
                var thList = ["开盘时间", "主场球队", "盘口", "客场球队", "比分", "结果"]
                for (var h = 0; h < thList.length; h++) {
                    var thitem = thList[h]
                    var th = "<th>" + thitem + "</th>"
                    tr1 += th;
                }
                var tr_row = "<tr>" + tr1 + "</tr>";
                var table = '';
                for (var i=0; i<length; i++){
                    var dataI = data[i]
                    var saishi = dataI.m_status_time.slice(6,-3)
                    var saishi = saishi.split(" ");
                    var start_time = saishi[0] + '<br>' + saishi[1]
                    var team_a = dataI.m_home_team
                    var odds_num = dataI.m_change
                    var team_b = dataI.m_visiting_team
                    var recommend = dataI.m_recommend
                    var bifen = dataI.m_score
                    var result = dataI.m_result
                    if(team_a == recommend){
                        var tr = "<tr><td>" + start_time + "</td><td style='color:red'>" + team_a + "</td><td>" + odds_num + "</td><td>" + team_b + "</td><td>" + bifen + "</td><td style='color:red'>" + result + "</td></tr>";
                    }else{
                        var tr = "<tr><td>" + start_time + "</td><td>" + team_a + "</td><td>" + odds_num + "</td><td style='color:red'>" + team_b + "</td><td>" + bifen + "</td><td style='color:red'>" + result + "</td></tr>";
                    }
                    table += tr;
                }
                var all_table = "<table>" + tr1 + table + "</table>";
                this.matchList = all_table;
            });
        }
    }
</script>
<style scoped>
    .hot-match {
        padding-bottom: 8px;
    }
    .hot-match >>> table {
        width: 97%;
        margin: 2%;
        border-collapse: collapse;
    }
    .hot-match >>> table tr:nth-child(1) {
       background: #eeeeee;
    }
    .hot-match >>> table thead tr th:nth-child(1) {
        width:13%;
    }
    .hot-match >>> table thead tr th:nth-child(2) {
        width:16%;
    }
    .hot-match >>> table thead tr th:nth-child(3) {
        width:10%;
    }
    .hot-match >>> table thead tr th:nth-child(4) {
        width:19%;
      }
    .hot-match >>> table thead tr th:nth-child(5) {
        width:6%;
    }
    .hot-match >>> table thead tr th:nth-child(6) {
        width:12%;
    }
    .hot-match >>> th,
    .hot-match >>> td {
        height: 75px;
        line-height: 30px;
        font-size: 22px;
        color: black;
        text-align: center;
    }

    .hot-match >>> thead th {
        background-color: #eee;
    }
    .hot-match >>> a{
        color: red;
    }
    .no-data {
        color: #999 !important;
        text-align: center;
        width: 100%;
        height: 50px;
    }
</style>
