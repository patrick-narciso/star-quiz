<template>
  <div>
    <Container alignH="space-between" alignV="flex-start">
      <Header>
        <Photo 
          src="https://s3-sa-east-1.amazonaws.com/star-quiz/vader.png" 
          alt="Ícone do Darth Vader" 
          maxWidth="100px"
          verticalAlign="middle"/>
        <HeaderText size="30">starquiz!</HeaderText>
      </Header>	
      <HeaderText size="30">Tempo: 
        <countdown v-on:onFinish="timeLeft = 0" :left-time="120000">
          <span
            slot="process"
            slot-scope="{ timeObj }">
              {{ `${timeObj.ceil.s}s` }}
            </span>
            <span slot="finish">Esgotado!</span>
        </countdown>
      </HeaderText>
    </Container>
    <Container 
          v-show="timeLeft !== 0 && !loading"
          alignH="space-around" 
          alignV="center">
      <Card 
          v-bind:key="person.name" 
          v-for="(person, i) in chars"
          v-bind:ref="'card' + i" 
          width="300px" 
          mt="10">
        <Photo 
          :src="person.url | charImage"
          alt="Foto do Personagem"
          width="300px"
          maxWidth="100%">
        </Photo>
        <CardTitle>quem é?</CardTitle>
        <CardBody>
          <div v-show="char.clicked && person.name === char.name">
            <CardText size="12">Specie: {{ getCharData().spcie }}</CardText>
            <CardText size="12">Height: {{ person.height }}</CardText>
            <CardText size="12">Hair: {{ person.hair_color }}</CardText>
            <CardText size="12">Planet: {{ getCharData().planet }}</CardText>
            <CardText size="12">Movies: {{ getCharData().films }}</CardText>
            <CardText size="12">Vehicles: {{ getCharData().vehicles }}</CardText>
          </div>
          <CardInput type="text" id="char.name" v-model="charName[i]"/>
          <BtnAction v-on:click="isChar(person.name, i)" primary mt="10" width="186" height="56">
            <CardText size="16">Eu Sei!</CardText>
          </BtnAction>
          <BtnAction v-on:click="getInfo(person)" mt="15" mb="15" width="186" height="56">
            <CardText size="16">Dicas...</CardText>
          </BtnAction>
        </CardBody>
      </Card>
    </Container>
    <TheEnd v-show="timeLeft === 0"/>
    <BtnAction
        v-show="timeLeft !== 0 && !loading" 
        v-on:click="previousPage()" 
        mt="15" 
        mb="15" 
        width="186" 
        height="56">Anterior</BtnAction>
    <BtnAction
        v-show="timeLeft !== 0 && !loading" 
        v-on:click="nextPage()" 
        mt="15" 
        mb="15" 
        ml="15" 
        width="186" 
        height="56" 
        primary>Próximo</BtnAction>
    <Loading v-show="loading"></Loading>   
  </div>
</template>

<script>
import { 
  Container,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardInput,
	Header,
	HeaderText, 
  Photo, 
  BtnAction 
  } from '@/components/styled-components/styles.js';
import { getChars, getDetails } from '@/api/people.js';
import TheEnd from '@/components/TheEnd.vue';
import Loading from '@/components/Loading.vue';
import { mapActions } from 'vuex';

export default {
  name: 'game',
  data () {
    return {
      charName: {},
      timeLeft: '',
      loading: false
    }
  },
  components: {
    Container,
    Card,
    CardTitle,
    CardText,
    CardBody,
    CardInput,
    Header,
    HeaderText,
    TheEnd,
    Loading, 
    Photo, 
    BtnAction 
  },
  computed: {
    chars () {
      return this.$store.state.people;
    },
    char () {
      return this.$store.state.char;
    },
    score () {
      return this.$store.state.score;
    },
    previous() {
      return this.$store.state.previousPage;
    },
    next() {
      return this.$store.state.nextPage;
    }
  },
  mounted () {
    this.getPeople();
  },
  methods: {
    ...mapActions ({
      savePeople: 'SET_PEOPLE',
      saveMovies: 'SET_MOVIES',
      saveVehicles: 'SET_VEHICLES',
      savePlanet: 'SET_PLANET',
      saveSpecie: 'SET_SPECIE',
      saveChar: 'SET_CHAR',
      resetChar: 'RESET_CHAR',
      saveClicked: 'SET_CLICKED',
      saveScore: 'SET_SCORE',
      saveNextPage: 'SET_NEXT',
      savePreviousPage: 'SET_PREVIOUS',
    }),
    previousPage() {
      if (this.previous !== null) {
        const pageId = this.previous[this.previous.length - 1];
        this.getPeople(pageId);
      }
    },
    nextPage() {
      if (this.next !== null) {
        const pageId = this.next[this.next.length - 1];
        this.getPeople(pageId);
      }
    },
    removeCharFromList(id) {
      this.chars.splice(id, 1);
      this.charName = {};
    },
    isChar(name, index) {
      if(name && name.toLowerCase() === this.charName[index].toLowerCase()) {
        this.char.name === name && this.char.clicked ?
          this.saveScore(this.score + 5) : this.saveScore(this.score + 10);
        this.$swal('Você acertou!', 'Continue jogando para acertar mais', 'success');
      } else {
        this.$swal('Você errou!', 'Tente acertar outros personagens', 'error');
      }
      this.removeCharFromList(index);
    },
    getCharData() {
      let films = '';
      let vehicles = '';
      let spcie = '';
      this.char.movies.map(movie => films += movie.title + ', ');
      this.char.vehicles.map(vehicle => vehicles += vehicle.name + ', ');
      this.char.specie.map(spc => spcie += spc.name + ', ');

      return {
        films,
        vehicles,
        spcie,
        planet: this.char.planet.name
      };
    },
    setCharData(data, char) {
      this.saveChar(char);
      if (data.url.indexOf('films') > -1){
        this.saveMovies(data);
      } else if (data.url.indexOf('species') > -1) {
        this.saveSpecie(data);
      } else if (data.url.indexOf('vehicles') > -1) {
        this.saveVehicles(data);
      } else if (data.url.indexOf('planets') > -1) {
        this.savePlanet(data);
      }
    },
    getInfo(char) {
      this.loading = true;
      return getDetails(char).then(response => {
        this.resetChar();
        this.saveClicked(true);
        response.map(res => this.setCharData(res.data, char));
      })
      .catch(err => err)
      .finally(() => this.loading = false);
    },
    getPeople(pageId) {
      this.loading = true;
      return getChars(pageId || this.$route.params.id).then(chars => {
        this.savePreviousPage(chars.previous);
        this.saveNextPage(chars.next);
        this.savePeople(chars.results);
      })
      .catch(err => err)
      .finally(() => this.loading = false);
    },
  }
}
</script>
