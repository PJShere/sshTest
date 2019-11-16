pipeline {
  agent any
    stages {
        stage('build version to package.json') {
            steps {
		      sh '''
                            sed -i "5s/\"jenkins_build.*/\"jenkins_build\": \"${BUILD_NUMBER}\"," ./package.json
			    cat package.json
			'''
                }
            }
         }
      }
