<script setup>
import {artGetChannelsService} from '@/api/article'
import {ref} from 'vue'


defineProps({
  modelValue: {
    type: [Number, String]
  }
})

const emit = defineEmits(['update:modelValue'])
const channelList = ref([])

const getChannelLsit =async ()=>{
    const res =await artGetChannelsService()
    channelList.value = res.data.data
}

getChannelLsit()


</script>

<template>
    <el-select :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)">
        <el-option v-for="channel in channelList" 
        :label="channel.cate_name" 
        :value="channel.id"
        key="channel.id"
        >
        </el-option>
    </el-select>
</template>