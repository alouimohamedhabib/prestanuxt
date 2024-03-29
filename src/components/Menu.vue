<template>
  <div
    class="menu"
    :class="{
      show: showMenu,
      hide: !showMenu,
    }"
  >
    <div class="closer">
      <i @click="handleMenuTrigger" class="bi bi-x-circle"></i>
    </div>
    <ul>
      <li>
        <a>Link</a>
      </li>
      <li>
        <a>Link</a>
      </li>
      <li>
        <a>Link</a>
      </li>
      <li>
        <a>Link</a>
      </li>
    </ul>
    <div class="ms-3 me-3" v-if="languages">
      <select
        class="form-select"
        v-model="vLocale"
        aria-label="Default select example"
      >
        <option
          v-for="(language, index) in languages?.languages"
          :key="index"
          :value="language.locale"
        >
          {{ language.name_simple }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageStore, useUserInterfaceStore } from "@/store";
import { Language, Languages } from "../types/PageType";
const { locale, setLocale } = useI18n();
const vLocale = ref();
const userInterfaceStore = useUserInterfaceStore();
const pageStore = usePageStore();
const languages: Ref<Languages | undefined> = computed(
  () => pageStore.getLanguages
);
const DefaultLanguageFromLocalStorage = computed(
  () => userInterfaceStore.getDefaultLanguageFromLocalStorage
);
if (DefaultLanguageFromLocalStorage !== undefined) {
  vLocale.value = DefaultLanguageFromLocalStorage.value || "";
}
// watch the language switcher changes
watch(vLocale, (selectedLanguage: string) => {
  // update the store userInterfaceStore
  let selectedLanguageObject: Language | undefined = undefined;
  languages.value?.languages.forEach((lang) => {
    if (lang.locale === selectedLanguage) {
      selectedLanguageObject = lang;
    }
  });
  setLocale(vLocale.value);
  // call the store
  userInterfaceStore.updateDefaultLanguage(
    (selectedLanguageObject as unknown as Language)?.locale
  );
});

const showMenu = computed(() => userInterfaceStore.getMenuState);
const handleMenuTrigger = () => {
  userInterfaceStore.toggleMenuState();
};
</script>
<style lang="scss" scoped>
.menu {
  background: rgba(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70vw;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 1px 1px 40px 90px rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  .closer {
    display: flex;
    align-items: right;
    justify-content: right;
    padding: 1em;
    i {
      position: relative;
    }
  }
  // hide and show
  &.show {
    left: 0;
  }
  &.hide {
    left: -100%;
  }
  ul {
    list-style: none;
    padding: 2em;
    margin: 0;
    text-align: left;
    li {
      display: block;
      a {
        display: block;
        padding: 0.2em;
        margin: 0.2em;
        font-size: 1em;
      }
    }
  }
}
</style>
