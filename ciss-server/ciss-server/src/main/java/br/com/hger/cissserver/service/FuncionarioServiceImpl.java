package br.com.hger.cissserver.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import br.com.hger.cissserver.dto.FuncionarioDTO;
import br.com.hger.cissserver.dto.ValorBooleanoDTO;
import br.com.hger.cissserver.exceptions.BadRequestException;
import br.com.hger.cissserver.exceptions.MensagemServico;
import br.com.hger.cissserver.model.Funcionario;
import br.com.hger.cissserver.repository.FuncionarioRepository;
import br.com.hger.cissserver.util.ValidadorUtil;
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

		this.validarFuncionario(funcionarioDTO);

		Funcionario funcionario = modelMapper.map(funcionarioDTO, Funcionario.class);
		funcionario.setDataCadastro(new Date());
		funcionario.setDataManutencao(new Date());
		funcionarioRepository.save(funcionario);

		return ValorBooleanoDTO.TRUE;
	}

	/**
	 * valida nome, sobrenome, email e nis do funcionario
	 * 
	 * @param funcionarioDTO objeto a ser validado
	 */

	private void validarFuncionario(FuncionarioDTO funcionarioDTO) {

		if (funcionarioDTO.getNome() == null || funcionarioDTO.getNome().length() < 2
				|| funcionarioDTO.getNome().length() > 30) {
			throw new BadRequestException(MensagemServico.NOME_INVALIDO);
		}

		if (funcionarioDTO.getSobrenome() == null || funcionarioDTO.getSobrenome().length() < 2
				|| funcionarioDTO.getSobrenome().length() > 50) {
			throw new BadRequestException(MensagemServico.SOBRENOME_INVALIDO);

		}

		if (funcionarioDTO.getEmail() == null || funcionarioDTO.getEmail().length() > 255
				|| !ValidadorUtil.validarEmail(funcionarioDTO.getEmail())) {
			throw new BadRequestException(MensagemServico.EMAIL_INVALIDO);

		}
		if (funcionarioDTO.getNis() == null) {
			throw new BadRequestException(MensagemServico.NIS_NAO_INFORMADO);

		}

	}

	@Override
	public ValorBooleanoDTO atualizaFuncionario(Long codigoFuncionario, FuncionarioDTO funcionarioDTO) {
		log.info("==> Rodando atualizaFuncionario.");

		this.validarFuncionario(funcionarioDTO);

		Optional<Funcionario> funcionarioOpt = funcionarioRepository.findById(codigoFuncionario);

		if (funcionarioOpt.isPresent()) {

			Funcionario funcionario = funcionarioOpt.get();

			funcionario.setDataManutencao(new Date());
			funcionario.setEmail(funcionarioDTO.getEmail());
			funcionario.setNis(funcionarioDTO.getNis());
			funcionario.setNome(funcionarioDTO.getNome());
			funcionario.setSobrenome(funcionarioDTO.getSobrenome());

			funcionarioRepository.save(funcionario);

			return ValorBooleanoDTO.TRUE;
		}

		return ValorBooleanoDTO.FALSE;
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

		return modelMapper.map(funcionarioRepository.findAllByOrderByIdAsc(), List.class);
	}

	@Override
	public FuncionarioDTO adquirirFuncionario(Long codigoFuncionario) {
		log.info("==> Rodando adquirirFuncionarios.");

		Optional<Funcionario> funcionarioOptional = funcionarioRepository.findById(codigoFuncionario);
		if (funcionarioOptional.isPresent()) {
			return modelMapper.map(funcionarioOptional.get(), FuncionarioDTO.class);
		}

		return null;

	}

}
