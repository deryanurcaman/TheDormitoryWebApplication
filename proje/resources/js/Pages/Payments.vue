<template>
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Payments
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
                            Status
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
                            <span>Charge</span>
                          </th>
                          
                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(person, personIdx) in payments"
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
                            {{ person.user.name }} {{ person.user.surname }}
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
                            {{ person.status }}
                          </td>
                          <td
                            class="
                              px-6
                              py-4
                              whitespace-nowrap
                              text-sm
                              font-medium
                            "
                          >
                            <button
                              @click="update(person, false)"
                              v-show="person.status == 'Not Charged'"
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              Charge |
                            </button>
                            <button
                              @click="update(person, true)"
                              v-show="person.status == 'Not Charged'"
                              class="text-indigo-600 hover:text-indigo-900"
                            >
                              | Cash in Hand
                            </button>
                            <div
                              v-show="person.status == 'Successful'"
                              class="text-green-600"
                            >
                              Payment Successful
                            </div>
                            <div
                              v-show="person.status == 'Waiting'"
                              class="text-yellow-600"
                            >
                              Payment Waiting
                            </div>
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
  props: ["payments"],
  components: {
    AppLayout,
    Welcome,
  },
  data() {
    return {
    };
  },
  methods: {
    update: function (data, cash) {
      // console.log(data)      
      data._method = "PUT";
      data.cashByHand = cash
      
      this.$inertia.post("/payments/" + data.id, data);
    },
  },
});
</script>
