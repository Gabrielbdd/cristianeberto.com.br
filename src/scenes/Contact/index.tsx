import * as React from 'react'
import Helmet from 'react-helmet'
import { Grid, Paper, withStyles } from 'material-ui'

import Title from '../../components/Title'
import Container from '../../components/Container'
import SEO from './SEO'
import { StyledComponent } from 'utils/styledProps'

interface IProps {}

const injectStyles = withStyles(theme => ({
  root: {
    width: '100%',
    margin: 0,

    '& ul': {
      padding: 10
    },

    '& .send-a-message': {
      padding: 20,

    },

    '& .telephones': {
      padding: 20
    },

    '& .adress': {
      padding: 20
    },
  },
}))

const Contact = ({ classes }: IProps & StyledComponent) => {
  return (
    <Grid container className={classes.root}>
      <SEO />

      <Grid item xs={12}>
        <Paper className="send-a-message">
          <Title leftLine>
            Envie uma Mensagem
          </Title>
          <em>Tire suas dúvidas, faça ou elogio ou apenas diga um oi</em>
          <br/>
          <br/>
          <p><strong>Nosso horários de atendimento são:</strong></p>
          <ul>
            <li>08:00 às 18:00 | Segunda a Sexta</li>
            <li>08:00 às 12:00 | Aos sábados</li>
          </ul>
          <br/>
          <p>
            Você pode nos mandar uma mensagem a qualquer momento <a className="outstanding">clicando aqui</a>
          </p>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className="telephones">
          <Title leftLine>
            Telefones
          </Title>
          <br/>
          <p><strong>Fixo:</strong></p>
          <ul>
            <li><a href="tel: 31 3646-6819">31 3646-6819</a></li>
          </ul>
          <br/>
          <p><strong>WhatsApp:</strong></p>
          <ul>
            <li><a href="tel: 31 99137-0004">31 99137-0004</a></li>
            <li><a href="tel: 31 99137-0029">31 99137-0029</a></li>
          </ul>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className="adress">
          <Title leftLine>
            Endereço
          </Title>
          <br/>
          <p>Av. Amazonas, 687, sala 405</p>
          <p>Mesmo prédio da Academia R9, ao lado da loja da Mariza</p>
          <br/>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7502.194062718767!2d-43.94001241265868!3d-19.920315519475803!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xa695916cfb3ac9%3A0x9d0899b72e02f3b9!2sspasso+vip!3m2!1d-19.920652!2d-43.940911!5e0!3m2!1sen!2sbr!4v1513630214164"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default injectStyles(Contact)