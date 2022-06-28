package com.example.demo.repositrory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Support;

public interface SupportRepository extends JpaRepository<Support, Integer> {


	
	@Query(
		value="select * from support s order by created_at desc", nativeQuery = true)
	List<Support> getSupportList();
	
	
	//@Query("select s from Support s  where s.created_at in (select created_at from Support u where u.created_at like ?1%)")
	@Query("select s from Support s where s.report_date between ?1 and ?2 ")
	List<Support> getSupportByDate(String date01,String date02);
	
	
	@Query(value="select count(*) from support where support_from=?1" ,nativeQuery = true )
	int supportCountByBank(String bank);
	//@Query("select cont(support_from) from Support u where s.report_date between ?1 and ?2 ")
	//String getSupportSpecific(String date);
	
	@Query(value="select count(*) from support where support_from=?1 and report_date=?2",nativeQuery = true)
	int todaySupportCount(String bank,String date);
    
}
