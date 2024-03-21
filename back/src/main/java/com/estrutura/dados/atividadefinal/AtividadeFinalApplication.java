package com.estrutura.dados.atividadefinal;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.estrutura.dados.atividadefinal.entities.Cliente;
import com.estrutura.dados.atividadefinal.repositories.ClienteRepository;


@SpringBootApplication
public class AtividadeFinalApplication implements CommandLineRunner {
	
	@Autowired
	private ClienteRepository clienterepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AtividadeFinalApplication.class, args);
	}
	
	@Override
    public void run(String... args) throws Exception {
		
		Cliente cliente1 = new Cliente(null, "Lucas", "251.257.590-07");
		Cliente cliente2 = new Cliente(null, "Igor", "806.087.920-04");
		Cliente cliente3 = new Cliente(null, "Moacir", "986.431.280-40");

		clienterepository.saveAll(Arrays.asList(cliente1, cliente2, cliente3));

	}

}
