package com.estrutura.dados.atividadefinal.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estrutura.dados.atividadefinal.entities.Cliente;
import com.estrutura.dados.atividadefinal.repositories.ClienteRepository;

@Service
public class ClienteService {
	
	private Map<String, Cliente> clientes;


	
	@Autowired
	private ClienteRepository repository;
	
	public Cliente buscarPorCpf(String cpf) {
		List<Cliente> clientesBanco = repository.findByCpf(cpf);
    	clientes = new HashMap<>();
    	for(Cliente cliente:clientesBanco) {
			clientes.put(cliente.getCpf(), cliente);
		}
		return clientes.get(cpf);
	}
	
	public List<Cliente> getAllClientes() {
        return repository.findAll();
    }
	
	public Cliente salvar(Cliente cliente) {
		return repository.save(cliente);
	}
	
}
