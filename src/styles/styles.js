import styled from 'vue-styled-components';

const containerProps = { alignH: String, alignV: String};
export const Container = styled('div', containerProps)`
  display: flex;
  flex: 1;
  justify-content: ${props => props.alignH};
	align-items: ${props => props.alignV};
	flex-flow: row wrap;
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

const cardProps = { width: String, mt: String };
export const Card = styled('div', cardProps)`
  background-color: #FFFFFF;
  width: ${props => props.width || null};
	height: auto;
	margin-top: ${props => props.mt}px;
	border-radius: 4px;
	-webkit-box-shadow: 2px 3px 13px -4px rgba(0,0,0,0.75);
	-moz-box-shadow: 2px 3px 13px -4px rgba(0,0,0,0.75);
	box-shadow: 2px 3px 13px -4px rgba(0,0,0,0.75);
`;

const imageProps = { maxWidth: String, verticalAlign: String, width: String};
export const Photo = styled('img', imageProps)`
	width: ${props => props.width || null};
	max-width: ${props => props.maxWidth};
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

export const CardInput = styled.input`
	width: 80%;
	border-radius: 4px;
	font-family: 'game-over';
	outline: 0;
	height: 25px;
	background: bisque;
	box-shadow: 0px 3px 16px 0px rgba(0,0,0,0.75);
`;

const buttonProps = { width: String, height: String, primary: Boolean, mt: String, mb: String, ml: String};
export const BtnAction = styled('button', buttonProps)`
	width: ${props => props.width || 200}px;
	height: ${props => props.height || null}px;
	margin-top: ${props => props.mt || null}px !important;
	margin-bottom: ${props => props.mb || null}px !important;
	margin-left: ${props => props.ml || null}px !important;
	color: #FFF;
	font-family: 'game-over';
	text-decoration: none;
	outline: 0;
	margin: 0 auto;
	border-radius: 5px;
	border: solid 1px ${props => props.primary ? '#cb3b27' : '#f3a200'};
	background: ${props => props.primary ? '#cb3b27' : '#f3a200'};
	text-align: center;
	padding: 20px 30px;
	transition: all 0.1s;
	box-shadow: 0px 9px 0px ${props => props.primary ? '#84261a' : '#a97f34'};

	&:active {
    box-shadow: 0px 2px 0px ${props => props.primary ? '#84261a' : '#b98d2b'};
    position:relative;
    top:7px;
	}
`;

export const CardTitle = styled.h1`
  font-family: 'Star-Jedi';
  margin: 0;
`;