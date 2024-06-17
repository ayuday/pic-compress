<script setup lang='ts'>
import { goto } from "@/history";
import { gstate } from "@/global";
</script>

<template>
  <Button
      type="primary"
      onClick={() => {
        goto("/", null, "replace");
      }}
    >
      {gstate.locale?.error404.backHome}
    </Button>
  <Flex className={style.container} align="center" justify="center">
      
    </Flex>
  <Result
        status="404"
        title="404"
        subTitle={gstate.locale?.error404.description}
        extra={backToHome}
      />
</template>

<style lang='scss' scoped>
.container {
  height: 100vh;
  width: 100vw;
}

</style>
