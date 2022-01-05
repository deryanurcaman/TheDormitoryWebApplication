<template>
  <div>
    <app-layout title="Dashboard">
      <template #header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">Announcements</h2>
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
                v-for="person in news"
                :key="person.title"
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
                    src="https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/013/421/original/announcement_4585245.png"
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
                        >{{ moment(person.created_at).format("MMMM Do YYYY, h:mm a") }}</span
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
import moment from "moment";

export default defineComponent({
  props: ["news"],
  components: {
    AppLayout,
    Welcome,
  },
  data() {
    return {
      moment: moment
    };
  },
});
</script>
