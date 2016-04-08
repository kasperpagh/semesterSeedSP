package rest;

import java.text.SimpleDateFormat;
import java.util.Date;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("allusers")
@RolesAllowed("Admin")
public class Admin {
  
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getSomething(){
    String now = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss").format(new Date());
    return "[{\"name\": \"Jan\",\"mail\":\"jan@a.dk\"},{\"name\":\"Ann\",\"mail\":\"ann@a.dk\"},{\"name\":\"ib\",\"mail\":\"ib@a.dk\"}]"; 
  }
 
}
