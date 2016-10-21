import os
DJ_PROJECT_DIR = os.path.dirname(__file__)
BASE_DIR = os.path.dirname(DJ_PROJECT_DIR)
WSGI_DIR = os.path.dirname(BASE_DIR)
REPO_DIR = os.path.dirname(WSGI_DIR)
DATA_DIR = os.environ.get('OPENSHIFT_DATA_DIR', BASE_DIR)

print(os.path.join(WSGI_DIR, 'misc'))
print('-')
print(os.path.join(DJ_PROJECT_DIR,'misc'))