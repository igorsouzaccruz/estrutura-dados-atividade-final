package com.estrutura.dados.atividadefinal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import com.estrutura.dados.atividadefinal.entities.Cliente;
import com.estrutura.dados.atividadefinal.repositories.ClienteRepository;


public class ClienteService {
	
	@Autowired
	private ClienteRepository repository;
	
	public Cliente buscar(Integer id) {
		Optional<Cliente> cliente = repository.findById(id);
		return cliente.orElseThrow(() -> new RuntimeException(
				"Cliente nao encontrado! Id: " + id + " Tipo: " + Cliente.class.getName()));
	}
	
	public List<Cliente> getAllClientes() {
        return repository.findAll();
    }
	
}
