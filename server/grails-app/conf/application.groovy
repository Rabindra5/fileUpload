environments {
development
        {
         server.port = 8085
dataSource
        {
         logSql= true
            dbCreate ='create-drop'
//            dbCreate = 'update'
            url = "jdbc:mysql://localhost:3306/personal_database"
            username = "developer"
            password = "java1177"
        }
        }
}