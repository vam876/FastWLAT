import { d as defineComponent, l as useThemeStore, a as createElementBlock, n as normalizeClass, p as unref, a5 as renderSlot, o as openBlock } from "./index-FPjz1pj-.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThemeContainer",
  props: {
    type: { default: "page" },
    class: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const themeStore = useThemeStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          props.class,
          {
            // 页面容器样式
            [unref(themeStore).themeClasses.background]: props.type === "page",
            "min-h-screen p-6": props.type === "page",
            // 卡片样式
            [unref(themeStore).themeClasses.cardBackground]: props.type === "card",
            "rounded-xl p-6": props.type === "card",
            // 按钮样式
            [unref(themeStore).themeClasses.buttonStyle]: props.type === "button",
            "px-4 py-2 text-white rounded-lg font-medium transition-colors duration-200": props.type === "button",
            // 标题样式
            [unref(themeStore).themeClasses.headerStyle]: props.type === "header"
          }
        ])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as _
};
