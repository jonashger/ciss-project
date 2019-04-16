package br.com.hger.cissserver.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import br.com.hger.cissserver.dto.FuncionarioDTO;
import br.com.hger.cissserver.dto.ValorBooleanoDTO;
import br.com.hger.cissserver.model.Funcionario;
import br.com.hger.cissserver.repository.FuncionarioRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class FuncionarioServiceImpl implements FuncionarioService {

	@Autowired
	private FuncionarioRepository funcionarioRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public ValorBooleanoDTO novoFuncionario(FuncionarioDTO funcionarioDTO) {
		log.info("==> Rodando novoFuncionario.");

		funcionarioRepository.save(modelMapper.map(funcionarioDTO, Funcionario.class));

		return ValorBooleanoDTO.TRUE;
	}

	@Override
	public ValorBooleanoDTO atualizaFuncionario(Long codigoFuncionario, FuncionarioDTO funcionarioDTO) {
		log.info("==> Rodando atualizaFuncionario.");

		Funcionario funcionario = modelMapper.map(funcionarioDTO, Funcionario.class);
		funcionario.setId(codigoFuncionario);

		funcionarioRepository.save(funcionario);

		return ValorBooleanoDTO.TRUE;
	}

	@Override
	public ValorBooleanoDTO deleteFuncionario(Long codigoFuncionario) {
		log.info("==> Rodando deleteFuncionario.");

		funcionarioRepository.deleteById(codigoFuncionario);

		return ValorBooleanoDTO.TRUE;
	}

	@Override
	public List<FuncionarioDTO> adquirirFuncionarios() {
		log.info("==> Rodando adquirirFuncionarios.");

		return modelMapper.map(funcionarioRepository.findAll(), List.class);
	}

}
