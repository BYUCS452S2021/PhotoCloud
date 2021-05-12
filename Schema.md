Ben Graff, Alan Ames, Ricardo Leite 

User(***user_id***, firstname, lastname, username, password)

Content(***contentID***, path, date_uploaded, location, info) 

Group(***group_id***, group_name, ***user_id*** )
  - Foreign Key userID references User

Eventfolder(***eventfolderID***, folder_name, folder_description, ***group_id***, ***user_id*** ) 
  - Foreign Key group_id refrences Content
  

## Users
| Name | Type | Required | Unique | Notes|
| ---- | ---- | -------- | ------ | ---- |
| user_id | integer | yes | yes | users id (auto generated) |
| firstname | string | yes | no | users first name|
| lastname | string | yes | no | users last name|
| email | string | yes | yes | users email |
| username | string | yes | yes | users username | 
| password | string | yes | no | users password| 

## Content (Photos/Videos)
| Name | Type | Required | Unique | Notes|
| ---- | ---- | -------- | ------ | ---- |
| content_id | integer | yes | yes | content id (auto generated) |
| path_name | string | yes | yes | path name for content |
| date_uploaded| string | no | no | date content uploaded | 
| location | string | no | no | location for content | 
| info | string | no | no | info for content | 

## Group
| Name | Type | Required | Unique | Notes|
| ---- | ---- | -------- | ------ | ---- |
| group_id | integer | yes | yes | group id (auto generated) | 
| group_name | string | yes | no | group name | 
| user_id | integer | yes | yes | id of owner of group | 

## EventFolder
| Name | Type | Required | Unique | Notes|
| ---- | ---- | -------- | ------ | ---- |
| folder_id | integer | yes | yes | folder id (auto generated) |
| folder_name | string | yes | no | name of folder |
| folder_description | string | no | no | description of folder | 
| group_id | integer | yes | yes | foreign key (auto generated) | 
| user_id | integer | yes | yes | foreign key references id of creator (auto generated) | 


Brief Explanation of Tables

User - stores users personal info (login etc.)
Content - stores path names to files, and metadata for each picture
Eventfolder - stores what files go in which folders and folder details
Group - stores the permissions for users to view different folders

* path - the file location for the picture
* date_uploaded - date picture was taken
* location - location the picture was taken
* info - can include other image details such as a caption
* eventname - the name of the folder storing the pictures for an event
* editor - can edit/upload to folder unless boolean is false, then the user can just view

* Eventfolder contains two attributes that are keys so that way each row is unique and still maps each picture to its corresponding folder through the group_id and user_id

We could add the eventfolderID foreign key to the Content table to diminish the number of duplicate entries in both tables, but the image wouldn't be able to be in 2 event folders at the same time, they would have to be in images. 
