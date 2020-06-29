<template>
  <div>
    <div>
      <b-card-group deck>
        <b-card bg-variant="primary" text-variant="white" header="Primary" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card bg-variant="info" text-variant="white" header="Info" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="warning" text-variant="white" header="Warning" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="danger" text-variant="white" header="Danger" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <div class="mt-3">
      <b-card-group deck>
        <b-card bg-variant="light" header="Light" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
          <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        </b-card>

        <b-card v-bind:header="i.title" class="text-center">
          <b-card-text>{{i.author}}</b-card-text>
          <b-card-text>{{i.category}}</b-card-text>
        </b-card>
      </b-card-group>
    </div>

    <!-- <b-card-group deck>
      <b-card bg-variant="light" v-for="item in items" header="Light" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>-->
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: function() {
    return {
      i: {
        id: '8238',
        author: 'Majewska-Opiełka, Iwona.',
        title: 'Korepetycje z sukcesu : Poradnik dla młodzieży',
        publisher: 'Wydawnictwo Aleksandria',
        city: '',
        year: '207',
        category: 'psychologia'
      },
      items: [
        {
          id: '8238',
          author: 'Majewska-Opiełka, Iwona.',
          title: 'Korepetycje z sukcesu : Poradnik dla młodzieży',
          publisher: 'Wydawnictwo Aleksandria',
          city: '',
          year: '207',
          category: 'psychologia'
        },
        {
          id: '14394',
          author: 'Tomaszewska, Aleksandra',
          title: 'Fotografia cyfrowa. Pierwsza pomoc.',
          publisher: 'Helion',
          city: 'Gliwice',
          year: '2011',
          category: 'fotografia-av'
        },
        {
          id: '12604',
          author: 'Asnyk, Adam (1838-1897).',
          title: 'Wybór poezji',
          publisher: 'Wydawnictwo Zakładu Narodowego',
          city: 'Wrocław',
          year: '1947',
          category: 'poezja'
        },
        {
          id: '14395',
          author: 'Gałązka, Tomasz J.',
          title: 'Kompozycja obrazu fotograficznego',
          publisher: 'Helion',
          city: 'Gliwice',
          year: '2013',
          category: 'fotografia-av'
        },
        {
          id: '12604',
          author: 'Asnyk, Adam (1838-1897).',
          title: 'Wybór poezji',
          publisher: 'Wydawnictwo Zakładu Narodowego',
          city: 'Wrocław',
          year: '1947',
          category: 'poezja'
        },
        {
          id: '14396',
          author: '',
          title: 'Photoshop - edycja zdjęć. Motoryzacja. : Kurs Phot',
          publisher: 'Wydawnictwo Edugrafia',
          city: 'Świętochłowice',
          year: '',
          category: 'fotografia-av'
        },
        {
          id: '15833',
          author: 'Gombrowicz, Witold (1904-1969).',
          title: 'Ferdydurke',
          publisher: 'Wydawnictwo Literackie',
          city: 'Kraków',
          year: 'cop. 2012',
          category: 'lektury'
        },
        {
          id: '12604',
          author: 'Asnyk, Adam (1838-1897).',
          title: 'Wybór poezji',
          publisher: 'Wydawnictwo Zakładu Narodowego',
          city: 'Wrocław',
          year: '1947',
          category: 'poezja'
        },
        {
          id: '15834',
          author: 'Dmochowski, Mariusz - wykonanie',
          title: 'Faraon / Bolesław Prus',
          publisher: 'Story Box.pl',
          city: '',
          year: '',
          category: 'lektury'
        },
        {
          id: '12604',
          author: 'Asnyk, Adam (1838-1897).',
          title: 'Wybór poezji',
          publisher: 'Wydawnictwo Zakładu Narodowego',
          city: 'Wrocław',
          year: '1947',
          category: 'poezja'
        },
        {
          id: '15835',
          author: 'Holoubek, Gustaw (1923-2008). Wykonanie.',
          title: 'Konrad Wallenrod',
          publisher: 'Agencja Artystyczna MTJ',
          city: 'Warszawa',
          year: 'p2010',
          category: 'lektury'
        },
        {
          id: '15836',
          author: 'Prus, Bolesław (1847-1912)',
          title: 'Lalka',
          publisher: 'Heraclon International. Story ',
          city: '[Piaseczno]',
          year: '[2017]',
          category: 'lektury'
        },
        {
          id: '12604',
          author: 'Asnyk, Adam (1838-1897).',
          title: 'Wybór poezji',
          publisher: 'Wydawnictwo Zakładu Narodowego',
          city: 'Wrocław',
          year: '1947',
          category: 'poezja'
        }
      ]
    }
  }
})
</script>

<style>
</style>