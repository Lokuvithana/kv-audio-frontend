import { createClient } from "@supabase/supabase-js"

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrYm95cWp1ZnhjcmpodW5uem5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxMjYzNDUsImV4cCI6MjA1NTcwMjM0NX0.BMdVdTNM9mKKdkWC5hIyqfAXvZ7GHQyROjqpJVhNW7M"

const supabase_url = "https://fkboyqjufxcrjhunnzne.supabase.co"

const supabse = createClient(supabase_url,anon_key);

export default function mediaUpload(file){

    return new Promise ((reject,resolve)=>{
        if(file == null){
            reject("No file selected");
        }
        
        //created unique file name
        const timestamp = new Date().getTime();
        const fileName = timestamp + file.name;

        //images represent the bucket name
        supabse.storage.from("images").upload(fileName , file , {

            cacheControl : "3600",
            upsert: false,
        }).then(()=>{

            const publicurl = supabse.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicurl);
            
        }).catch(()=>{
            reject("Error upload File")
        })
    }) 

}

