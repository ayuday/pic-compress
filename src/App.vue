
<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>


<script  lang="ts">
import { defineComponent, computed } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

// const currentLocale = computed(()=>zhCn);
export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  computed: {
    currentLocale() {
      return zhCn;
    }
  }
});
</script>


