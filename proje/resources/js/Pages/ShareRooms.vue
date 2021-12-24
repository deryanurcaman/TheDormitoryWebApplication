<template>
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Share Rooms
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <form class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
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
                  <div class="overflow-hidden sm:rounded-lg">
                    <form @submit.prevent="submit" class="space-y-8 divide-y divide-gray-200">
                      <div class="space-y-8 divide-y divide-gray-200">
                        <div>
                          <div>
                            <h3
                              class="
                                text-lg
                                leading-6
                                font-medium
                                text-black-900
                                text-gray-700
                              "
                            >
                              Add A New Room
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">
                              You can add a new room here.
                            </p>
                          </div>

                          <div
                            class="
                              mt-6
                              grid grid-cols-1
                              gap-y-6 gap-x-4
                              sm:grid-cols-6
                            "
                          >
                            <div class="sm:col-span-4">
                              <label
                                for="username"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Name
                              </label>
                              <div class="mt-1 flex rounded-md shadow-sm text-gray-700">
                                <input
                                  required
                                  v-model="form.name"
                                  type="text"
                                  name="username"
                                  id="username"
                                  autocomplete="username"
                                  class="
                                    flex-1
                                    focus:ring-indigo-500
                                    focus:border-indigo-500
                                    block
                                    w-full
                                    min-w-0
                                    rounded-none rounded-r-md
                                    sm:text-sm
                                    border-gray-300
                                  "
                                />
                              </div>
                            </div>
                            <div class="sm:col-span-4">
                              <label
                                for="username"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Capacity
                              </label>
                              <div class="mt-1 flex rounded-md shadow-sm text-gray-700">
                                <input
                                  required
                                  v-model="form.capacity"
                                  type="number"
                                  name="username"
                                  id="username"
                                  autocomplete="username"
                                  class="
                                    flex-1
                                    focus:ring-indigo-500
                                    focus:border-indigo-500
                                    block
                                    w-full
                                    min-w-0
                                    rounded-none rounded-r-md
                                    sm:text-sm
                                    border-gray-300
                                  "
                                />
                              </div>
                            </div>
                            <div class="sm:col-span-4">
                              <label
                                for="username"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Fee
                              </label>
                              <div class="mt-1 flex rounded-md shadow-sm text-gray-700">
                                <input
                                  required
                                  v-model="form.fee"
                                  type="number"
                                  name="username"
                                  id="username"
                                  autocomplete="username"
                                  class="
                                    flex-1
                                    focus:ring-indigo-500
                                    focus:border-indigo-500
                                    block
                                    w-full
                                    min-w-0
                                    rounded-none rounded-r-md
                                    sm:text-sm
                                    border-gray-300
                                  "
                                />
                              </div>
                            </div>

                            
                          </div>
                        </div>
                      </div>

                      <div class="pt-5">
                        <div class="flex justify-end">
                          <jet-button
                            class="ml-4"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                          >
                            Share
                          </jet-button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>


    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <form class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
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
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
              <tr v-for="(person, personIdx) in rooms" :key="person.id" :class="personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ person.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.capacity }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.fee }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";
import '@themesberg/flowbite';
import JetButton from "@/Jetstream/Button.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";



export default defineComponent({
  props: ["rooms"],
  components: {
    AppLayout,
    Welcome,
    JetButton,
    Head,
    Link,

  },
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        capacity: "",
        fee: "",
      }),
    };
  },
   methods: {
    submit() {
      this.form.post(this.route("rooms.store"));
    },
  },
});
</script>
