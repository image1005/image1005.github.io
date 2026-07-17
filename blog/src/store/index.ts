import { ref } from 'vue'

export interface SearchResult {
  slug: string
  title: string
  content: string
  rank?: number
}

const sidebarOpen = ref(false)
const searchbarOpen = ref(false)
const activeNoteSlug = ref<string | null>(null)
const searchQuery = ref('')
const searchResults = ref<SearchResult[]>([])
const isSearching = ref(false)
const showResults = ref(false)

export const useAppStore = () => {
  const toggleSidebar = () => { sidebarOpen.value = !sidebarOpen.value }
  const toggleSearchbar = () => {
    searchbarOpen.value = !searchbarOpen.value
    if (!searchbarOpen.value) { showResults.value = false; searchQuery.value = '' }
  }
  const search = async (query: string) => {
    if (!query.trim()) { searchResults.value = []; showResults.value = false; return }
    isSearching.value = true
    showResults.value = true
    try {
      const { searchNotes } = await import('@/db/search')
      searchResults.value = await searchNotes(query)
    } catch { searchResults.value = [] }
    finally { isSearching.value = false }
  }
  const clearSearch = () => {
    searchQuery.value = ''; searchResults.value = []; showResults.value = false
  }
  return { toggleSidebar, toggleSearchbar, search, clearSearch, activeNoteSlug,
    sidebarOpen, searchbarOpen, searchQuery, searchResults, isSearching, showResults }
}
