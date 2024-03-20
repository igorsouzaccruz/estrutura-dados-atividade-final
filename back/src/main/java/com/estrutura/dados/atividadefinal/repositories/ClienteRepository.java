package com.estrutura.dados.atividadefinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.estrutura.dados.atividadefinal.entities.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Integer> {
	
}
