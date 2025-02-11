import { ref } from 'vue'
import type { Ref } from 'vue'
import type { UserInterface } from '@/types/User'

export function useUsers() {
    const users: Ref<UserInterface[]> = ref([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    async function fetchUsers() {
        loading.value = true
        error.value = null

        try {
            const response = await fetch('https://randomuser.me/api/?results=20')

            if (!response.ok) {
                throw new Error('Failed to fetch users')
            }

            const data = await response.json()
            users.value = data.results
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'An error occurred while fetching users'
            console.error('Error fetching users:', e)
        } finally {
            loading.value = false
        }
    }

    function refreshUsers() {
        return fetchUsers()
    }

    return {
        users,
        loading,
        error,
        fetchUsers,
        refreshUsers
    }
}