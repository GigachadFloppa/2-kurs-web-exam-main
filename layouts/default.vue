<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <widget />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>Сиротов Дмитрий Павлович 201-327</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-account-outline",
          title: "Главная",
          to: "/",
        },
        {
          icon: "mdi-alien-outline",
          title: "О нас",
          to: "/abou",
        },
        {
          icon: "mdi-all-inclusive-box",
          title: "Животные",
          to: "/animals",
        },
      ],
      title: "Фермерский роддом Пятёрочка Сиротов Дмитрий Павлович 201-327",
    };
  },
};
</script>
