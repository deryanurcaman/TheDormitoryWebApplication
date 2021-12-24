<template>
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Messages
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <form class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div class="py-12">
                <div>
                  <h2 class="text-lg leading-6 font-medium text-gray-900">
                    Inbox
                  </h2>
                  <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    You can see your messages here.
                  </p>
                </div>
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div class="sm:rounded-lg">
                    <!-- This example requires Tailwind CSS v2.0+ -->

                    <ul
                      role="list"
                      class="
                        grid grid-cols-1
                        gap-6
                        sm:grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        sm:border-t sm:border-gray-200
                      "
                    >
                      <li
                        v-for="person in people"
                        :key="person.email"
                        class="
                          col-span-1
                          flex flex-col
                          text-center
                          bg-white
                          rounded-lg
                          shadow
                          divide-y divide-gray-200
                          mt-5
                        "
                      >
                        <div class="flex-1 flex flex-col p-8">
                          <h2 class="mt-6 text-gray-900 text-xl font-medium">
                            From: {{ person.title }}
                          </h2>
                          <dl
                            class="mt-1 flex-grow flex flex-col justify-between"
                          >
                            <dt class="sr-only">Title</dt>
                            <dd class="text-gray-500 text-sm">
                              {{ person.description }}
                            </dd>
                            <dt class="sr-only">Role</dt>
                            <dd class="mt-3">
                              <span
                                class="
                                  px-2
                                  py-1
                                  text-green-800 text-xs
                                  font-medium
                                  bg-green-100
                                  rounded-full
                                "
                                >{{ person.date }}</span
                              >
                            </dd>
                          </dl>
                        </div>
                        <div></div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="py-12 mt-10">
                  <div>
                    <h2 class="text-lg leading-6 font-medium text-gray-900">
                      Send A Message
                    </h2>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      First, you need to choose a student and then write your
                      message.
                    </p>
                  </div>
                  <div
                    class="
                      sm:grid
                      sm:grid-cols-3
                      sm:gap-4
                      sm:items-start
                      sm:border-t
                      sm:border-gray-200
                      sm:pt-5
                    "
                  >
                    <label
                      for="country"
                      class="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      "
                    >
                      Select a Student
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2 text-gray-700">
                      <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        class="
                          max-w-lg
                          block
                          focus:ring-indigo-500 focus:border-indigo-500
                          w-full
                          shadow-sm
                          sm:max-w-xs sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                      >
                        <option>Derya Nur</option>
                        <option>Mr Lotiches</option>
                      </select>
                    </div>
                    <label
                      for="about"
                      class="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      "
                    >
                      Write a Message
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2 text-gray-700">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        class="
                          max-w-lg
                          shadow-sm
                          block
                          w-full
                          focus:ring-indigo-500 focus:border-indigo-500
                          sm:text-sm
                          border border-gray-300
                          rounded-md
                        "
                      />
                    </div>
                  </div>
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
                      Send
                    </button>
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

const plans = [
  {
    id: "new",
    name: "New Apply",
    description: "If you apply for a room for the first time, choose this",
  },
  {
    id: "change",
    name: "Change Request",
    description: "If you want to change your room, choose this",
  },
];
const people = [
  {
    title: "Mrs. Norris",
    description:
      "The renovation on the 3rd floor of the dormitory continues. Students are kindly requested not to visit this floor during the renovations to be made until Monday, 26.12.2021.",
    date: "20.12.2021 Tuesday",
  },
  {
    title: "Due Date of Fees",
    description:
      "The deadline for dormitory payments is 01.01.2022. It is announced to our students who do not pay.",
    date: "23.12.2021 Tuesday",
  },
];
export default defineComponent({
  components: {
    AppLayout,
    Welcome,
  },
  setup() {
    return {
      plans,
      people,
    };
  },
});
</script>
