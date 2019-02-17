<template>
  <Container alignH="space-between" alignV="flex-start">
    <Header>
      <Photo 
        src="https://s3-sa-east-1.amazonaws.com/star-quiz/vader.png" 
        alt="Ícone do Darth Vader" 
        maxWidth="100"
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
</template>

<script>
import { 
  Container, 
	Header,
	HeaderText, 
  Photo, 
  BtnAction } from '@/styles/styles.js';

export default {
  name: 'game',
  data () {
    return {
    }
  },
  components: {
    Container,
    Photo,
		Header,
		HeaderText,
    BtnAction
  }
}
</script>

