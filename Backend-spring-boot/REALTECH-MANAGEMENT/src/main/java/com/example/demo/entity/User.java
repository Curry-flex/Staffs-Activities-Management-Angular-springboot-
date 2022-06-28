package com.example.demo.entity;

import javax.persistence.*;



import java.util.Set;

@Entity
public class User {
//	
//	    @Id
//	    @GeneratedValue (strategy = GenerationType.AUTO)
//	    private int ID;
//	    private String userName;
//	    private String userFirstName;
//	    private String userLastName;
//	    private String userPassword;
//	    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//	    @JoinTable(name = "USER_ROLE",
//	            joinColumns = {
//	                    @JoinColumn(name = "USER_ID")
//	            },
//	            inverseJoinColumns = {
//	                    @JoinColumn(name = "ROLE_ID")
//	            }
//	    )
//	    private Set<Role> role;
//	 
//	    
//	     
//		public User() {
//			super();
//			// TODO Auto-generated constructor stub
//		}
//		
//		
//		public User(int iD, String userName, String userFirstName, String userLastName, String userPassword,
//				Set<Role> role) {
//			super();
//			ID = iD;
//			this.userName = userName;
//			this.userFirstName = userFirstName;
//			this.userLastName = userLastName;
//			this.userPassword = userPassword;
//			this.role = role;
//		}
//
//
//		public int getID() {
//			return ID;
//		}
//		public void setID(int iD) {
//			ID = iD;
//		}
//		public String getUserName() {
//			return userName;
//		}
//		public void setUserName(String userName) {
//			this.userName = userName;
//		}
//		public String getUserFirstName() {
//			return userFirstName;
//		}
//		public void setUserFirstName(String userFirstName) {
//			this.userFirstName = userFirstName;
//		}
//		public String getUserLastName() {
//			return userLastName;
//		}
//		public void setUserLastName(String userLastName) {
//			this.userLastName = userLastName;
//		}
//		public String getUserPassword() {
//			return userPassword;
//		}
//		public void setUserPassword(String userPassword) {
//			this.userPassword = userPassword;
//		}
//		public Set<Role> getRole() {
//			return role;
//		}
//		public void setRole(Set<Role> role) {
//			this.role = role;
//		}

	     
	    @Id
	    @GeneratedValue (strategy = GenerationType.IDENTITY)
	    private int id;
	    private String userName;
	    private String userFirstName;
	    private String userLastName;
	    private String userPassword;
	    @Transient
	    private int role_id;
	    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
		@JoinTable(
				name="user_role",
				joinColumns = @JoinColumn(
						name="user_id",
						referencedColumnName = "id"
						),
				inverseJoinColumns = @JoinColumn(
						name="role_id",
						referencedColumnName = "id"
						)
				)
	    private Set<Role> role;
		public User() {
			super();
			// TODO Auto-generated constructor stub
		}
		public User(int id, String userName, String userFirstName, String userLastName, String userPassword,
				int role_id, Set<Role> role) {
			super();
			this.id = id;
			this.userName = userName;
			this.userFirstName = userFirstName;
			this.userLastName = userLastName;
			this.userPassword = userPassword;
			this.role_id = role_id;
			this.role = role;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getUserFirstName() {
			return userFirstName;
		}
		public void setUserFirstName(String userFirstName) {
			this.userFirstName = userFirstName;
		}
		public String getUserLastName() {
			return userLastName;
		}
		public void setUserLastName(String userLastName) {
			this.userLastName = userLastName;
		}
		public String getUserPassword() {
			return userPassword;
		}
		public void setUserPassword(String userPassword) {
			this.userPassword = userPassword;
		}
		public int getRole_id() {
			return role_id;
		}
		public void setRole_id(int role_id) {
			this.role_id = role_id;
		}
		public Set<Role> getRole() {
			return role;
		}
		public void setRole(Set<Role> role) {
			this.role = role;
		}
		
		
		
 
}
