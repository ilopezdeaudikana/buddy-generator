<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { TeamService } from '../services/team.service'
import DepartmentSelect from './department-select.vue'

import type Member from '../types/member'

const team: Ref<Member[]> = ref([])
const selected: Ref<Member | null> = ref(null)
const department: Ref<string> = ref('')

const selectRandomPerson = (): Member => {
  const index = Math.floor(Math.random() * team.value.length)
  const newDepartment = team.value?.[index].departments?.[0].toLowerCase().trim()
  if (newDepartment && newDepartment === department.value.toLowerCase().trim())
    return selectRandomPerson()
  return team.value?.[index]
}

const generate = async () => {
  if (!team.value.length) {
    const response = await TeamService.getTeams()
    team.value = response.data.value
  }
  const newPerson = selectRandomPerson()
  selected.value = newPerson
}
</script>

<template>
  <div class="block">
    <DepartmentSelect v-model="department" />
    <p
      >We want to help you select a buddy from a different department so that your new team member
      can get to know other people in the company.</p
    >
    <button class="generate-btn" @click="generate">Generate buddy</button>
  </div>
  <div v-if="selected" :class="['selected-buddy', 'block']">
    <span class="label">Your randomly selected onboarding buddy is:</span>
    <div class="row">
      <div class="image-container">
        <img
          :key="selected.name"
          class="img"
          alt="Buddy image"
          :src="selected.picture"
        />
      </div>
      <span>
        {{ selected.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.generate-btn {
  display: block;
  margin-top: 16px;
  background: #1aaa55;
  border: 1px solid #168f48;
  border-radius: 5px;
  color: white;
  height: 32px;
  font-size: 16px;
}

.selected-buddy {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .label {
    font-weight: 600;
  }
  .image-container {
    width: 32px;
    .img {
      width: 32px;
      height: 32px;
      border-radius: 16px;
    }
  }
}

@media (max-width: 580px) {
  .selected-buddy { 
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
