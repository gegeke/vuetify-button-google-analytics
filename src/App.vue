<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <ex-btn
              :gacategory="category"
              :galabel="label"
              :gavalue="value"
              @click="handleExtendedButtonClick"
            >
              Extended Vuetify button
            </ex-btn>
          </v-col>
          <v-col>
            <v-text-field
              label="GA Category"
              v-model="category"
            />
            <v-text-field
              label="GA Label"
              v-model="label"
            />
            <v-text-field
              label="GA Value"
              v-model="value"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ExBtn from '@/components/ExBtn'

export default {
  name: 'App',
  components: {
    ExBtn
  },
  data () {
    return {
      category: null,
      label: null,
      value: null
    }
  },
  methods: {
    handleExtendedButtonClick (e) {
      // just to see that the click handler still works
      console.log(e)
    }
  }
}
</script>
