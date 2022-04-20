<template>
  <div class="login_content">
    <div class="form_content">
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Password" prop="phone">
          <el-input v-model="ruleForm.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Confirm" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { useRouter } from 'vue-router';
import { getList } from '@/api/getData';

const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const validatePhone = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请输入账号'));
  }
  callback();
};
const validatePassword = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请输入登陆密码'));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  phone: '',
  password: '',
});

const rules = reactive({
  phone: [{ validator: validatePhone, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      const res = getList();
      console.log(res);

      // router.push('/layout')
    } else {
      console.log('error submit!');
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss">
.login_content {
  position: relative;
  height: 100vh;
  background: url(../../assets/bg/bg1.jpeg) no-repeat center;
  background-size: cover;

  .form_content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    transform: translate(-50%, -50%);

    .el-form-item__label {
      color: steelblue;
    }
  }

}
</style>
