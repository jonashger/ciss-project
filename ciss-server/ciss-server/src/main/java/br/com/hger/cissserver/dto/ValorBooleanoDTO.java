package br.com.hger.cissserver.dto;

import java.io.Serializable;

public class ValorBooleanoDTO implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Boolean valor;

	public Boolean getValor() {
		return valor;
	}

	public void setValor(Boolean valor) {
		this.valor = valor;
	}

	public ValorBooleanoDTO(Boolean valor) {
		this.valor = valor;
	}

	public static final ValorBooleanoDTO TRUE = new ValorBooleanoDTO(Boolean.TRUE);

	public static final ValorBooleanoDTO FALSE = new ValorBooleanoDTO(Boolean.FALSE);
}
