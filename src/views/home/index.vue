<template>
    <Header/>
    <div class="drag">
        <div class="drag-box">

            <!-- <div class="drag-text">
                <svg viewBox="0 0 24 24"><path d="M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z"></path></svg>
                <div class="top-text">选取文件到这里，支持拖拽文件和文件夹</div>
                <div class="desc">开源的批量图片压缩工具，支持 JPG/JPEG/PNG/WEBP/GIF/SVG/AVIF 格式</div>
            </div> -->
            <UploadCard/>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from "./components/header.vue";
import UploadCard from "@/components/UploadCard/index.vue";
</script>
<style scoped>

.drag{position: relative;padding: 100px 50px 50px 50px;height: 100%;box-sizing: border-box;}
.drag-box{border: 4px dotted #ddd;height: 100%;display: flex;align-items: center;justify-content: center;}
.drag-text{text-align: center;}
.drag-text svg{width: 60px;height: 60px;margin: 0 auto;fill: #1DA565}
.top-text{font-size: 24px;color: #000;font-weight: bold;}
.desc{color: #999}
</style>