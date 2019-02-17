import styled from 'vue-styled-components';

const containerProps = { alignH: String, alignV: String};
export const Container = styled('div', containerProps)`
  display: flex;
  flex: 1;
  justify-content: ${props => props.alignH};
  align-items: ${props => props.alignV};
`;

export const Header = styled.nav`
	color: #FFFFFF;
`;

const headerTextProps = { size: String };
export const HeaderText = styled('span', headerTextProps)`
	font-family: 'Star-Jedi';
	color: #FFFFFF;
	font-size: ${props => props.size || null}px;
`;

export const Row = styled.div`
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: #FFFFFF;
  width: 70vw;
  height: auto;
	border-radius: 4px;
	-webkit-box-shadow: 2px 3px 13px -4px rgba(0,0,0,0.75);
	-moz-box-shadow: 2px 3px 13px -4px rgba(0,0,0,0.75);
	box-shadow: 2px 3px 13px -4px rgba(0,0,0,0.75);
`;

const imageProps = { maxWidth: String, verticalAlign: String};
export const Photo = styled('img', imageProps)`
	max-width: ${props => props.maxWidth}px;
	vertical-align: ${props => props.verticalAlign || null};
`;

export const CardBody = styled.div`
  font-family: 'game-over';  
`;

const cardTextProps = { size: String, animate: Boolean };

export const CardText = styled('p', cardTextProps)`
  margin: 5px;
  line-height: 1.6;
	font-size: ${props => props.size}px;
	animation: ${props => props.animate ? 'blinker 1s linear infinite' : null};
`;

export const BtnAction = styled.button`
	width: 200px;
	color: #FFF;
	font-family: 'game-over';
	text-decoration: none;
	outline: 0;
	margin: 0 auto;
	border-radius: 5px;
	border: solid 1px #D94E3B;
	background: #cb3b27;
	text-align: center;
	padding: 20px 30px;

	-webkit-transition: all 0.1s;
	-moz-transition: all 0.1s;
	transition: all 0.1s;

	-webkit-box-shadow: 0px 9px 0px #84261a;
	-moz-box-shadow: 0px 9px 0px #84261a;
	box-shadow: 0px 9px 0px #84261a;

	&:active {
		-webkit-box-shadow: 0px 2px 0px #84261a;
    -moz-box-shadow: 0px 2px 0px #84261a;
    box-shadow: 0px 2px 0px #84261a;
    position:relative;
    top:7px;
	}
`;

export const CardTitle = styled.h1`
  font-family: 'Star-Jedi';
  margin: 0;
`;