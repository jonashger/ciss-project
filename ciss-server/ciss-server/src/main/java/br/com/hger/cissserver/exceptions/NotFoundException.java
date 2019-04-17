package br.com.hger.cissserver.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.extern.slf4j.Slf4j;

@ResponseStatus(HttpStatus.NOT_FOUND)
@Slf4j
public class NotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public NotFoundException(String exception) {
		super(exception);
		log.error("BAD_REQUEST: " + exception);
	}

}