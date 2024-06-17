<script setup lang='ts'>
import { createImageList } from "@/engines/transform";
import { Mimes } from "@/mimes";
import { defineComponent } from "vue";


defineOptions({
  name: 'ImageInput'
})

const onChange = async (event) => {
    const files = event.target.files;
    if (!files?.length) {
        event.target.value = "";
        return;
    }
    const list: Array<File> = [];
    for (let index = 0; index < files.length; index++) {
        const file = files.item(index);
        if (file) {
            list.push(file);
        }
    }
    await createImageList(list);
    event.target.value = "";
}
const accept = () =>{
   return Object.keys(Mimes).map((item) => '.' + item).join(',')
}


</script>

<template>
    <input type="file" multiple class="style.file" :accept="accept" @change="onChange"/>
</template>

<style lang='scss' scoped>
.file {
  display: none;
}

</style>
