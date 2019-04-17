package br.com.hger.cissserver.exceptions;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class InternalException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public InternalException(String exception) {
		super(exception);
		log.error("BAD_REQUEST: " + exception);
	}

}