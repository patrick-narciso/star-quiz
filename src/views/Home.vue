<template>
  <Container alignH="center" alignV="center">
    <Row>
      <Card width="70vw">
        <Photo 
          src="https://s3-sa-east-1.amazonaws.com/star-quiz/vader.png" 
          alt="Ícone do Darth Vader"
          width="100px">
        </Photo>
        <CardTitle>starquiz!</CardTitle>
        <CardBody>
          <CardText size="12">Bem-Vindo grande Padawan!</CardText> 
          <CardText size="12">Com esse quiz você terá oportunidade de identificar os principais personagens de Star- wars, marcar pontos e se tornar um expert nesta série de filmes maravilhosa!</CardText>
        </CardBody>
        <BtnAction v-on:click="play" primary>
          <CardText size="16" animate>Jogar</CardText>
        </BtnAction>
      </Card>
    </Row>
  </Container>
</template>

<script>
// @ is an alias to /src
import { 
  Container, 
  Row, 
  Card, 
  CardTitle, 
  Photo, 
  CardBody, 
  CardText, 
  BtnAction } from '@/components/styled-components/styles.js';

export default {
  name: 'home',
  components: {
    Container,
    Row,
    Card,
    Photo,
    CardTitle,
    CardText,
    CardBody,
    BtnAction
  },
  methods: {
    play () {
      this.$router.push('game/1');
    }
  }
}
</script>

