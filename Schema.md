Ben Graff, Alan Ames, Ricardo Leite 

User (***userID***, firstname, lastname, username, password)

Content(***contentID***, path, date_uploaded, location, info) 

Eventfolder(***eventfolderID***, ***contentID***) 
  - Foreign Key contentID refrences Content
 
FolderInfo(***eventfolderID***, ownerID, eventname)
  - Foreign Key ownerID refrences User
  
Sharegroup(***eventfolderID***, userID, editor)
  - Foreign Key eventfolderID references Eventfolder
  - Foreign Key userID references User


Brief Explanation of Tables

User - stores users personal info (login etc.)
Content - stores path names to files, and metadata for each picture
Eventfolder - stores what files go in which folders and folder details
Sharegroup - stores the permissions for users to view different folders

*path - the file location for the picture
*date_uploaded - date picture was taken
*location - location the picture was taken
*info - can include other image details such as a caption
*eventname - the name of the folder storing the pictures for an event
*editor - can edit/upload to folder unless boolean is false, then the user can just view

1N - No entries will include non atomic values
2N - We refactored Eventfolder table to not contain the event info attributes because they were not dependent on 'contentID' or the whole 'primary key'
3N - We don't have any candidate keys 

*Eventfolder contains two attributes that are keys so that way each row is unique and still maps each picture to its corresponding folder through the eventfolderID in the FolderInfo table.

We could add the eventfolderID foreign key to the Content table to diminish the number of duplicate entries in both tables, but the image wouldn't be able to be in 2 event folders at the same time, they would have to be in images. 
