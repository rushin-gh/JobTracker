--create database JobTracker
use JobTracker

-- For creating user in database
create Login app_login with password = 'app_password'
create user app_user for Login app_login

alter role db_datareader add member app_user
alter role db_datawriter add member app_user
alter role db_ddladmin add member app_user