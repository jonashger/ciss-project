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
    buttonActions: {
        marginTop: 25,
        width: '100%',
        margin: '20px 0',
    },
    errorLabel: {
        color: '#f13b37'
    },
    sucessLabel: {
        color: '#24a85a'
    }
})

export class FormFuncionario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nomeError: '',
            nome: '',
            sobrenomeError: '',
            sobrenome: '',
            emailError: '',
            email: '',
            nisError: '',
            nis: '',
            status: '',
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._openListagem = this._openListagem.bind(this);
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            API.get(`funcionario/${this.props.match.params.id}`).then(obj => {
                const funcionario = obj.data;
                this.setState({
                    id: funcionario.id,
                    nome: funcionario.nome,
                    sobrenome: funcionario.sobrenome,
                    nis: funcionario.nis,
                    email: funcionario.email
                });
            })
        }
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

        this.setState({ [field]: event.target.value, [field + 'Error']: error ? 'invalid' : '', message: '' });
    }


    _openListagem() {
        this.props.history.push('/funcionarios/');
    }


    _handleSubmit(event) {


        const data = {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            email: this.state.email,
            nis: this.state.nis
        }

        API.post(`/funcionario/${this.state.id}`, data)
            .then(res => {
                if (res.data.valor) {
                    this.setState({ nome: '', sobrenome: '', email: '', nis: '', id: '', message: 'Salvo com sucesso!', status: true })
                }
            }).catch(err => {
                this.setState({ message: 'Confira os campos inválidos!', status: false });
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
                        <FormControl className={classes.inputContainer} fullWidth={true}>
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

                        {this.state.message ?
                            <h4 className={this.state.status ? classes.sucessLabel : classes.errorLabel}>{this.state.message} </h4>
                            : null}

                        <Button className={classes.buttonActions} variant="contained" color="primary" type="submit" onClick={this._handleSubmit}>
                            {this.state.id ? 'Alterar o Cadastro' : 'Cadastrar'}
                        </Button>
                        <Button className={classes.buttonActions} variant="contained" color="primary" onClick={this._openListagem}>
                            Listar Funcionários
                        </Button>

                    </Grid>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(FormFuncionario);
