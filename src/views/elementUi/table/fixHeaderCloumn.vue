<template>
    <el-table
            :data="tableData3"
            border
            style="width: 100%"
            height="250">
        <el-table-column
                fixed
                prop="date"
                label="日期"
                width="150">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="120">
        </el-table-column>
        <el-table-column
                prop="province"
                label="省份"
                width="120">
        </el-table-column>
        <el-table-column
                prop="city"
                label="市区"
                width="120">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址"
                width="300">
        </el-table-column>
        <el-table-column
                prop="zip"
                label="邮编"
                width="120">
        </el-table-column>
        <el-table-column
                prop="sex"
                label="性别"
                width="120">
        </el-table-column>
        <el-table-column
                prop="introduce"
                label="自我介绍"
                width="1300">
        </el-table-column>
        <el-table-column
                prop="salary"
                label="工资待遇"
                width="120">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template scope="scope">
                <el-button @click="handleClick" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData3: [{
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    sex:"男",
                    salary:"10kk",
                    introduce:"葫芦娃是动画片《葫芦兄弟》的主角，每一个的都本领超群，为救亲人前赴后继，与妖精们战斗，受广大观众尤其是少年儿童们的喜爱，成为80后和90后的经典。",

                }]
            }
        }
    }
</script>