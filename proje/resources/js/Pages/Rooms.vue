<template>
<div>
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Rooms</h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="
                  py-2
                  align-middle
                  inline-block
                  min-w-full
                  sm:px-6
                  lg:px-8
                "
              >
                <div
                  class="
                    shadow
                    overflow-hidden
                    border-b border-gray-200
                    sm:rounded-lg
                  "
                >
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Capacity
                        </th>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Fee
                        </th>
                        <th
                          scope="col"
                          class="
                            px-6
                            py-3
                            text-left text-xs
                            font-medium
                            text-gray-500
                            uppercase
                            tracking-wider
                          "
                        >
                          Occupancy
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                Room 1
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            1 People
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                          >
                            Private
                          </span>
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          130$ per month
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          No Space
                        </td>
                      </tr>

                      <!-- More people... -->
                    </tbody>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                Room 2
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            3 People
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                          >
                            General
                          </span>
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          250$ per month
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          1/3 People
                        </td>
                        
                      </tr>

                      <!-- More people... -->
                    </tbody>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                Room 3
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            2 People
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                          >
                            Private
                          </span>
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          180$ per month
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          1/2 People
                        </td>
                        
                      </tr>

                      <!-- More people... -->
                    </tbody>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                Room 4
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900">
                            4 People
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <span
                            class="
                              px-2
                              inline-flex
                              text-xs
                              leading-5
                              font-semibold
                              rounded-full
                              bg-green-100
                              text-green-800
                            "
                          >
                            General
                          </span>
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          100$ per month
                        </td>
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm text-gray-500
                          "
                        >
                          2/4 People
                        </td>
                        
                      </tr>

                      <!-- More people... -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-layout>
  <button class="btn"> </button>
</div>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";

export default defineComponent({
  components: {
    AppLayout,
    Welcome,
  },
});
</script>
