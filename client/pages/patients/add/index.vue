<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="6">
          <v-select
            :items="items1"
            item-text="question"
            item-value="value"
            label="(1)食べる意欲"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items2"
            item-text="question"
            item-value="value"
            label="(2)全身状態"
            return-object
            single-line
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items1: [
        { question: '1.促しや援助しても食べようとしない', value: '1' },
        { question: '2.促しや援助で少し食べる', value: '2' },
        { question: '3.促しや援助で半量食べる', value: '3' },
        { question: '4.促しや援助でほとんど食べる', value: '4' },
        {
          question:
            '5.介助の有無に関わらず食べようとする食べたいと，意思表示する',
          value: '5'
        }
      ],
      items2: [
        { question: '1.促しや援助しても食べようとしない', value: '1' },
        { question: '2.促しや援助で少し食べる', value: '2' },
        { question: '3.促しや援助で半量食べる', value: '3' },
        { question: '4.促しや援助でほとんど食べる', value: '4' },
        {
          question:
            '5.介助の有無に関わらず食べようとする食べたいと，意思表示する',
          value: '5'
        }
      ]
    }
  }
}
</script>

<style></style>
