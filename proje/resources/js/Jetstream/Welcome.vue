<template>
  <div>
    <div class="p-6 sm:px-20 bg-white border-b border-gray-200 text-gray-700">
      <div class="mt-8 center text-5xl">Welcome!</div>
    </div>

    <div class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2">
      <div class="p-6">
        <div class="ml-12">
          <div v-if="$page.props.user.role == 'student'" class="mt-2 text-xl text-gray-500">NEWS</div>
          <div v-if="$page.props.user.role == 'personnel'" class="mt-2 text-xl text-gray-500">SHARE NEWS</div>
          <a href="https://laravel.com/docs">
            <div
              class="
                mt-3
                flex
                items-center
                text-sm
                font-semibold
                text-indigo-700
              "
            >
              <div class="ml-1 text-indigo-500">
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
        <div class="ml-12">
          <div v-if="$page.props.user.role == 'student'" class="mt-2 text-xl text-gray-500">ROOMS</div>
          <div v-if="$page.props.user.role == 'personnel'" class="mt-2 text-xl text-gray-500">SHARE ROOMS</div>

          <a href="https://laravel.com/docs">
            <div
              class="
                mt-3
                flex
                items-center
                text-sm
                font-semibold
                text-indigo-700
              "
            >
              <div class="ml-1 text-indigo-500">
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200">
        <div class="ml-12">
          <div v-if="$page.props.user.role == 'student'" class="mt-2 text-xl text-gray-500">ROOM REQUEST</div>
          <div v-if="$page.props.user.role == 'personnel'" class="mt-2 text-xl text-gray-500">STUDENTS IN ROOMS</div>

          <a href="https://laravel.com/docs">
            <div
              class="
                mt-3
                flex
                items-center
                text-sm
                font-semibold
                text-indigo-700
              "
            >
              <div class="ml-1 text-indigo-500">
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200 md:border-l">
        <div class="ml-12">
          <div v-if="$page.props.user.role == 'student'" class="mt-2 text-xl text-gray-500">MY ROOM</div>
          <div v-if="$page.props.user.role == 'personnel'" class="mt-2 text-xl text-gray-500">PAYMENTS</div>

          <a href="https://laravel.com/docs">
            <div
              class="
                mt-3
                flex
                items-center
                text-sm
                font-semibold
                text-indigo-700
              "
            >
              <div class="ml-1 text-indigo-500">
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import JetApplicationLogo from "@/Jetstream/ApplicationLogo.vue";

export default defineComponent({
  components: {
    JetApplicationLogo,
  },
});
</script>
