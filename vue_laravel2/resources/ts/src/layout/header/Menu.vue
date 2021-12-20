<template>
  <!--begin::Menu wrapper-->
  <div
    class="header-menu align-items-stretch"
    data-kt-drawer="true"
    data-kt-drawer-name="header-menu"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
    data-kt-place="true"
    data-kt-place-mode="prepend"
    data-kt-place-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
  >
    <!--begin::Menu-->
    <div
      class="
        menu
        menu-lg-rounded
        menu-column
        menu-lg-row
        menu-state-bg
        menu-title-gray-700
        menu-state-title-primary
        menu-state-icon-primary
        menu-state-bullet-primary
        menu-arrow-gray-400
        fw-bold
        my-5 my-lg-0
        align-items-stretch
      "
      id="#kt_header_menu"
      data-kt-menu="true"
    >
      <div
        data-kt-menu-trigger="click"
        data-kt-menu-placement="bottom-start"
        class="menu-item menu-lg-down-accordion me-lg-1"
      >
        <span class="menu-link py-3">
          <span class="menu-arrow d-lg-none"></span>
        </span>
        <div
          class="
            menu-sub
            menu-sub-lg-down-accordion
            menu-sub-lg-dropdown
            menu-rounded-0
            py-lg-4
            w-lg-225px
          "
        ></div>
      </div>

      <!--end::Menu-->
    </div>
  </div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { MenuComponent } from "@/assets/ts/components";
import { headerMenuIcons } from "@/core/helpers/config";
import { version } from "@/core/helpers/documentation";

export default defineComponent({
  name: "KTMenu",
  components: {},
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    onMounted(() => {
      MenuComponent.reinitialization();
    });

    return {
      hasActiveChildren,
      headerMenuIcons,
      translate,
      version,
    };
  },
});
</script>
