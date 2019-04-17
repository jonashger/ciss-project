import React, { Component } from 'react'

import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { Button, Grid } from '@material-ui/core';
import API from './../core/http/API';


const styles = ({
    container: {
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputContainer: {
        width: '100%',
        marginTop: 25,
    },
    buttonCadastrar: {
        marginTop: 25,
        width: '50%'
    }
})

export class FormFuncionario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nomeError: 'invalid',
            sobrenomeError: 'invalid',
            emailError: 'invalid',
            nisError: 'invalid',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isEmail(email) {
        var checkend = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
        return (email.search(checkend) !== -1)
    }

    handleChange(field, event, type, min, max) {
        const valor = event.target.value;
        let error = false;
        switch (type) {
            case 'email':
                error = !this.isEmail(valor)
                break;
            case 'text':
                error = min && (valor.length < min || valor.length > max);
                break;
            default:
                break;
        }

        this.setState({ [field]: event.target.value, [field + 'Error']: error ? 'invalid' : '' });
    }

    handleSubmit(event) {
        const data = {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            email: this.state.email,
            nis: this.state.nis
        }

        API.post('/funcionario/novo', data)
            .then(res => {
                if (res.data.valor) {
                    this.setState({ nome: '', sobrenome: '', email: '', nis: '' })
                }
            }).catch(err => {
                if (err.response.status === 400) {
                    switch (err.response.data.message) {
                        case 'NOME_INVALIDO':
                            this.setState({ nomeError: 'invalid' })
                            break;
                        case 'SOBRENOME_INVALIDO':
                            this.setState({ sobrenomeError: 'invalid' })

                            break;
                        case 'EMAIL_INVALIDO':
                            this.setState({ emailError: 'invalid' })

                            break;
                        case 'NIS_NAO_INFORMADO':
                            this.setState({ nisError: 'invalid' })

                            break;

                        default:
                            break;
                    }
                }

            });
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.container}>
                    <h2>Formulário de Cadastro</h2>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <FormControl className={classes.inputContainer}>
                            <InputLabel>
                                Nome
                        </InputLabel>
                            <Input
                                value={this.state.nome}
                                id="nome"
                                autoFocus
                                required={true}
                                error={this.state.nomeError === 'invalid'}
                                onChange={(event) => this.handleChange('nome', event, 'text', 2, 30)}
                            />
                        </FormControl>
                        <FormControl className={classes.inputContainer}>
                            <InputLabel>
                                Sobrenome
                            </InputLabel>
                            <Input
                                id="sobrenome"
                                value={this.state.sobrenome}
                                error={this.state.sobrenomeError === 'invalid'}
                                onChange={(event) => this.handleChange("sobrenome", event, 'text', 2, 50)}
                            />
                        </FormControl>
                        <FormControl className={classes.inputContainer}>
                            <InputLabel >
                                Email
                            </InputLabel>
                            <Input
                                id="email"
                                required
                                type='email'
                                value={this.state.email}
                                error={this.state.emailError === 'invalid'}
                                onChange={(event) => this.handleChange("email", event, 'email')}
                            />
                        </FormControl>
                        <FormControl className={classes.inputContainer}>
                            <InputLabel>
                                PIS/NIS
                             </InputLabel>
                            <Input
                                id="nis"
                                value={this.state.nis}
                                type='number'
                                error={this.state.nisError === 'invalid'}
                                onChange={(event) => this.handleChange("nis", event)}
                            />
                        </FormControl>
                        <Button className={classes.buttonCadastrar} variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>Cadastrar</Button>
                    </Grid>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(FormFuncionario);
