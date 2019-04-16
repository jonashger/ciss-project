package br.com.hger.cissserver.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "tb_funcionario")
@SequenceGenerator(name = "gen_funcionario", sequenceName = "gen_funcionario", allocationSize = 1)
@Data
public class Funcionario {

	@Id
	@Column(name = "id_funcionario")
	@GeneratedValue(generator = "gen_funcionario", strategy = GenerationType.IDENTITY)
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
