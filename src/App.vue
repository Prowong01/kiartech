<template>
  <User />
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import User from './components/User.vue';

const users = ref([]);
const searchQuery = ref("");
const selectedUser = ref(null);

const fetchUsers = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    users.value = response.data.results;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(searchQuery.value.toLowerCase());
  });
});

const openModal = (user) => {
  selectedUser.value = user;
};

fetchUsers();
</script>