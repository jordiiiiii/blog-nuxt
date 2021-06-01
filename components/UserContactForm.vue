<template>
  <v-row class="pb-16">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form" elevation="0" dark>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                ref="firstname"
                v-model="firstname"
                :rules="[
                  () => !!firstname || 'This field is required',
                  () =>
                    (!!firstname && firstname.length <= 10) ||
                    'Name must be less than 10 characters',
                ]"
                :counter="10"
                :error-messages="errorMessages"
                label="First name"
                placeholder="John"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                ref="lastname"
                v-model="lastname"
                :rules="[
                  () => !!lastname || 'This field is required',
                  () =>
                    (!!lastname && lastname.length <= 10) ||
                    'Name must be less than 10 characters',
                ]"
                :counter="10"
                :error-messages="errorMessages"
                label="Last name"
                placeholder="Doe"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                ref="email"
                v-model="email"
                :rules="[
                  () => !!email || 'This field is required',
                  () => /.+@.+/.test(email) || 'E-mail must be valid',
                ]"
                :error-messages="errorMessages"
                label="E-mail"
                placeholder="Grail@email.com"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                ref="phone"
                v-model="phone"
                :rules="[
                  () => !!phone || 'This field is required',
                  () =>
                    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(
                      phone
                    ) || 'Phone number must be valid',
                ]"
                :error-messages="errorMessages"
                label="Phone Number"
                placeholder="666 666 6666"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                ref="city"
                v-model="city"
                :rules="[() => !!city || 'This field is required']"
                label="City"
                placeholder="El Paso"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                ref="country"
                v-model="country"
                :rules="[() => !!country || 'This field is required']"
                :items="countries"
                label="Country"
                placeholder="Select..."
                required
              ></v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-textarea
                ref="message"
                v-model="message"
                :rules="[() => !!message || 'This field is required']"
                label="Message"
                hint="Write your thoughts"
                required
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-subtitle>
          {{ grailMessage }}
        </v-card-subtitle>

        <v-divider class="mt-12"></v-divider>

        <v-card-actions>
          <v-btn text> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" text @click="submit"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'UserContactForm',
  data: () => ({
    countries: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antigua &amp; Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia',
      'Bosnia &amp; Herzegovina',
      'Botswana',
      'Brazil',
      'British Virgin Islands',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Cape Verde',
      'Catalonia',
      'Cayman Islands',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Congo',
      'Cook Islands',
      'Costa Rica',
      'Cote D Ivoire',
      'Croatia',
      'Cruise Ship',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Estonia',
      'Ethiopia',
      'Falkland Islands',
      'Faroe Islands',
      'Fiji',
      'Finland',
      'France',
      'French Polynesia',
      'French West Indies',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guam',
      'Guatemala',
      'Guernsey',
      'Guinea',
      'Guinea Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hong Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Isle of Man',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jersey',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kuwait',
      'Kyrgyz Republic',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macau',
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Montserrat',
      'Morocco',
      'Mozambique',
      'Namibia',
      'Nepal',
      'Netherlands',
      'Netherlands Antilles',
      'New Caledonia',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Norway',
      'Oman',
      'Pakistan',
      'Palestine',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Reunion',
      'Romania',
      'Russia',
      'Rwanda',
      'Saint Pierre &amp; Miquelon',
      'Samoa',
      'San Marino',
      'Satellite',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'South Africa',
      'South Korea',
      'Spain',
      'Sri Lanka',
      'St Kitts &amp; Nevis',
      'St Lucia',
      'St Vincent',
      'St. Lucia',
      'Sudan',
      'Suriname',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      `Timor L'Este`,
      'Togo',
      'Tonga',
      'Trinidad &amp; Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Turks &amp; Caicos',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'Uruguay',
      'Uzbekistan',
      'Venezuela',
      'Vietnam',
      'Virgin Islands (US)',
      'Yemen',
      'Zambia',
      'Zimbabwe',
    ],
    errorMessages: '',
    // name: null,
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    city: null,
    country: null,
    message: null,
    formHasErrors: false,
    grailMessage:
      'Grail needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our Privacy Policy.',
  }),

  computed: {
    form() {
      return {
        // name: this.name,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        city: this.city,
        country: this.country,
        message: this.message,
      }
    },
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    // addressCheck() {
    //   this.errorMessages = this.address && !this.name ? `Hey! I'm required` : ''
    //
    //   return true
    // },
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset()
      })
    },
    submit() {
      this.formHasErrors = false

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
    },
  },
}
</script>
