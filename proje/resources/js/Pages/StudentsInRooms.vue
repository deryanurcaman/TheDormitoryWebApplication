<template>
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Students In Rooms
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h2 class="text-xl text-gray-900 mb-3">All Students In Rooms</h2>
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
                            Student Name
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
                            Room Name
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
                          v-for="(person, personIdx) in studentsinrooms"
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
                            {{ person.user.name }}
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500
                            "
                          >
                            {{ person.room.name }}
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

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h2 class="text-xl text-gray-900 mb-3">All Room Requests</h2>
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
                            Request Type
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
                            From
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
                            Request Room
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
                            Comment/Reason
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
                            <span class="sr-only">Accept</span>
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
                            <span class="sr-only">Reject</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(person, personIdx) in roomrequests"
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
                            {{ person.type }}
                          </td>
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
                            {{ person.user.name }}
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500
                            "
                          >
                            {{ person.room.name }}
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm text-gray-500
                            "
                          >
                            {{ person.comment }}
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
                              v-show="person.type == 'New Apply'"
                              v-on:click="accept(person)"
                              type="button"
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              Accept
                            </button>
                            <button
                              v-show="person.type == 'Change Request'"
                              v-on:click="update(person, person.id)"
                              type="button"
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              Change
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
                              @click="rejectRow(person)"
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              Reject
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

export default defineComponent({
  props: ["studentsinrooms", "roomrequests"],
  components: {
    AppLayout,
    Welcome,
  },
  data() {
    return {
      form: this.$inertia.form({
        student_id: "",
        room_id: "",
        status:"",
        withPayment:"",
      }),
    };
  },
  methods: {
    accept(person) {
      var form = this.$inertia.form({
        student_id: "",
        room_id: "",
        status:"",
        withPayment:"",
        did:""
      })
      form.student_id = person.student_id;
      form.room_id = person.request_room;
      form.status = "Not Charged";
      form.withPayment = true;
      form.did = person.id;
      form.post(this.route("studentsinrooms.store"));
    },
    deleteRow: function (data) {
      if (!confirm("Are you sure want to remove?")) return;
      data._method = "DELETE";
      this.$inertia.post("/studentsinrooms/" + data.id, data);
      this.reset();
    },
    rejectRow: function (data) {
      data._method = "DELETE";
      this.$inertia.post("/roomrequests/" + data.id, data);
      this.reset();
    },
    acceptDeleteRow(data) {
      data._method = "DELETE";
      this.$inertia.post("/roomrequests/" + data.id, data);
      this.reset();
    },
    save: function (data) {
      this.$inertia.post("/news", data);
      this.reset();
      this.closeModal();
      this.editMode = false;
    },
    edit: function (data) {
      this.form = Object.assign({}, data);
      this.editMode = true;
      this.openModal();
    },
    update: function (data, person_id) {
      data._method = "PUT";
      data.change = true;
      data.personid = person_id
      console.log(data)
      this.$inertia.post("/studentsinrooms/" + data.id, data);
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
        title: null,
        body: null,
      };
    },
  },
});
</script>
