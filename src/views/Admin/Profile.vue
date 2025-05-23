<template>
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold tracking-tight">Thông tin cá nhân</h1>
        <div class="flex items-center space-x-2">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center" @click="isEditing = true" v-if="!isEditing">
            <Edit class="mr-2 h-4 w-4" />
            Chỉnh sửa
          </button>
        </div>
      </div>
  
      <!-- Profile Summary -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <div class="flex flex-col items-center">
            <div class="relative">
              <div class="h-24 w-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <img v-if="userProfile.avatar" :src="userProfile.avatar" alt="Avatar" class="h-full w-full object-cover" />
                <User v-else class="h-12 w-12 text-gray-500 dark:text-gray-400" />
              </div>
              <button v-if="isEditing" class="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                <Camera class="h-4 w-4" />
              </button>
            </div>
            <h2 class="mt-4 text-xl font-bold">{{ userProfile.fullName }}</h2>
            <p class="text-sm text-gray-500">{{ userProfile.email }}</p>
            <div class="mt-2 px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs rounded-full">
              {{ getStatusText(userProfile.status) }}
            </div>
            <div class="mt-4 w-full border-t border-gray-200 dark:border-gray-700 pt-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-500">Mã cư dân</span>
                <span class="font-medium">{{ userProfile.residentId }}</span>
              </div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-gray-500">Căn hộ</span>
                <span class="font-medium">{{ userProfile.apartment }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">Ngày đăng ký</span>
                <span class="font-medium">{{ userProfile.registrationDate }}</span>
              </div>
            </div>
          </div>
        </div>
  
        <div class="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <h3 class="text-lg font-medium mb-4">{{ isEditing ? 'Chỉnh sửa thông tin' : 'Thông tin chi tiết' }}</h3>
          
          <form v-if="isEditing" @submit.prevent="saveProfile">
            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="fullName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Họ và tên</label>
                  <input 
                    id="fullName" 
                    type="text" 
                    v-model="editedProfile.fullName"
                    class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    v-model="editedProfile.email"
                    class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Số điện thoại</label>
                  <input 
                    id="phone" 
                    type="text" 
                    v-model="editedProfile.phone"
                    class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label for="idNumber" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Số CMND/CCCD</label>
                  <input 
                    id="idNumber" 
                    type="text" 
                    v-model="editedProfile.idNumber"
                    class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  />
                </div>
              </div>
              
              <div>
                <label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Địa chỉ</label>
                <input 
                  id="address" 
                  type="text" 
                  v-model="editedProfile.address"
                  class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                />
              </div>
              
              <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 class="text-md font-medium mb-2">Đổi mật khẩu</h4>
                <div class="space-y-4">
                  <div>
                    <label for="currentPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mật khẩu hiện tại</label>
                    <div class="relative">
                      <input 
                        id="currentPassword" 
                        :type="showPassword.current ? 'text' : 'password'" 
                        v-model="passwordChange.current"
                        class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      />
                      <button 
                        type="button" 
                        class="absolute right-3 top-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        @click="togglePasswordVisibility('current')"
                      >
                        <Eye v-if="showPassword.current" class="h-5 w-5" />
                        <EyeOff v-else class="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label for="newPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mật khẩu mới</label>
                    <div class="relative">
                      <input 
                        id="newPassword" 
                        :type="showPassword.new ? 'text' : 'password'" 
                        v-model="passwordChange.new"
                        class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      />
                      <button 
                        type="button" 
                        class="absolute right-3 top-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        @click="togglePasswordVisibility('new')"
                      >
                        <Eye v-if="showPassword.new" class="h-5 w-5" />
                        <EyeOff v-else class="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Xác nhận mật khẩu mới</label>
                    <div class="relative">
                      <input 
                        id="confirmPassword" 
                        :type="showPassword.confirm ? 'text' : 'password'" 
                        v-model="passwordChange.confirm"
                        class="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      />
                      <button 
                        type="button" 
                        class="absolute right-3 top-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        @click="togglePasswordVisibility('confirm')"
                      >
                        <Eye v-if="showPassword.confirm" class="h-5 w-5" />
                        <EyeOff v-else class="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="flex justify-end space-x-2 pt-4">
                <button 
                  type="button" 
                  class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                  @click="cancelEdit"
                >
                  Hủy
                </button>
                <button 
                  type="submit" 
                  class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </form>
          
          <div v-else class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-500">Họ và tên</p>
                <p class="font-medium">{{ userProfile.fullName }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Email</p>
                <p class="font-medium">{{ userProfile.email }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Số điện thoại</p>
                <p class="font-medium">{{ userProfile.phone }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Số CMND/CCCD</p>
                <p class="font-medium">{{ userProfile.idNumber }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Địa chỉ</p>
                <p class="font-medium">{{ userProfile.address }}</p>
              </div>
            </div>
            
            <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h4 class="text-md font-medium mb-2">Thông tin bổ sung</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-500">Số xe đã đăng ký</p>
                  <p class="font-medium">{{ userProfile.registeredVehicles }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Loại cư dân</p>
                  <p class="font-medium">{{ userProfile.residentType }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Account Activity -->
      <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-medium">Hoạt động tài khoản gần đây</h3>
        </div>
        <div class="p-4">
          <div class="space-y-4">
            <div v-for="(activity, index) in accountActivities" :key="index" class="flex items-start space-x-3">
              <div :class="`h-8 w-8 rounded-full flex items-center justify-center ${activity.iconBg}`">
                <component :is="activity.icon" class="h-4 w-4" :class="activity.iconColor" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium">{{ activity.title }}</p>
                <p class="text-xs text-gray-500">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, reactive, computed } from 'vue'
  import { 
    User, 
    Edit, 
    Camera, 
    Eye, 
    EyeOff, 
    LogIn, 
    Settings, 
    Key, 
    AlertTriangle 
  } from 'lucide-vue-next'
  
  export default {
    name: 'ResidentProfile',
    components: {
      User,
      Edit,
      Camera,
      Eye,
      EyeOff,
      LogIn,
      Settings,
      Key,
      AlertTriangle
    },
    setup() {
      const isEditing = ref(false)
      
      // User profile data
      const userProfile = ref({
        residentId: 'RES-001',
        fullName: 'Nguyễn Văn A',
        email: 'nguyenvana@example.com',
        phone: '0912345678',
        idNumber: '012345678901',
        address: 'Số 123, Đường ABC, Quận XYZ, Hà Nội',
        apartment: 'A1201',
        registrationDate: '15/01/2023',
        status: 'approved',
        avatar: null,
        registeredVehicles: 2,
        residentType: 'Chủ hộ'
      })
      
      // Edited profile data
      const editedProfile = ref({...userProfile.value})
      
      // Password change data
      const passwordChange = ref({
        current: '',
        new: '',
        confirm: ''
      })
      
      // Show password toggles
      const showPassword = reactive({
        current: false,
        new: false,
        confirm: false
      })
      
      // Account activities
      const accountActivities = ref([
        {
          title: 'Đăng nhập thành công',
          time: '24/04/2023 - 10:25',
          icon: LogIn,
          iconBg: 'bg-green-100',
          iconColor: 'text-green-600'
        },
        {
          title: 'Thay đổi mật khẩu',
          time: '20/04/2023 - 15:30',
          icon: Key,
          iconBg: 'bg-blue-100',
          iconColor: 'text-blue-600'
        },
        {
          title: 'Cập nhật thông tin cá nhân',
          time: '15/04/2023 - 09:45',
          icon: Settings,
          iconBg: 'bg-purple-100',
          iconColor: 'text-purple-600'
        },
        {
          title: 'Đăng nhập thất bại',
          time: '10/04/2023 - 18:20',
          icon: AlertTriangle,
          iconBg: 'bg-red-100',
          iconColor: 'text-red-600'
        },
        {
          title: 'Đăng nhập thành công',
          time: '10/04/2023 - 18:25',
          icon: LogIn,
          iconBg: 'bg-green-100',
          iconColor: 'text-green-600'
        }
      ])
      
      // Get status text
      function getStatusText(status) {
        switch (status) {
          case 'pending':
            return 'Chờ phê duyệt'
          case 'approved':
            return 'Đã phê duyệt'
          case 'rejected':
            return 'Bị từ chối'
          default:
            return status
        }
      }
      
      // Toggle password visibility
      function togglePasswordVisibility(field) {
        showPassword[field] = !showPassword[field]
      }
      
      // Cancel edit
      function cancelEdit() {
        editedProfile.value = {...userProfile.value}
        passwordChange.value = {
          current: '',
          new: '',
          confirm: ''
        }
        isEditing.value = false
      }
      
      // Save profile
      function saveProfile() {
        // In a real app, you would send the data to the server here
        // For demo purposes, we'll just update the local data
        userProfile.value = {...editedProfile.value}
        
        // Handle password change if provided
        if (passwordChange.value.current && 
            passwordChange.value.new && 
            passwordChange.value.confirm && 
            passwordChange.value.new === passwordChange.value.confirm) {
          // Password change logic would go here
          console.log('Password changed')
        }
        
        isEditing.value = false
      }
      
      return {
        isEditing,
        userProfile,
        editedProfile,
        passwordChange,
        showPassword,
        accountActivities,
        getStatusText,
        togglePasswordVisibility,
        cancelEdit,
        saveProfile
      }
    }
  }
  </script>