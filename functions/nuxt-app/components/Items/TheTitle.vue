<template>
  <section>
    <div class="py-12"></div>
    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">
        <slot name="title" />
      </h2>
      <v-responsive
        class="mx-auto mb-8"
        width="56"
        >
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
    </v-container>
  </section>
</template>