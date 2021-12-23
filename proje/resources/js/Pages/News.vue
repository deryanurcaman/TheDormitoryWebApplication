<template>
  <div>
    <app-layout title="Dashboard">
      <template #header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">News</h2>
      </template>

      <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <!-- This example requires Tailwind CSS v2.0+ -->

            <ul
              role="list"
              class="
                grid grid-cols-1
                gap-6
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
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
                "
              >
                <div class="flex-1 flex flex-col p-8">
                  <img
                    class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                    :src="person.imageUrl"
                    alt=""
                  />
                  <h2 class="mt-6 text-gray-900 text-xl font-medium">
                    {{ person.title }}
                  </h2>
                  <dl class="mt-1 flex-grow flex flex-col justify-between">
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
      </div>
    </app-layout>
    <button class="btn"></button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";
const people = [
  {
    title: "3rd Floor Renovation",
    description:
      "The renovation on the 3rd floor of the dormitory continues. Students are kindly requested not to visit this floor during the renovations to be made until Monday, 26.12.2021.",
    date: "20.12.2021 Tuesday",
    imageUrl:
      "https://cdn-icons.flaticon.com/png/512/2692/premium/2692815.png?token=exp=1638886550~hmac=124e69e141b0103823c30695207c71be",
  },
  {
    title: "Due Date of Fees",
    description:
      "The deadline for dormitory payments is 01.01.2022. It is announced to our students who do not pay.",
    date: "23.12.2021 Tuesday",
    imageUrl:
      "https://cdn-icons.flaticon.com/png/512/2692/premium/2692815.png?token=exp=1638886550~hmac=124e69e141b0103823c30695207c71be",
  },
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
