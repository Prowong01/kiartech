<template>
  <User />
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import User from './components/User.vue';

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    users.value = response.data.results;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

fetchUsers();
</script>