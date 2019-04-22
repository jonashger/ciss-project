package br.com.hger.cissserver.dto;

import lombok.Data;

@Data
public class FuncionarioDTO {

	private Long id;

	private Long nis;

	private String nome;

	private String sobrenome;

	private String email;
}
