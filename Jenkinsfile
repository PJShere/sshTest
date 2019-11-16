pipeline 
    stages {
        stage('build version to package.json') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
		      sh '''
                            sed -i "5s/\"jenkins_build.*/\"jenkins_build\": \"${BUILD_NUMBER}\"," ./package.json
			    cat package.json
			'''
                }
            }
         }
      }
