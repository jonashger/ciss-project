import React, { Component } from 'react'
import CustomTable from '../components/CustomTable';
import { withStyles, Button, Grid } from '@material-ui/core';
import API from '../core/http/API';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';


const style = {
  container: {
    margin: '0 auto',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex'
  },
  right: {
    textAlign: 'right'
  },
  center: {
    textAlign: 'center'
  },
  actionButton: {
    margin: '0 0 0 5px',
    padding: '5px',
    '& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
      marginRight: '0px'
    }
  },
  actionButtonRound: {
    width: 'auto',
    height: 'auto',
    minWidth: 'auto',
  },
  iconList: {
    verticalAlign: 'middle',
    width: '17px',
    height: '17px',
    top: '-1px',
    position: 'relative'
  },
  table: {
    width: '100%'
  }
}

export class Funcionarios extends Component {

  constructor() {
    super();

    this.state = {
      funcionarios: [],
    }
  }


  componentDidMount() {
    this.adquirirFuncionarios();
  }

  adquirirFuncionarios() {
    API.get('funcionario/all').then(funcionarios => {
      this.setState({ funcionarios: funcionarios.data });
    });
  }

  _excluirFuncionario(id) {
    API.delete(`funcionario/${id}`).then(() => {
      this.adquirirFuncionarios();
    });
  }



  dataToTableData = () => {
    const { funcionarios } = this.state;

    let funcionariosRetorno = [];
    funcionarios.forEach(element => {
      funcionariosRetorno = funcionariosRetorno.concat([[
        element.id,
        element.nome,
        element.sobrenome,
        element.email,
        element.nis,
        this.botaoEditar(element.id),
        this.botaoExcluir(element.id)
      ]])
    });

    return funcionariosRetorno;
  }

  botaoEditar = funcionario => {
    const { classes } = this.props;

    return (
      <Button
        color='primary'
        className={classes.actionButton + ' ' + classes.actionButtonRound}
        key={funcionario.id}
        onClick={() => this._editarFuncionario(funcionario)}
      >
        <Edit className={classes.iconList} />
      </Button>
    );
  }
  botaoExcluir = funcionario => {
    const { classes } = this.props;

    return (
      <Button
        color='secondary'
        className={classes.actionButton + ' ' + classes.actionButtonRound}
        key={funcionario.id}
        onClick={() => this._excluirFuncionario(funcionario)}
      >
        <Delete className={classes.iconList} />
      </Button>
    );
  }


  _editarFuncionario = (id) => {
    this.props.history.push(`/cadastro/${id}`);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Grid item xs={12} sm={10} lg={8}
          className={classes.table}>
          <h2>Listagem de funcionários</h2>
          <CustomTable
            tableHead={[
              'Código',
              'Nome',
              'Sobrenome',
              'Email',
              'Nis',
              'Editar',
              'Excluir'
            ]}
            tableData={this.dataToTableData()}
            customCellClasses={[
              classes.center,
              classes.right,
              classes.center,
              classes.center
            ]}
            customClassesForCells={[0, 4, 5, 6]}
            customHeadCellClasses={[
              classes.center,
              classes.right,
              classes.center,
              classes.center
            ]}
            customHeadClassesForCells={[0, 4, 5, 6]}
            footer={true}
          />
        </Grid>
      </div >
    )
  }
}

export default withStyles(style)(Funcionarios)
