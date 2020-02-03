pipeline {
  agent any
    stages {
        stage('build version to package.json') {
            steps {
		    sh label: '', script: 'sed -i -r "3s/(\\"version\\":\\s\\")([0-9]{1,}.[0-9]{1,}.)([0-9]{1,})(\\",)$/\\1\\2$BUILD_NUMBER\\4/" ./package.json\''
		    sh label: '', script: 'cat package.json'
                }
            }
         }
      }
