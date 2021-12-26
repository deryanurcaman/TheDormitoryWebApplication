<template>
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Room Request
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <form @submit="submit" class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  The Form for a Room Request
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  With this form, you can view the currently available rooms and
                  send a request for a room.
                </p>
              </div>

              <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
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
                    New Apply / Change Request
                  </label>
                  <div class="space-y-5">
                    <div
                      v-for="plan in plans"
                      :key="plan.id"
                      class="relative flex items-start"
                    >
                      <div class="flex items-center h-5">
                        <input
                        v-model="form.type"
                        :value="plan.name"
                          :id="plan.id"
                          :aria-describedby="`${plan.id}-description`"
                          name="plan"
                          type="radio"
                          :checked="plan.id === 'small'"
                          class="
                            focus:ring-indigo-500
                            h-4
                            w-4
                            text-indigo-600
                            border-gray-300
                          "
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          :for="plan.id"
                          class="font-medium text-gray-700"
                          >{{ plan.name }}</label
                        >
                        <p :id="`${plan.id}-description`" class="text-gray-500">
                          {{ plan.description }}
                        </p>
                      </div>
                    </div>
                  </div>
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
                    Room Choice
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <select
                    v-model="form.request_room"
                    
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="
                        text-gray-700
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
                      <option :value="person.id" v-for="(person) in rooms"
                          :key="person.id">{{ person.name }}</option>
                    </select>
                  </div>
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
                    for="about"
                    class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      sm:mt-px sm:pt-2
                    "
                  >
                    Comment/Reason
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <textarea
                    v-model="form.comment"
                      id="about"
                      name="about"
                      rows="3"
                      class="
                        text-gray-700
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
              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              
              <jet-button
                            wire:click.prevent="store()"
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
  </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import JetButton from "@/Jetstream/Button.vue";



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

export default defineComponent({
  props: ["rooms"],
  components: {
    Head,
    Link,
    AppLayout,
    Welcome,
    JetButton
  },
  data() {
    return {
      plans,
      form: this.$inertia.form({
        student_id: this.$page.props.user.id,
        type: "",
        comment: "",
        request_room: "",
      }),
    };
  },
  methods: {
    submit() {
      console.log("submite geldi")
      this.form.post(this.route("roomrequests.store"));
      console.log("2 geldi")
    },}
});
</script>
