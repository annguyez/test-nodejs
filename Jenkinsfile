
pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/annguyez/test-nodejs.git'
            }
        }   

        stage('Clone Stage') {
            steps {
                // This step should not normally be used in your script. Consult the inline help for details.
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    // some block
                    sh 'docker build -t annguyez/test-nodejs:v10 .'
                    sh 'docker push -t annguyez/test-nodejs:v10 .'
                }
            }
        }   

        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

