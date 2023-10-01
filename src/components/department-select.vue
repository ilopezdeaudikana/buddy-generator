<script setup lang="ts">
interface DepartmentSelectProps {
  modelValue: string
}
defineProps<DepartmentSelectProps>()
defineEmits(['update:model-value'])

// A request wouldn't hurt
const departmentOptions: { label: string; value: string }[] = [
  { label: 'Farming Function', value: 'Farming Function' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Sales', value: 'Sales' },
  { label: 'Finance', value: 'Finance' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Board', value: 'Board' },
  { label: 'Advisors', value: 'Advisors' },
  { label: 'Legal', value: 'Legal' },
  { label: 'Business Operations', value: 'Business Operations' },
  { label: 'Recruiting', value: 'Recruiting' },
  { label: 'Payroll', value: 'Payroll' },
  { label: 'Cat', value: 'Cat' }
]
</script>
<template>
  <label class="sub-title">New team member's department</label>
  <select
    :model-value="modelValue"
    @change="$emit('update:model-value', ($event.currentTarget as HTMLSelectElement)?.value)"
    class="select"
  >
    <option v-if="!modelValue">Please select a department</option>
    <option v-for="{ value, label } in departmentOptions" :value="value" :key="value">
      {{ label }}
    </option>
  </select>
</template>
<style scoped>
.sub-title {
  display: block;
  padding-bottom: 16px;
  font-weight: 600;
}
.select {
  height: 32px;
  width: 320px;
  font-size: 16px;
  margin-bottom: 16px;
}

@media (max-width: 420px) {
  .select {
    width: 90%;
  }
}
</style>
