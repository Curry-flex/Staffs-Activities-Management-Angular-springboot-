package com.example.demo.utility;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;

@Service
public class Helper {
	
	   public String getGepgDate() {
	        // Create formatter
	        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
	        
	        // Local date time instance
	        LocalDateTime localDateTime = LocalDateTime.now();

	        // return formatted String
	        return dateTimeFormatter.format(localDateTime);
	    }
	   
	   public String getReportDate() {
	        // Create formatter
	        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	        
	        // Local date time instance
	        LocalDateTime localDateTime = LocalDateTime.now();

	        // return formatted String
	        return dateTimeFormatter.format(localDateTime);
	    }

}
