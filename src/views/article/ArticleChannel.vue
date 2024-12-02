<script setup>
import { artGetChannelsService,artDelChannelService } from '@/api/article';
import { Edit,Delete } from '@element-plus/icons-vue';
import ChannelEdit from './components/ChannelEdit.vue';
import {ref} from 'vue'

const loading = ref(false)
const dialog = ref()
const channelList = ref([])
const getChannelLsit =async ()=>{
    loading.value=true
    const res = await artGetChannelsService()
    channelList.value = res.data.data
    loading.value = false    
}

getChannelLsit()
const onEditChannel = (row)=>{
    dialog.value.open(row)
}


const onAddchannel = ()=>{
    dialog.value.open({})
}

const onSuccess = () => {
  getChannelLsit()
  
}

const onDelChannel = async (row) => {
  await ElMessageBox.confirm('你确认删除该分类信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await artDelChannelService(row.id)
  ElMessage({ type: 'success', message: '删除成功' })
  getChannelLsit()
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
        <el-button @click ="onAddchannel()" type="primary">添加分类</el-button>
    </template>
   
    <el-table v-loading="loading" :data="channelList" style="width:100%">
        <el-table-column type="index" label ="序号" width="100"></el-table-column>
        <el-table-column label ="分类名称" prop="cate_name"></el-table-column>
        <el-table-column label ="分类别名" prop="cate_alias"></el-table-column>
        <el-table-column label ="操作" width="100">
            <template #default="{row}">
                <el-button :icon="Edit"
                circle
                plain
                type="primary"
                @click="onEditChannel(row)"
                ></el-button>
                <el-button :icon="Delete"
                circle
                plain
                type="danger"
                @click="onDelChannel(row)"
                ></el-button>

            </template>
        </el-table-column>
        <template #empty >
            <el-empty description = '没有数据'></el-empty>
        </template>
    </el-table>

    <channel-edit ref="dialog" @success="onSuccess" ></channel-edit> 
     </page-container>
</template>


<style lang="scss" scoped>

</style>