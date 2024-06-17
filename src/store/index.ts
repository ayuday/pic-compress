import { defineStore } from 'pinia'

export interface UploadCardState {
    dragActive: boolean;
  }

export const useDragStore = defineStore('dragStore', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => ({
    dragActive: false
  })
})
