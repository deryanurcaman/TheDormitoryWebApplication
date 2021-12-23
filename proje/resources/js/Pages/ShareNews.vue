<template>
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Share News
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
                            Title
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
                            Date
                          </th>
                          <th scope="col" class="relative px-6 py-3">
                            <span class="sr-only">Delete</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(person, personIdx) in people"
                          :key="person.email"
                          :class="
                            personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          "
                        >
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm
                              font-medium
                              text-gray-900
                            "
                          >
                            {{ person.name }}
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500
                            "
                          >
                            {{ person.title }}
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500
                            "
                          >
                            {{ person.date }}
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-right text-sm
                              font-medium
                            "
                          >
                            <a
                              href="#"
                              class="text-indigo-600 hover:text-indigo-900"
                              >Delete</a
                            >
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
                    <form class="space-y-8 divide-y divide-gray-200">
                      <div class="space-y-8 divide-y divide-gray-200">
                        <div>
                          <div>
                            <h3
                              class="
                                text-lg
                                leading-6
                                font-medium
                                text-gray-900
                              "
                            >
                              Add A New News
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">
                              You can add a new news here.
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
                                Title
                              </label>
                              <div class="mt-1 flex rounded-md shadow-sm">
                                <input
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
                                Date
                              </label>
                              <div class="mt-1 flex rounded-md shadow-sm">
                                <input
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

                            <div class="sm:col-span-6">
                              <label
                                for="about"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Description
                              </label>
                              <div class="mt-1">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows="3"
                                  class="
                                    shadow-sm
                                    focus:ring-indigo-500
                                    focus:border-indigo-500
                                    block
                                    w-full
                                    sm:text-sm
                                    border border-gray-300
                                    rounded-md
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="pt-5">
                        <div class="flex justify-end">
                          <button
                            type="submit"
                            class="
                              ml-3
                              inline-flex
                              justify-center
                              py-2
                              px-4
                              border border-transparent
                              shadow-sm
                              text-sm
                              font-medium
                              rounded-md
                              text-white
                              bg-indigo-600
                              hover:bg-indigo-700
                              focus:outline-none
                              focus:ring-2
                              focus:ring-offset-2
                              focus:ring-indigo-500
                            "
                          >
                            Share
                          </button>
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
  </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";
import '@themesberg/flowbite';

const people = [
  { name: "News1", title: "Regional Paradigm Technician", date: "10.12.2021" },
  { name: "News2", title: "Product Directives Officer", date: "13.12.2021" },
  { name: "News3", title: "Officer Change", date: "08.11.2021" },
  // More people...
];
export default defineComponent({
  components: {
    AppLayout,
    Welcome,
  },
  setup() {
    return {
      people,
    };
  },
});
</script>
