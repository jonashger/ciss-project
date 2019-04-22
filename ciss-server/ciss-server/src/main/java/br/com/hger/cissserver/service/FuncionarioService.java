package br.com.hger.cissserver.service;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.hger.cissserver.dto.FuncionarioDTO;
import br.com.hger.cissserver.dto.ValorBooleanoDTO;

@RestController
@RequestMapping("/funcionario")
public interface FuncionarioService {

	/**
	 * irá salvar um novo funcionario
	 * 
	 * @param funcionarioDTO dados do funcionario
	 * @return valor = true quando salva o registro com sucesso
	 */
	@PostMapping
	public abstract ValorBooleanoDTO novoFuncionario(@RequestBody FuncionarioDTO funcionarioDTO);

	/**
	 * Atualizar o funcionario
	 * 
	 * @param codigoFuncionario id do funcionario que será atualizado
	 * @param funcionarioDTO    dados do funcionario
	 * @return valor = true quando atualiza o registro com sucesso
	 */
	@PostMapping(path = "/{id}")
	public abstract ValorBooleanoDTO atualizaFuncionario(
			@PathVariable(value = "id", required = true) Long codigoFuncionario,
			@RequestBody FuncionarioDTO funcionarioDTO);

	/**
	 * Exclui o funcionário
	 * 
	 * @param codigoFuncionario id do funcionario a ser excluido
	 * @return valor = true quando exclui com sucesso
	 */
	@DeleteMapping(path = "/{id}")
	public abstract ValorBooleanoDTO deleteFuncionario(
			@PathVariable(value = "id", required = true) Long codigoFuncionario);

	/**
	 * Adquire todos os funcionarios salvos no banco
	 * 
	 * @return lista com os funcionarios
	 */
	@GetMapping(path = "/all")
	public abstract List<FuncionarioDTO> adquirirFuncionarios();

	/**
	 * Adquire somente o funcionario especifico
	 * 
	 * @param codigoFuncionario id do funcionario para adquirir
	 * @return retorna o dto do funcionario
	 */
	@GetMapping("/{id}")
	public abstract FuncionarioDTO adquirirFuncionario(
			@PathVariable(value = "id", required = true) Long codigoFuncionario);
}
