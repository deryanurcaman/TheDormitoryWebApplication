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
                    <form
                      @submit="submit"
                      class="space-y-8 divide-y divide-gray-200"
                    >
                      <div class="space-y-8 divide-y divide-gray-200">
                        <div>
                          <div>
                            <h3
                              class="
                                text-lg
                                leading-6
                                font-medium
                                text-black-900 text-gray-700
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
                                for="name"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Name
                              </label>
                              <div
                                class="
                                  mt-1
                                  flex
                                  rounded-md
                                  shadow-sm
                                  text-gray-700
                                "
                              >
                                <input
                                  required
                                  v-model="form.name"
                                  type="text"
                                  name="name"
                                  id="name"
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
                                for="capacity"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Capacity
                              </label>
                              <div
                                class="
                                  mt-1
                                  flex
                                  rounded-md
                                  shadow-sm
                                  text-gray-700
                                "
                              >
                                <input
                                  required
                                  v-model="form.capacity"
                                  type="number"
                                  name="capacity"
                                  id="capacity"
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
                                for="occupancy"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Occupancy
                              </label>
                              <div
                                class="
                                  mt-1
                                  flex
                                  rounded-md
                                  shadow-sm
                                  text-gray-700
                                "
                              >
                                <input
                                  required
                                  v-model="form.occupancy"
                                  type="number"
                                  name="occupancy"
                                  id="occupancy"
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
                                for="fee"
                                class="block text-sm font-medium text-gray-700"
                              >
                                Fee
                              </label>
                              <div
                                class="
                                  mt-1
                                  flex
                                  rounded-md
                                  shadow-sm
                                  text-gray-700
                                "
                              >
                                <input
                                  required
                                  v-model="form.fee"
                                  type="number"
                                  name="fee"
                                  id="fee"
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
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
        <div
          class=" fixed z-10 inset-0 overflow-y-auto ease-out duration-400"
          v-if="isOpen"
        >
          <div
            class="
              flex
              items-end
              justify-center
              min-h-screen
              pt-4
              px-4
              pb-20
              text-center
              sm:block sm:p-0
            "
          >
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-500 opacity-90"></div>
            </div>
            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
              class="hidden sm:inline-block sm:align-middle sm:h-screen"
            ></span>

            <div
              class="
              
                inline-block
                align-bottom
                bg-white
                rounded-lg
                text-left
                overflow-hidden
                shadow-xl
                transform
                transition-all
                sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
              "
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form>
                <div class=" bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="">
                    <div class="mb-4">
                      <label
                        for="exampleFormControlInput1"
                        class="block text-gray-700 text-sm font-bold mb-2"
                        >Name:</label
                      >
                      <input
                        type="text"
                        class="
                          shadow
                          appearance-none
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="exampleFormControlInput1"
                        placeholder="Enter Name"
                        v-model="form.name"
                      />
                      <!-- <div v-if="$page.errors.title" class="text-red-500">{{ $.errors.title[0] }}</div> -->
                    </div>
                    <div class="mb-4">
                      <label
                        for="exampleFormControlInput1"
                        class="block text-gray-700 text-sm font-bold mb-2"
                        >Capacity:</label
                      >
                      <input
                        type="text"
                        class="
                          shadow
                          appearance-none
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="exampleFormControlInput1"
                        placeholder="Enter Capacity"
                        v-model="form.capacity"
                      />
                      <!-- <div v-if="$page.errors.title" class="text-red-500">{{ $.errors.title[0] }}</div> -->
                    </div>
                    <div class="mb-4">
                      <label
                        for="exampleFormControlInput2"
                        class="block text-gray-700 text-sm font-bold mb-2"
                        >Occupancy:</label
                      >
                      <textarea
                        class="
                          shadow
                          appearance-none
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="exampleFormControlInput2"
                        v-model="form.occupancy"
                        placeholder="Enter Occupancy"
                      ></textarea>
                      <!-- <div v-if="$page.errors.body" class="text-red-500">{{ $page.errors.body[0] }}</div> -->
                    </div>
                    <div class="mb-4">
                      <label
                        for="exampleFormControlInput2"
                        class="block text-gray-700 text-sm font-bold mb-2"
                        >Fee:</label
                      >
                      <textarea
                        class="
                          shadow
                          appearance-none
                          border
                          rounded
                          w-full
                          py-2
                          px-3
                          text-gray-700
                          leading-tight
                          focus:outline-none focus:shadow-outline
                        "
                        id="exampleFormControlInput2"
                        v-model="form.fee"
                        placeholder="Enter Fee"
                      ></textarea>
                      <!-- <div v-if="$page.errors.body" class="text-red-500">{{ $page.errors.body[0] }}</div> -->
                    </div>
                  </div>
                </div>
                <div
                  class="
                    bg-gray-50
                    px-4
                    py-3
                    sm:px-6 sm:flex sm:flex-row-reverse
                  "
                >
                  <span
                    class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
                  >
                    <jet-button
                      wire:click.prevent="store()"
                      type="button"
                      class="
                        inline-flex
                        justify-center
                        w-full
                        rounded-md
                        border border-transparent
                        px-4
                        py-2
                        text-base
                        leading-6
                        font-medium
                        text-white
                        shadow-sm
                        hover:bg-green-500
                        focus:outline-none focus:border-green-700
                        transition
                        ease-in-out
                        duration-150
                        sm:text-sm sm:leading-5
                      "
                      @click="update(form)"
                    >
                      Update
                    </jet-button>
                  </span>
                  <span
                    class="
                      mt-3
                      flex
                      w-full
                      rounded-md
                      shadow-sm
                      sm:mt-0 sm:w-auto
                    "
                  >
                    <button
                      @click="closeModal()"
                      type="button"
                      class="
                        inline-flex
                        justify-center
                        w-full
                        rounded-md
                        border border-gray-300
                        px-4
                        py-2
                        bg-white
                        text-base
                        leading-6
                        font-medium
                        text-gray-700
                        shadow-sm
                        hover:text-gray-500
                        focus:outline-none
                        focus:border-blue-300
                        focus:shadow-outline-blue
                        transition
                        ease-in-out
                        duration-150
                        sm:text-sm sm:leading-5
                      "
                    >
                      Cancel
                    </button>
                  </span>
                </div>
              </form>
            </div>
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
                            <span class="sr-only">Delete</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(person, personIdx) in rooms"
                          :key="person.id"
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
                            for {{ person.capacity }} people
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500
                            "
                          >
                            {{ person.fee }} $
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500
                            "
                          >
                          {{ person.occupancy }} empty spot
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
                            <button
                              type="button"
                              @click="edit(person)"
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                            </button>
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
                            <button
                              @click="deleteRow(person)"
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              Delete
                            </button>
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
import "@themesberg/flowbite";
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
        occupancy:""
      }),
      editMode: false,
      isOpen: false,
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("rooms.store"));
      this.reset();
    },
    openModal: function () {
      this.isOpen = true;
    },
    closeModal: function () {
      this.isOpen = false;
      this.reset();
      this.editMode = false;
    },
    reset: function () {
      this.form = {
        name: null,
        description: null,
        fee: null,
      };
    },
    save: function (data) {
      this.$inertia.post("/rooms", data);
      this.reset();
      this.closeModal();
      this.editMode = false;
    },
    edit: function (data) {
      console.log("edite geldi");
      this.form = Object.assign({}, data);
      this.editMode = true;
      this.openModal();
    },
    update: function (data) {
      data._method = "PUT";
      this.$inertia.post("/rooms/" + data.id, data);
      this.reset();
      this.closeModal();
    },
    deleteRow: function (data) {
      if (!confirm("Are you sure want to remove?")) return;
      data._method = "DELETE";
      this.$inertia.post("/rooms/" + data.id, data);
      this.reset();
      this.closeModal();
    },
  },
});
</script>


<style>
div.deneme {
  height: 100%;
  width: 100%;
  background-color: powderblue;
}
</style>