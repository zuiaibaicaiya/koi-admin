<script setup lang="ts">
import { Table, Form, FormItem, Input, Button, Space, type FormInstance } from 'ant-design-vue';
import type { IProTableProps, IProTableState } from '../index.ts';
import { reactive, useTemplateRef } from 'vue';
import type { UnwrapRef } from 'vue';

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
  <Form
    layout="horizontal"
    :model="formState" :labelCol="{ span: 4 }"
    :wrapperCol="{ span: 14 }"
    ref="formRef"
  >
    <FormItem label="Field A" name="fieldA">
      <Input v-model:value="formState.fieldA" placeholder="input placeholder" />
    </FormItem>
    <FormItem :wrapper-col="{ span: 14 }">
      <Space>
        <Button htmlType="submit" type="primary">Submit</Button>
        <Button htmlType="reset" @click="reset">reset</Button>

      </Space>
    </FormItem>
  </Form>
  <Table :columns="props.columns" :data-source="props.dataSource" />
</template>

<style scoped>

</style>