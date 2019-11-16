pipeline {
  agent any
    stages {
        stage('build version to package.json') {
            steps {
			sh label: '', script: 'sed -i "5s/\\*jenkins_build.*/\\"jenkins_build\\": \\"$BUILD_ID\\",/" ./package.json'
			sh label: '', script: 'cat package.json'
                }
            }
         }
      }
