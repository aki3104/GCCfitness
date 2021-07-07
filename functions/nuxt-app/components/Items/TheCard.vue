<template>
<v-col>
  <v-card
    width="344"
    height="475"
    class="mx-auto text-left"
    flat
    >
    <slot />
    <v-card-title>
      <slot name="cardTitle" />
    </v-card-title>
    <v-card-text>
      <slot name="cardText" />
    </v-card-text>
    <v-card-actions>
      <slot name="cardBtn" />
    </v-card-actions>
  </v-card>
</v-col>
</template>

<style scoped>

</style>