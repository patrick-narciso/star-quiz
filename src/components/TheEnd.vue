<template>
	<Container alignH="space-around" alignV="center">
      <Card width="300px" mt="10">
        <CardTitle>quiz finalizado!</CardTitle>
        <CardBody>
					<CardText size="20">{{ getState().score }} pontos</CardText>
					<CardText size="12">Preencha o formulário abaixo para salvar sua pontuação:</CardText>
					<CardInput id="name" type="text" placeholder="Nome" margin="10" v-model="name"/>
					<CardInput id="email" type="email" placeholder="E-mail" margin="10" v-model="email"/>
          <BtnAction primary mt="10" width="186" height="56">
            <CardText size="16" @click="validForm()">Salvar</CardText>
          </BtnAction>
        </CardBody>
      </Card>
  </Container>
</template>
<script>
import { 
  Container,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardInput,
  BtnAction 
	} from '@/components/styled-components/styles.js';
import { setState } from '@/utils/utils.js';	

export default {
  name: 'end-game',
  data () {
    return {
      name: '',
      email: ''
    }
  },
  components: {
    Container,
    Card,
    CardTitle,
    CardText,
    CardBody,
    CardInput,
    BtnAction 
	},
	methods: {
		getState() {
			return this.$store.state;
		},
		isEmail(userEmail) {
			const mail = this.email || userEmail;
			const er = new RegExp(/^[A-Za-z0-9_-]+@[A-Za-z0-9_-]{2,}[A-Za-z0-9]{2,}([A-Za-z0-9])?/);	
			if(typeof(mail) == "string") {		
				if(er.test(mail)) { 
					return true; 
				}
			} else if(typeof(mail) == "object") {	
				if(er.test(mail.value)) { 
					return true; 
				}
			} else { 
				return false;	
			}
		},
		validForm() {
			if (!this.isEmail()) {
				this.$swal('Dados Incorretos!', 'Por Favor informe um e-mail válido', 'error');
			} else if (!this.name) {
				this.$swal('Dados Incorretos!', 'Por Favor informe seu nome', 'error');
			} else {
				this.saveData();
				this.$swal('Obrigado!', 'Seus dados foram salvos com sucesso!', 'success');
				this.$router.push('/');
			}
		},
		saveData() {
			const name = this.name;
			const email = this.email;
			const score = this.getState().score;
			const data = { name, email, score };
			setState(data);
			this.$swal('Obrigado!', 'Dados salvos com sucesso', 'success');
		}
	}
}
</script>
