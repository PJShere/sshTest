pipeline {
  agent any
    stages {
        stage('build version to package.json') {
            steps {
			sh label: '', script: 'sed -i "5s/\\"jenkins_build.*/\\"jenkins_build\\": \\"$BUILD_NUMBER\\",/" ./package.json'
		        sh script: 'sed -i "4s/\\"version.*/\\"version\\": \\"2.0.$BUILD_NUMBER\\",/" ./package.json'
			sh label: '', script: 'cat package.json'
                }
            }
         }
      }
