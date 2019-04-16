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
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field, event) {
        this.setState({ [field]: event.target.value });
    }

    handleSubmit(event) {
        const data = {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            email: this.state.email,
            nis: this.state.nis
        }

        API.post('/funcionario/novo',data);
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
                                id="nome"
                                onChange={(event) => this.handleChange("nome", event)}
                            />
                        </FormControl>
                        <FormControl className={classes.inputContainer}>
                            <InputLabel>
                                Sobrenome
                    </InputLabel>
                            <Input
                                id="sobrenome"
                                onChange={(event) => this.handleChange("sobrenome", event)}
                            />
                        </FormControl>
                        <FormControl className={classes.inputContainer}>
                            <InputLabel>
                                Email
                    </InputLabel>
                            <Input
                                id="email"
                                onChange={(event) => this.handleChange("email", event)}
                            />
                        </FormControl>
                        <FormControl className={classes.inputContainer}>
                            <InputLabel>
                                PIS/NIS
                    </InputLabel>
                            <Input
                                id="nis"
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
