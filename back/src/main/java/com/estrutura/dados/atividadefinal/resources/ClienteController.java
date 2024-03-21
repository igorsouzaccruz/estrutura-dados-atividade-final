package com.estrutura.dados.atividadefinal.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.estrutura.dados.atividadefinal.entities.Cliente;
import com.estrutura.dados.atividadefinal.service.ClienteService;

@RestController
@RequestMapping(value="/clientes")
public class ClienteController {
	
	@Autowired
	private  ClienteService service;
	
	@RequestMapping(value = "/{cpf}", method = RequestMethod.GET)
	public ResponseEntity<?> buscar(@PathVariable String cpf) { 
		Cliente cliente = service.buscarPorCpf(cpf);
		return ResponseEntity.ok(cliente);
	}
	
	@RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Cliente>> getAll() {
        List<Cliente> clientes = service.getAllClientes();
        return ResponseEntity.ok(clientes);
    }
	
	@PostMapping
    public ResponseEntity<Cliente> salvar(@RequestBody Cliente cliente) {
        service.salvar(cliente);
        return new ResponseEntity<>(cliente, HttpStatus.CREATED);
    }
	

}
