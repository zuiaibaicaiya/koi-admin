<script setup lang="ts">
import { type FormInstance } from 'ant-design-vue';
import { reactive, useTemplateRef } from 'vue';
import type { UnwrapRef } from 'vue';

interface IProTableProps extends Record<any, any> {
  title: string;
  dataIndex: string;
  key: string;
}

interface IProTableState extends Record<any, any> {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface FormState {
  fieldA: string;
  fieldB: string;
}

const formState: UnwrapRef<FormState> = reactive({
  fieldA: '',
  fieldB: '',
});
const formRef = useTemplateRef<FormInstance>('formRef');
const props = defineProps<{
  columns: IProTableProps[],
  dataSource: IProTableState[],
}>();

function reset() {
  formRef.value?.resetFields();
}
</script>

<template>
  <a-form
    layout="horizontal"
    :model="formState" :labelCol="{ span: 4 }"
    :wrapperCol="{ span: 14 }"
    ref="formRef"
  >
    <a-form-item label="Field A" name="fieldA">
      <a-input v-model:value="formState.fieldA" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14 }">
      <a-space>
        <a-button htmlType="submit" type="primary">Submit</a-button>
        <a-button htmlType="reset" @click="reset">reset</a-button>

      </a-space>
    </a-form-item>
  </a-form>
  <a-table :columns="props.columns" :data-source="props.dataSource" />
</template>

<style scoped>

</style>