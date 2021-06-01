<template>
  <!--  <v-footer app>-->
  <!--    <span>&copy; {{ new Date().getFullYear() }}</span>-->
  <!--  </v-footer>-->

  <!--  <v-footer color="white">-->
  <!--    <div class="col">-->
  <!--      <span-->
  <!--        ><img class="image" src="~/assets/svg/nuxt-ico.svg" alt="nuxt icon" />-->
  <!--      </span>-->
  <!--    </div>-->
  <!--    <v-spacer></v-spacer>-->
  <!--    <div class="col">-->
  <!--      &copy; Copyright 2018-{{ new Date().getFullYear() }} www.grail.com-->
  <!--    </div>-->
  <!--  </v-footer>-->

  <v-footer dark padless>
    <v-col>
      <v-row class="px-lg-6 mt-4" justify="center" no-gutters>
        <v-col
          v-for="(column, index1) in columns"
          :key="index1"
          cols="12"
          sm="2"
          class="text-center"
        >
          <v-col
            v-for="(link, index2) in column"
            :key="index2"
            cols="12"
            class="my-0 py-0"
          >
            <v-btn
              nuxt
              small
              :to="link.to"
              color="white"
              text
              :class="link.class"
            >
              {{ link.title }}
            </v-btn>
          </v-col>
        </v-col>
      </v-row>

      <v-row class="mt-2 mb-1 px-lg-6">
        <v-col class="text-center text-sm-left">
          <span
            ><img
              class="image"
              src="~/assets/svg/nuxt-ico.svg"
              alt="nuxt icon"
            />
          </span>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-center text-sm-right">
          <div class="">
            <IcoLinkedin />
            <IcoFacebook />
            <IcoTwitter class="ml-1" />
            <IcoGitHub class="ml-1" />
          </div>
        </v-col>
      </v-row>

      <v-divider class="mx-4"></v-divider>

      <v-row class="mt-2" justify="center">
        <v-col
          class="text-center white--text font-weight-light text-uppercase"
          cols="12"
        >
          &copy; 2018-{{ new Date().getFullYear() }} — <strong>Grail</strong>
        </v-col>
      </v-row>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    columns: [
      [
        {
          title: 'Home',
          to: { name: 'index' },
          class: 'font-weight-light text-decoration-underline',
        },
      ],
      [
        {
          title: 'Product',
          to: { name: 'product' },
          class: 'font-weight-light text-decoration-underline',
        },
        {
          title: 'Solutions',
          to: '/product#solutions',
          class: 'font-weight-thin',
        },
        {
          title: 'Product Sheet',
          to: '/product#sheet',
          class: 'font-weight-thin',
        },
      ],
      [
        {
          title: 'Company',
          to: { name: 'company' },
          class: 'font-weight-light text-decoration-underline',
        },
        {
          title: 'Careers',
          to: { name: 'careers' },
          class: 'font-weight-thin',
        },
      ],
      [
        {
          title: 'Partners',
          to: { name: 'partners' },
          class: 'font-weight-light text-decoration-underline',
        },
      ],
      [
        {
          title: 'Blog',
          to: { name: 'posts' },
          class: 'font-weight-light text-decoration-underline',
        },
      ],
      [
        {
          title: 'Contact Us',
          to: { name: 'contactUs' },
          class: 'font-weight-light text-decoration-underline',
        },
        {
          title: 'Request a demo',
          to: { name: 'requestDemo' },
          class: 'font-weight-thin',
        },
      ],
    ],
  }),
}
</script>

<style scoped>
.col span {
  display: inline-block;
  width: 120px;
}
span:first-of-type {
  color: #526488;
}
span:nth-of-type(2) {
  color: var(--teal-light);
}

svg:hover {
  color: var(--teal-light);
}
</style>
