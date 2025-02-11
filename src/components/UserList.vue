<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="text-center py-8">Loading...</div>

    <div v-else>
      <div v-if="error" class="bg-red-100 text-red-700 p-4 mb-4 rounded">
        {{ error }}
      </div>

      <table class="w-full">
        <thead>
          <tr class="text-left border-b">
            <th class="pb-4 text-gray-500 font-medium">Date</th>
            <th class="pb-4 text-gray-500 font-medium">Name</th>
            <th class="pb-4 text-gray-500 font-medium">Gender</th>
            <th class="pb-4 text-gray-500 font-medium">Country</th>
            <th class="pb-4 text-gray-500 font-medium">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.login.uuid"
            class="border-b hover:bg-gray-50 cursor-pointer"
            @click="openUserModal(user)"
          >
            <td class="py-4">{{ formatDate(user.registered.date) }}</td>
            <td class="py-4">{{ `${user.name.first} ${user.name.last}` }}</td>
            <td class="py-4 capitalize">{{ user.gender }}</td>
            <td class="py-4">{{ user.location.country }}</td>
            <td class="py-4">{{ user.email }}</td>
          </tr>
        </tbody>
      </table>

      <div class="flex justify-center mt-8">
        <button
          @click="refreshUsers"
          class="bg-[#40BFD3] text-white px-6 py-2 rounded-lg hover:bg-[#3AADBF] transition-colors"
        >
          Refresh
        </button>
      </div>

      <UserModal
        v-if="selectedUser"
        :user="selectedUser"
        @close="selectedUser = null"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUsers } from "@/api/useUsers";
import { formatDate } from "@/utils/formatDate";
import type { UserInterface } from "@/types/User";
import UserModal from '@/components/UserModal.vue';

const selectedUser = ref<UserInterface | null>(null);
const { users, loading, error, refreshUsers } = useUsers();

function openUserModal(user: UserInterface) {
  selectedUser.value = user;
}

refreshUsers();
</script>
