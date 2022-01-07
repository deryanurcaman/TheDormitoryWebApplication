<template>
  <app-layout title="Dashboard">
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">My Room</h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <form class="space-y-8 divide-y divide-gray-200">
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Room Details
                  </h3>
                  <!-- <div class="text-gray-900">{{ userinfo.rooms[0].name }} </div>
      <div>{{ userinfo.payments }}</div> -->
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl class="sm:divide-y sm:divide-gray-200">
                    <div
                      class="
                        py-4
                        sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                      "
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Room Name
                      </dt>
                      <dd
                      v-if="userinfo.rooms.length>0"
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        <!-- {{ studentsinrooms[0].room_id }} -->
                        {{ userinfo.rooms[0].name }}
                      </dd>
                    </div>
                    <div
                      class="
                        py-4
                        sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                      "
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Capacity
                      </dt>
                      <dd
                      v-if="userinfo.rooms.length>0"
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ userinfo.rooms[0].capacity }} people
                      </dd>
                    </div>
                    <div
                      class="
                        py-4
                        sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                      "
                    >
                      <dt class="text-sm font-medium text-gray-500">Fee</dt>
                      <dd
                      v-if="userinfo.rooms.length>0"
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ userinfo.rooms[0].fee }} $
                      </dd>
                    </div>
                    <div
                      class="
                        py-4
                        sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                      "
                    >
                      <dt class="text-sm font-medium text-gray-500">
                        Payment Status
                      </dt>
                      <dd
                      v-if="userinfo.payments.length>0"
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ userinfo.payments[0].status }}
                      </dd>
                    </div>
                    <div
                      class="
                        py-4
                        sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6
                      "
                    >
                      <dt class="text-sm font-medium text-gray-500">Pay</dt>
                      <dd
                      v-if="userinfo.payments.length>0"
                        class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        <button @click="update(userinfo.payments[0])" v-if="userinfo.payments[0].status=='Waiting' "
                          href="#"
                          class="
                            font-medium
                            text-indigo-600
                            hover:text-indigo-500
                          "
                        >
                          Pay Now
                        </button>
                        <div v-if="userinfo.payments[0].status!='Waiting'">-</div>

            
                      </dd>
                    </div>
                  </dl>
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
  props: ["studentsinrooms", "userinfo"],
  components: {
    AppLayout,
    Welcome,
  },
  data() {
    return {
      con: 5,
    };
  },
  methods: {
    update: function (data) {
      // console.log(data)
      data._method = "PUT";
      data.cashByHand = true
      this.$inertia.post("/payments/" + data.id, data);
    },
  },
});
</script>
