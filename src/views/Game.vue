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
        <countdown :left-time="120000">
          <span
            slot="process"
            slot-scope="{ timeObj }">
              {{ `${timeObj.ceil.s}s` }}
            </span>
            <span slot="finish">Esgotado!</span>
        </countdown>
      </HeaderText>
    </Container>
    <Container alignH="space-around" alignV="center">
      <Card v-bind:key="char.name" v-for="(char, i) in chars" width="300px" mt="10">
        <Photo 
          :src="char.url | charImage"
          alt="Foto do Personagem"
          width="300px"
          maxWidth="100%">
        </Photo>
        <CardTitle>quem é?</CardTitle>
        <CardBody>
          <div>
            <CardText size="12">Specie: </CardText>
            <CardText size="12">Height: {{ char.height }}</CardText>
            <CardText size="12">Hair: {{ char.hair_color }}</CardText>
            <CardText size="12">Planet:</CardText>
            <CardText size="12">Movies:</CardText>
            <CardText size="12">Vehicles:</CardText>
          </div>
          <CardInput type="text" id="char.name" v-model="charName[i]"/>
          <BtnAction v-on:click="isChar(char.name, i)" primary mt="10" width="186" height="56">
            <CardText size="16">Eu Sei!</CardText>
          </BtnAction>
          <BtnAction v-on:click="getInfo(char)" mt="15" mb="15" width="186" height="56">
            <CardText size="16">Dúvidas..</CardText>
          </BtnAction>
        </CardBody>
      </Card>
    </Container>
    <modal name="teste"></modal>
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
  } from '@/styles/styles.js';
import people from '@/api/people.js';
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'game',
  data () {
    return {
      charName: {}
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
    Photo, 
    BtnAction 
  },
  computed: {
    chars () {
      return this.$store.state.people;
    }
  },
  mounted () {
    this.getChars();
  },
  methods: {
    ...mapActions ({
      savePeople: 'SET_PEOPLE'
    }),
    ...mapActions ({
      saveMovies: 'SET_MOVIES'
    }),
    isChar(name, index) {
      return name.toLowerCase() === this.charName[index].toLowerCase();
    },
    getInfo(char) {
      Promise.all(char.films.map(film => axios.get(film)))
      .then(res => res.map(movie => this.saveMovies(movie.data.title)));
    },
    getChars() {
      return people.getChars(this.$route.params.id).then(chars => {
        this.savePeople(chars.results);
      })
      .catch(err => console.log(err));
    }
  }
}
</script>

