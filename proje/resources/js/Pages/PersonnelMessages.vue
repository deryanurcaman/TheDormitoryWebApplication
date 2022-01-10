<template>
<!-- frontend part for the personnel messages page -->
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Personnel Messages
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <form @submit="submit" class="space-y-8 divide-y divide-gray-200">
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
                        v-for="person in messages"
                        :key="person.email"
                        v-show="$page.props.user.id == person.receiver"
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
                            From: {{ person.sender }}
                          </h2>
                          <dl
                            class="mt-1 flex-grow flex flex-col justify-between"
                          >
                            <dt class="sr-only">Title</dt>
                            <dd class="text-gray-500 text-sm">
                              {{ person.content }}
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
                                >{{
                                  moment(person.created_at).format(
                                    "MMMM Do YYYY, h:mm a"
                                  )
                                }}</span
                              >
                            </dd>
                            <dt class="sr-only">Delete</dt>
                            <dd class="mt-3">
                              <jet-button
                                @click="deleteRow(person)"
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                              >
                                Delete
                              </jet-button>
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
                      First, you need to choose a person and then write your
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
                      for="recevier"
                      class="
                        block
                        text-sm
                        font-medium
                        text-gray-700
                        sm:mt-px sm:pt-2
                      "
                    >
                      Select a Person
                    </label>
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <select
                        required
                        v-model="form.receiver"
                        id="recevier"
                        name="recevier"
                        autocomplete="recevier-name"
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
                        <option
                          v-show="
                            person.name + ' ' + person.surname !=
                            $page.props.user.name +
                              ' ' +
                              $page.props.user.surname
                          "
                          v-for="person in users"
                          :key="person.id"
                          :value="person.id"
                        >
                          {{ person.name + " " + person.surname }}
                        </option>
                      </select>
                    </div>
                    <label
                      for="content"
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
                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                      <textarea
                        required
                        v-model="form.content"
                        id="content"
                        name="content"
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
                  <div class="flex justify-end">
                    <jet-button
                      wire:click.prevent="store()"
                      class="ml-4"
                      :class="{ 'opacity-25': form.processing }"
                      :disabled="form.processing"
                    >
                      Send
                    </jet-button>
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
//javascript part for the personnel messages
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";
import JetButton from "@/Jetstream/Button.vue";
import moment from "moment";

export default defineComponent({
  props: ["users", "messages"],
  components: {
    JetButton,
    AppLayout,
    Welcome,
  },
  data() {
    return {
      form: this.$inertia.form({
        sender:
          this.$page.props.user.name + " " + this.$page.props.user.surname,
        receiver: null,
        content: "",
      }),
      moment: moment,
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("messages.store"));
      this.reset();
    },
    reset: function () {
      this.form = {
        sender: null,
        receiver: null,
        content: null,
      };
    },
    deleteRow: function (data) {
      if (!confirm("Are you sure want to remove?")) return;
      data._method = "DELETE";
      this.$inertia.post("/messages/" + data.id, data);
      this.reset();
    },
  },
});
</script>
