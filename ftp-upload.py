host = 'host.name.com'
username = ''
password = ''
upload_dir = "./build"
port = 21

import os.path, os
from ftplib import FTP, error_perm
ftp = FTP()
ftp.connect(host,port)
ftp.login(username,password)

def placeFiles(ftp, path):
	for name in os.listdir(path):
		localpath = os.path.join(path, name)
		if os.path.isfile(localpath):
			print("STOR", name, localpath)
			ftp.storbinary('STOR ' + name, open(localpath,'rb'))
		elif os.path.isdir(localpath):
			print("MKD", name)
			try:
				ftp.mkd(name)
			except error_perm as e:
				if not e.args[0].startswith('550'): 
					raise
			print("CWD", name)
			ftp.cwd(name)
			placeFiles(ftp, localpath)           
			print("CWD", "..")
			ftp.cwd("..")
placeFiles(ftp, upload_dir)
ftp.quit()