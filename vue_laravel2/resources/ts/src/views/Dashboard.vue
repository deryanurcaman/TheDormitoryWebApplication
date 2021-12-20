<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">
    
      <MixedWidget2
        widget-classes="card-xl-stretch mb-xl-18"
        widget-color="danger"
        chart-height="200"
        stroke-color="#cb1e46"
      ></MixedWidget2>
  
  </div>

  
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TableWidget9 from "@/components/widgets/tables/Widget9.vue";
import TableWidget5 from "@/components/widgets/tables/Widget5.vue";
import ListWidget1 from "@/components/widgets/lists/Widget1.vue";
import ListWidget2 from "@/components/widgets/lists/Widget2.vue";
import ListWidget3 from "@/components/widgets/lists/Widget3.vue";
import ListWidget5 from "@/components/widgets/lists/Widget5.vue";
import ListWidget6 from "@/components/widgets/lists/Widget6.vue";
import MixedWidget2 from "@/components/widgets/mixed/Widget2.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
import MixedWidget7 from "@/components/widgets/mixed/Widget7.vue";
import MixedWidget10 from "@/components/widgets/mixed/Widget10.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "dashboard",
  components: {
    TableWidget9,
    TableWidget5,
    ListWidget1,
    ListWidget2,
    ListWidget3,
    ListWidget5,
    ListWidget6,
    MixedWidget2,
    MixedWidget5,
    MixedWidget7,
    MixedWidget10,
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  },
});
</script>
