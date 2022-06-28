export  class ProjectPayload{
   id?:number;
   project_title?: String;
   assigned_to?: String;
   start_date?:String;
   end_date?:String;
   description?:String;
   status?:number;
   user_id_fk?:number;
   created_at?:String;
}