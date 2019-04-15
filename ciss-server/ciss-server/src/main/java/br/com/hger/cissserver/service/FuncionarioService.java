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

	@PostMapping
	public abstract ValorBooleanoDTO novoFuncionario(@RequestBody FuncionarioDTO funcionarioDTO);

	@PostMapping(path = "/{id}")
	public abstract ValorBooleanoDTO atualizaFuncionario(
			@PathVariable(value = "id", required = true) Long codigoFuncionario, FuncionarioDTO funcionarioDTO);

	@DeleteMapping(path = "/{id}")
	public abstract ValorBooleanoDTO deleteFuncionario(
			@PathVariable(value = "id", required = true) Long codigoFuncionario);

	@GetMapping(path = "/all")
	public abstract List<FuncionarioDTO> adquirirFuncionarios();

}
