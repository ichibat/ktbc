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
          <v-select
            :items="items3"
            item-text="question"
            item-value="value"
            label="(3)呼吸状態"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items4"
            item-text="question"
            item-value="value"
            label="(4)口腔状態"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items5"
            item-text="question"
            item-value="value"
            label="(5)認知機能(食事中)"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items6"
            item-text="question"
            item-value="value"
            label="(6)咀嚼・送り込み"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items7"
            item-text="question"
            item-value="value"
            label="(7)嚥下"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items8"
            item-text="question"
            item-value="value"
            label="(8)姿勢・耐久性"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items9"
            item-text="question"
            item-value="value"
            label="(9)食事動作"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items10"
            item-text="question"
            item-value="value"
            label="(10)活動"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items11"
            item-text="question"
            item-value="value"
            label="(11)摂食状況レベル"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items12"
            item-text="question"
            item-value="value"
            label="(12)食物形態"
            return-object
            single-line
          ></v-select>
          <v-select
            :items="items13"
            item-text="question"
            item-value="value"
            label="(13)栄養"
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
        { question: '1.(全般)発熱があり，意識レベルは不良', value: '1' },
        {
          question:
            '2.(急性期)何らかの急性疾患による発熱はあるが 37.5°C以下に解熱するときがある。もしくは意識レベルが概ね良好(回復期・生活期)発熱があり，たびたび治療が必要となる',
          value: '2'
        },
        {
          question:
            '3.(急性期)3 日以上37.5°C以下で意識状態が概ね良好(回復期・生活期)1カ月に1-2回37.5°C以上の発熱があり，治療を要することがある',
          value: '3'
        },
        {
          question:
            '4.(急性期)7日以上発熱はなく，意識レベルは概ね良好(回復期・生活期)1カ月に1-2回37.5°C以上の発熱があるが，とくに治療をしなくても解熱する',
          value: '4'
        },
        {
          question: '5.発熱はなく，意識レベルは良好',
          value: '5'
        }
      ],
      items3: [
        {
          question: '1.絶えず痰貯留があり，1日10回以上の吸引が必要',
          value: '1'
        },
        { question: '2.痰貯留があり，1日5-9回の吸引が必要', value: '2' },
        { question: '3.痰貯留があり，1日5回未満の吸引が必要', value: '3' },
        { question: '4.痰貯留があるが，自力で喀出が可能', value: '4' },
        {
          question: '5.痰貯留や湿性嗄声がない',
          value: '5'
        }
      ],
      items4: [
        {
          question: '1.口腔衛生が著しく不良で，歯や義歯に歯科治療が必要',
          value: '1'
        },
        {
          question: '2.口腔衛生が不良で，歯や義歯に歯科治療が必要',
          value: '2'
        },
        {
          question: '3.口腔衛生は改善しているが，歯や義歯の治療は必要',
          value: '3'
        },
        {
          question: '4.口腔衛生は良好だが，歯や義歯の治療は必要',
          value: '4'
        },
        {
          question: '5.口腔衛生は良好で，歯や義歯の治療は必要としない',
          value: '5'
        }
      ],
      items5: [
        {
          question:
            '1.食事中の認知機能が著しく低く，覚醒レベルも低く，全介助が必要',
          value: '1'
        },
        { question: '2.食事中の認知機能が低く，全介助が必要', value: '2' },
        {
          question: '3.食事中の認知機能が低く，一部介助が必要',
          value: '3'
        },
        {
          question:
            '4.食事中の認知機能は概ね保たれているが，介助を必要とすることがある',
          value: '4'
        },
        {
          question: '5.食事中の認知機能は良好で，介助なしで食事摂取可能',
          value: '5'
        }
      ],
      items6: [
        {
          question:
            '1.食べるための口・舌・頬・あごの動きのすべてがかなり困難',
          value: '1'
        },
        {
          question:
            '2.食べるための口・舌・頬・あごの動きのいずれかがかなり困難',
          value: '2'
        },
        {
          question:
            '3.食べるための口・舌・頬・あごの動きのいずれかが困難だが，何らかの対処法で対応できる',
          value: '3'
        },
        {
          question:
            '4.食べるための口・舌・頬・あごの動きのいずれも概ね良好',
          value: '4'
        },
        {
          question:
            '5.食べるための口・舌・頬・あごの動きのすべてが良好',
          value: '5'
        }
      ],
      items7: [
        {
          question: '1.嚥下できない，頻回のむせ，呼吸促迫，重度の誤嚥',
          value: '1'
        },
        {
          question: '2.嚥下は可能だが，むせや咽頭残留，呼吸変化を伴う',
          value: '2'
        },
        {
          question:
            '3.嚥下は可能だが，むせ・咽頭残留・複数回嚥下・湿性嗄声のいずれかを伴うが，呼吸変化はなし',
          value: '3'
        },
        {
          question:
            '4.嚥下可能で，むせはない，咽頭残留はあるかもしれないが，処理可能，良好な呼吸',
          value: '4'
        },
        {
          question: '5.嚥下可能で，むせ・咽頭残留はなく，良好な呼吸',
          value: '5'
        }
      ],
      items8: [
        {
          question:
            '1.ベッド上で食事の姿勢保持が困難，あるいはベッド上ですべての食事をしている',
          value: '1'
        },
        {
          question:
            '2.リクライニング車いすで食事の姿勢保持が困難で，かなりの介助が必要',
          value: '2'
        },
        {
          question: '3.介助によりリクライニング車いすで食事の姿勢保持が可能',
          value: '3'
        },
        {
          question: '4.介助により普通型車いすで食事の姿勢保持が可能',
          value: '4'
        },
        {
          question: '5.介助なしで普通の椅子で食事の姿勢保持が可能',
          value: '5'
        }
      ],
      items9: [
        {
          question:
            '1.すべての食物を皿から自分の口に運び，咀嚼嚥下する食事動作に相当の介助が必要。自力では食事動作の25%未満しかできない，あるいは経管栄養',
          value: '1'
        },
        {
          question: '2.介助が必要。自力で食事動作の25％以上 50％未満を行う',
          value: '2'
        },
        {
          question: '3.一部介助が必要。自力で食事動作の50％以上を行う',
          value: '3'
        },
        {
          question:
            '4.食事動作に間接的な介助のみ（準備や見守り）が必要で，自立している。（食事時間が長くかかる症例も含める）',
          value: '4'
        },
        {
          question:
            '5.食事動作が完全に自立している。（自助具を使用する場合も含む）',
          value: '5'
        }
      ],
      items10: [
        {
          question:
            '1.寝たきり，ベッドからの移乗・トイレ・食事・更衣などすべてに介助が必要',
          value: '1'
        },
        {
          question:
            '2.介助で車いすへの移乗が可能で，ベッドから離れて食事が可能だが，めったに外出はしない',
          value: '2'
        },
        {
          question:
            '3.介助で車いすへの移乗が可能で，ベッドから離れて食事が可能。さらに介助でよく外出する',
          value: '3'
        },
        {
          question:
            '4.自力で車いすへの移乗が可能で，ベッドから離れて食事が可能だが，めったに外出はしない',
          value: '4'
        },
        {
          question:
            '5.自力で車いすへの移乗が可能で，ベッドから離れて食事が可能。1人で外出が可能，あるいは介助でよ く外出する',
          value: '5'
        }
      ],
      items11: [
        { question: '1.人工栄養のみ，もしくは間接嚥下訓練のみ', value: '1' },
        {
          question:
            '2.少量の経口摂取は可能(直接嚥下訓練含む)だが，主に人工栄養に依存',
          value: '2'
        },
        {
          question: '3.半分以上が経口摂取で，補助的に人工栄養を使用',
          value: '3'
        },
        {
          question: '4.形態を変えた食事や飲料を経口摂取，人工栄養は使用しない',
          value: '4'
        },
        {
          question:
            '5.形態を変えずに食事や飲料を経口摂取，人工栄養は使用しない',
          value: '5'
        }
      ],
      items12: [
        { question: '1.口からは何も食べていない', value: '1' },
        { question: '2.ゼリーやムース食を主に食べる', value: '2' },
        { question: '3.ペースト食を主に食べる', value: '3' },
        { question: '4.咀嚼食を主に食べる', value: '4' },
        {
          question: '5.普通食を主に食べる',
          value: '5'
        }
      ],
      items13: [
        { question: '1.栄養状態がとても悪い', value: '1' },
        { question: '2.栄養状態が悪い', value: '2' },
        { question: '3.栄養状態が悪くない', value: '3' },
        { question: '4.栄養状態が良い', value: '4' },
        {
          question: '5.栄養状態がとても良い',
          value: '5'
        }
      ]
    }
  }
}
</script>

<style></style>
