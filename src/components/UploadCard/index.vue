<script setup lang='ts'>
import { watchEffect, ref } from "vue";
import classNames from "classnames";
import { gstate } from "@/global";
import ImageInput from "../ImageInput/index.vue";
import { useDragStore } from "@/store/index";
import { createImageList } from "@/engines/transform";
import { getFilesFromEntry, getFilesFromHandle } from "@/functions";
import { sprintf } from "sprintf-js";
import { Mimes } from "@/mimes";

const useDrag = useDragStore();

defineOptions({
  name: 'UploadCard'
})

const fileRef = ref<HTMLInputElement>(null);
const dragRef = ref<HTMLDivElement>(null);

watchEffect(()=>{
  const dragLeave = () => {
    useDrag.dragActive = false;
  };

  const dragOver = (event: DragEvent) => {
    event.preventDefault();
    useDrag.dragActive = true;
  };

  const drop = async (event: DragEvent) => {
    event.preventDefault();
    useDrag.dragActive = false;
    const files: Array<File> = [];
      
    if (event.dataTransfer?.items) {
      // https://stackoverflow.com/questions/55658851/javascript-datatransfer-items-not-persisting-through-async-calls
      const list: Array<Promise<void>> = [];
      for (const item of event.dataTransfer.items) {
        if (typeof item.getAsFileSystemHandle === "function") {
          list.push(
            (async () => {
              const handle = await item.getAsFileSystemHandle!();
              const result = await getFilesFromHandle(handle);
              files.push(...result);
            })(),
          );
          continue;
        }
        if (typeof item.webkitGetAsEntry === "function") {
          list.push(
            (async () => {
              const entry = await item.webkitGetAsEntry();
              if (entry) {
                const result = await getFilesFromEntry(entry);
                files.push(...result);
              }
            })(),
          );
        }
      }
      await Promise.all(list);
    } else if (event.dataTransfer?.files) {
      const list = event.dataTransfer?.files;
      for (let index = 0; index < list.length; index++) {
        const file = list.item(index);
        file && files.push(file);
        if (file) {
          files.push(file);
        }
      }
    }

    files.length > 0 && createImageList(files);

  };
  const onClick = (fileRef) =>{
    return fileRef.current;
  }

  const target = dragRef;
  target.addEventListener("dragover", dragOver);
  target.addEventListener("dragleave", dragLeave);
  target.addEventListener("drop", drop);

  return () => {
    target.removeEventListener("dragover", dragOver);
    target.removeEventListener("dragleave", dragLeave);
    target.removeEventListener("drop", drop);
  };

})
</script>

<template>
  <div>test</div>
  <div class="drag-text">
      <svg viewBox="0 0 24 24"><path d="M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z"></path></svg>
      <div class="top-text">选取文件到这里，支持拖拽文件和文件夹</div>
      <div class="desc">{gstate.locale?.uploadCard.title}</div>
  </div>

  <ImageInput ref={fileRef} />
  <div className={style.mask} ref={dragRef} @click=onClick></div>
</template>

<style lang='scss' scoped>
.container {
  width: 100%;
  position: relative;
  cursor: pointer;
  user-select: none;
  background-color: #f5f5f5;
  overflow: hidden;
  box-sizing: border-box;
  &:active {
    background-color: darken($color: #f5f5f5, $amount: 5);
  }
  > input {
    display: none;
  }

  &.active {
    background-color: darken($color: #f5f5f5, $amount: 5);
  }
}

.inner {
  line-height: 1;
  svg {
    width: 60px;
    height: 60px;
    path {
      fill: #1da565;
    }
  }
  > span:nth-child(2) {
    margin-top: 16px;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    padding: 0 16px;
  }
  > div:nth-child(3) {
    margin-top: 8px;
    color: #aaa;
    text-align: center;
    padding: 0 16px;
    line-height: 1.6;
  }
}

.mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

</style>
