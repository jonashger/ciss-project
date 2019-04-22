package br.com.hger.cissserver.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ValidadorUtil {

	private ValidadorUtil() {

	}

	private static final String STRING_VAZIA = "";

	/**
	 * Validador de email para ser utilizado nas validacoes
	 * 
	 * @param email string para ser validada
	 * @return retorno true quando email for validado com sucesso
	 */
	public static Boolean validarEmail(String email) {
		Boolean emailValido = Boolean.FALSE;

		if (!isNullOrEmpty(email)) {

			String expression = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
			Pattern pattern = Pattern.compile(expression, Pattern.CASE_INSENSITIVE);
			Matcher matcher = pattern.matcher(email);
			if (matcher.matches()) {
				emailValido = Boolean.TRUE;
			}
		}
		return emailValido;
	}

	/**
	 * Verifica se a string é nula ou vazia
	 * 
	 * @param texto objeto a ser validado
	 * @return retorna true quando o objeto for nulo ou vazio
	 */
	public static boolean isNullOrEmpty(String texto) {

		return IfNull.get(texto, STRING_VAZIA).equals(STRING_VAZIA);
	}

	/**
	 * valida se o atributo é um numero
	 * 
	 * @param atributo qualquer String
	 * @return true quando a string for um numero
	 */
	public static boolean isNumeric(String atributo) {
		try {
			Double.valueOf(atributo);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
