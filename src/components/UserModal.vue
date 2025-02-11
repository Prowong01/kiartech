<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
  >
    <div
      class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <div class="p-6">
        <div class="flex justify-between items-start mb-6">
          <div class="flex items-center space-x-4">
            <img
              :src="user.picture.large"
              :alt="`${user.name.first} ${user.name.last}`"
              class="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 class="text-2xl font-bold">
                {{ user.name.title }}. {{ user.name.first }}
                {{ user.name.last }}
              </h2>
              <p class="text-gray-600">{{ user.login.username }}</p>
            </div>
          </div>
          <button
            @click="$emit('close')"
            class="text-gray-500 hover:text-gray-700"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div class="space-y-6">
          <section>
            <h3 class="text-lg font-semibold mb-2">Contact Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-gray-600">Email</p>
                <p>{{ user.email }}</p>
              </div>
              <div>
                <p class="text-gray-600">Phone</p>
                <p>{{ user.phone }}</p>
              </div>
              <div>
                <p class="text-gray-600">Cell</p>
                <p>{{ user.cell }}</p>
              </div>
            </div>
          </section>

          <section>
            <h3 class="text-lg font-semibold mb-2">Location</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-gray-600">Street</p>
                <p>
                  {{ user.location.street.number }}
                  {{ user.location.street.name }}
                </p>
              </div>
              <div>
                <p class="text-gray-600">City</p>
                <p>{{ user.location.city }}</p>
              </div>
              <div>
                <p class="text-gray-600">State</p>
                <p>{{ user.location.state }}</p>
              </div>
              <div>
                <p class="text-gray-600">Country</p>
                <p>{{ user.location.country }}</p>
              </div>
              <div>
                <p class="text-gray-600">Timezone</p>
                <p>
                  {{ user.location.timezone.description }} ({{
                    user.location.timezone.offset
                  }})
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 class="text-lg font-semibold mb-2">Additional Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-gray-600">Date of Birth</p>
                <p>
                  {{ new Date(user.dob.date).toLocaleDateString() }} (Age:
                  {{ user.dob.age }})
                </p>
              </div>
              <div>
                <p class="text-gray-600">Registered</p>
                <p>{{ new Date(user.registered.date).toLocaleDateString() }}</p>
              </div>
              <div>
                <p class="text-gray-600">Nationality</p>
                <p>{{ user.nat }}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserInterface } from "../types/User";

defineProps<{
  user: UserInterface;
}>();

defineEmits<{
  (e: "close"): void;
}>();
</script>
