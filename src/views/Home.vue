<template>
  <Container alignH="center" alignV="center">
    <Row>
      <Card>
        <Photo 
          src="https://s3-sa-east-1.amazonaws.com/star-quiz/vader.png" 
          alt="Ícone do Darth Vader"
          maxWidth="100">
        </Photo>
        <CardTitle>starquiz!</CardTitle>
        <CardBody>
          <CardText size="12">Bem-Vindo grande Padawan!</CardText> 
          <CardText size="12">Com esse quiz você terá oportunidade de identificar os principais personagens de Star- wars, marcar pontos e se tornar um expert nesta série de filmes maravilhosa!</CardText>
        </CardBody>
        <BtnAction>
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
  BtnAction } from '@/styles/styles.js';

export default {
  name: 'home',
  components: {
    Container,
    Row,
    Card,
    Photo,
    CardTitle,
    CardText,
    Text,
    CardBody,
    BtnAction
  }
}
</script>

