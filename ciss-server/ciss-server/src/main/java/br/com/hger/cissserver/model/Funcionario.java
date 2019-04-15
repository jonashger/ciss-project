package br.com.hger.cissserver.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "tb_funcionario")
@Data
public class Funcionario {

	@Column(name = "id_funcionario")
	private Long id;

	@Column(name = "nr_nis")
	private Long nis;

	@Column(name = "tx_nome")
	private String nome;

	@Column(name = "tx_sobrenome")
	private String sobrenome;

	@Column(name = "tx_email")
	private String email;
}
